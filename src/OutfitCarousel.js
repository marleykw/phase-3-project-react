import React from "react";
function OutfitCarousel(articles) {

    const article = articles.article
    //console.log(article)
    return (
        <div className="carousel">
            <img src={article.url} alt={article.name} />
        </div>
    )
}
export default OutfitCarousel;