import React from "react";
import Outfit from "./Outfit";


function OutfitList({outfits, handleUpdate}) {
  const outfitsToRender = outfits.map((outfit)=> <Outfit key={outfit.id} outfit={outfit} outfit_id={outfit.id} handleUpdate={handleUpdate}/>)
  return (
    <div>
      <ul className="cards">{outfitsToRender}</ul>
    </div>
  );
}

export default OutfitList;