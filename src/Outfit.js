import React from "react";
import OutfitCarousel from "./OutfitCarousel";

function Outfit(props) {
    console.log(props.outfit.id)
    const articles = props.outfit.articles
    const articlesToRender = articles.map((article)=><OutfitCarousel key={article.id} article={article} />)
return (
    <div className="card">
       <h3>{props.outfit.name}</h3>
        {articlesToRender}
    </div>
)
}
export default Outfit;