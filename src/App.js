
import React, {useState, useEffect} from "react";
import { Routes ,Route } from 'react-router-dom';
import ClosetPage from "./ClosetPage";
import Header from "./Header";



function App() {
  const [outfits, setOutfits] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:9292/closet`)
    .then((r)=>r.json())
    .then((data) => setOutfits(data))
  }, [])

  const handleUpdate = () => {
    fetch(`http://localhost:9292/closet`)
    .then((r)=>r.json())
    .then((data) => setOutfits(data))
  }



  return (
    <>
      <Header />
      <ClosetPage  handleUpdate={handleUpdate} outfits={outfits}/>
    </>
  )
}

export default App;