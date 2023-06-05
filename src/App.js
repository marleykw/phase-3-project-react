
import React, {useState, useEffect} from "react";
import Header from "./Header";
import NewItemForm from "./NewItemForm";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import ClosetPage from "./ClosetPage";
import ItemDetailPage from "./ItemDetailPage";

function App() {
  const [items, setItems] = useState([]);
 

 
  function handleAddItem(item) {
    setItems([...items, item])
  }


 function handleRemoveItem(id){
    const updatedItemList = items.filter((item)=> item.id !== id);
    setItems(updatedItemList);
  }

  function handleDeleteItem(item) {
    fetch(`http://localhost:9292/closet/${item.id}`, {
      method: "DELETE",
    })
    .then((r)=> {
      if(r.status === 200) {
        handleRemoveItem(item.id)
      }
    });
  }


  useEffect(() => {
    fetch(`http://localhost:9292/closet`)
    .then((r)=>r.json())
    .then((data) => setItems(data))
  }, [])

  return (
    <>
    <Header />
    <NavBar />
    <Routes>
      <Route path="/Form" element={<NewItemForm handleAddItem={handleAddItem} />} />
      <Route exact path="/Closet" element={<ClosetPage handleDeleteItem={handleDeleteItem} items={items} />} />
      <Route exact path="/Closet/:id" element={<ItemDetailPage/>} />
      <Route path="/" element={<ClosetPage handleDeleteItem={handleDeleteItem} items={items} />}/>
    </Routes>
    </>

  )
}

export default App;