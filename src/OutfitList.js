import React from "react";
import Outfit from "./Outfit";


function OutfitList({outfits}) {
  const outfitsToRender = outfits.map((outfit)=> <Outfit key={outfit.id} outfit={outfit} />)
  return (
    <div>
      <ul className="cards">{outfitsToRender}</ul>
    </div>
  );
}

export default OutfitList;