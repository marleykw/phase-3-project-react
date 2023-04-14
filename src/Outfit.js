import React from "react";
import OutfitCarousel from "./OutfitCarousel";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

function Outfit(props, {handleUpdate}) {
    
    const articles = props.outfit.articles
    const articlesToRender = articles.map((article)=><OutfitCarousel key={article.id} article={article} outfit_id={props.outfit_id}/>)
return (
    <div className="card" id={props.outfit_id}>
        <h3>{props.outfit.name}</h3>
        {articlesToRender}
        <Comments outfit={props.outfit} outfit_id={props.outfit_id}/>
        <CommentForm outfit_id={props.outfit_id} handleUpdate={handleUpdate}/>
    </div>
)
}
export default Outfit;