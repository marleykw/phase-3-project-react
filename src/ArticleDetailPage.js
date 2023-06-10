import React, {useState , useEffect} from "react";
import { useParams } from "react-router";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import ArticleUpdateForm from "./ArticleUpdateForm";


function ArticleDetailPage({articles, handleUpdateArticles}) {
const params = useParams();
const articleId = params.id
const [curArticle, setArticleInfo] = useState([{comments: []}])


useEffect(() => {
    const singleArticle = articles.find(obj => obj.id == articleId)
    setArticleInfo(singleArticle)
  }, [articles]);

  const addComment = (comment) => {
    const filteredArticles = articles.map((article)=> {
      if (article.id == comment.article_id) {
        const oldComments = [...article.comments]
        const newComments = [...oldComments, comment]
        article.comments = newComments
        return article
        }
      else {
      return article };
    });

    handleUpdateArticles(filteredArticles)
  }  

  const deleteComment = (id, articleID) => {
    const updatedcomments = curArticle.comments.filter((comment) => comment.id !== id)
    curArticle.comments = updatedcomments
    const filteredArticles = articles.map((article)=> {
      if (article.id == articleID) {
        const updatedcomments = curArticle.comments.filter((comment) => comment.id !== id)
        article.comments = updatedcomments
        return article
      } else {
      return article };
    });
    handleUpdateArticles(filteredArticles)
  }  

  const updateArticle = (updatedArticle) => {
    const curID  = updatedArticle.id
    const filteredArticles = articles.map((article)=> {
      if (article.id == curID) {
        return updatedArticle
      } else {
      return article };
    });
    handleUpdateArticles(filteredArticles)
  }
if(curArticle !== undefined && curArticle.id) {
return(
<div className="card">  
  <h3>Selected Item</h3>
  <img src={curArticle.url} alt={curArticle.name} />
  <h2>{curArticle.name}</h2>
  <h5>${`${curArticle.price}`}</h5>
  <h5>{`Purachased on: ${curArticle.purchase_date}`}</h5>
  <h5>{`Last worn on: ${curArticle.last_worn}`}</h5>
  <Comments comments={curArticle.comments} articles={articles} deleteComment={deleteComment} />
  <CommentForm articleId={curArticle.id} addComment={addComment}/>
  <ArticleUpdateForm updateArticle={updateArticle} curArticle={curArticle}/>
</div>
)
}
}
export default ArticleDetailPage;

