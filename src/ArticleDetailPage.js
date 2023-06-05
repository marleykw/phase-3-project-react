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
    const newComment = comment
    if (curArticle.comments === undefined) {
      curArticle.comments = comment
    } else {
      const newComments = [newComment, ...curArticle.comments]
      curArticle.comments = newComments
    }
    const filteredArticles = articles.filter((article)=> article.id !== comment.article_id)
    const newArticles = [...filteredArticles, curArticle]
    handleUpdateArticles(newArticles)
  }  

  const deleteComment = (id, articleID) => {
    const updatedcomments = curArticle.comments.filter((comment) => comment.id !== id)
    curArticle.comments = updatedcomments
    const filteredArticles = articles.filter((article)=> article.id !== articleID)
    const newArticles = [...filteredArticles, curArticle]
    handleUpdateArticles(newArticles)
  }  

  const updateArticle = (article) => {
    const updatedLastWorn = article.last_worn
    const curID  = article.id
    curArticle.last_worn = updatedLastWorn
    const filteredArticles = articles.filter((article)=> article.id !== curID)
    const newArticles = [...filteredArticles, curArticle]
    handleUpdateArticles(newArticles)
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
  <ArticleUpdateForm updateArticle={updateArticle}/>
</div>
)
}
}
export default ArticleDetailPage;

