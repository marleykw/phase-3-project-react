import React from "react";
import Article from "./Article";


function ArticleList({articles, handleDeleteArticle}) {
  const articlesToRender = articles.map((article)=> <Article key={article.id} article={article} handleDeleteArticle={handleDeleteArticle} />)
  return (
    <div className="itemList">
      <ul className="Items">{articlesToRender}</ul>
    </div>
  );
}

export default ArticleList;
