import React from "react";

function Comments(outfit) {
    const handleDelete = (e) => {
        console.log(e.target.id)
        fetch(`http://localhost:9292/comments/${e.target.id}`, {
            method: "DELETE",
        });
    }

    const comments = outfit.outfit.comments
    const commentsToRender = comments.map((comment)=>
        <div key={comment.id}>
        <h5>{comment.comment}</h5>
        <h6>{comment.created_at}</h6>
        <button onClick={handleDelete} id={comment.id}>X</button>
    </div>)
    return ( 
        <>
            {commentsToRender}
        </>
    )
}

export default Comments;