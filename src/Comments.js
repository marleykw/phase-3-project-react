import React, {useEffect, useState} from "react";

function Comments({comments, deleteComment}) {
const commentData = comments

function handleDelete(id, articleID) {
   
    fetch(`http://localhost:9292/comments/${id}`, {
      method: "DELETE",
    })
    .then((r)=> {
      if(r.status === 200) {
        deleteComment(id, articleID)
      }
    });
}

    return ( 
    <>
      <h3>Comments</h3>
      {commentData && commentData.map((comment) => (
          <div key={comment.id}>
            <h5>{comment.comment}</h5>
            <h6>{comment.created_at}</h6>
            <button onClick={()=>handleDelete(comment.id, comment.article_id)} id={comment.id}>X</button>
        </div>
      ))}
    </>
    )
  } 
export default Comments;

/*  <h3>Comments</h3>
        {commentData && commentData.map((comment) => (
          <div key={comment.id}>
            <h5>{comment.comment}</h5>
            <h6>{comment.created_at}</h6>
            <button onClick={()=>handleDelete(comment.id, articleInfo.id)} id={comment.id}>X</button>
        </div>
))}
*/