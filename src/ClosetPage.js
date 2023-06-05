import React from "react";
import ArticleList from "./ArticleList";

function ClosetPage({articles, handleDeleteArticle}) {
return (
    <div className="main-section">
    <ArticleList handleDeleteArticle={handleDeleteArticle} articles={articles} />
    </div>
)
}
export default ClosetPage;