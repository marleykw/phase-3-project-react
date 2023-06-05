import React from "react";
import { Link } from "react-router-dom";

function Article(article, {handleDeleteArticle}) {
const {url, name, id} = article.article
return (
  <div className="card">
    <img src={url} alt={name} />
    <h4>
      <Link to={`/Closet/${id}`}>{name}</Link>
    </h4>
    <button type="delete" onClick={()=>article.handleDeleteArticle(article.article)}>Donate</button>
  </div>
  );
}
export default Article;