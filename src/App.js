
import React, {useState, useEffect} from "react";
import { Switch, Route , Link, Router} from 'react-router-dom';
import ClosetPage from "./ClosetPage";
import Header from "./Header";



function App() {
  const [outfits, setOutfits] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:9292/closet`)
    .then((r)=>r.json())
    .then((data) => setOutfits(data))
  }, [])
//console.log(outfits)

  return (
    <>
      <Header />
      <ClosetPage outfits={outfits}/>
    </>
  )
}

export default App;