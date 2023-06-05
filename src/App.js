
import React, {useState, useEffect} from "react";
import Header from "./Header";
import NewArticleForm from "./NewArticleForm";
import {Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import ClosetPage from "./ClosetPage";
import ArticleDetailPage from "./ArticleDetailPage";

function App() {
  const [articles, setArticles] = useState([]);
  
 
  function handleAddArticle(article) {
    setArticles([...articles, article])
  }

 function handleRemoveArticle(id){
    const updatedArticleList = articles.filter((article)=> article.id !== id);
    setArticles(updatedArticleList);
  }

  function handleDeleteArticle(article) {
    fetch(`http://localhost:9292/articles/${article.id}`, {
      method: "DELETE",
    })
    .then((r)=> {
      if(r.status === 200) {
        handleRemoveArticle(article.id)
      }
    });
  }

  function handleUpdateArticles(newArticles) {
    setArticles(newArticles)
  }

  useEffect(() => {

    fetch(`http://localhost:9292/articles`)
    .then((r)=>r.json())
    .then((data) => setArticles(data))
  }, [])
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/Form" element={<NewArticleForm handleAddArticle={handleAddArticle} />} />
        <Route exact path="/Closet" element={<ClosetPage handleDeleteArticle={handleDeleteArticle} articles={articles} />} />
        <Route exact path="/Closet/:id" element={<ArticleDetailPage articles={articles} handleUpdateArticles={handleUpdateArticles}/>} />
      </Routes>
    </>

  )
}

export default App;

