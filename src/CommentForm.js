import React, {useState} from "react";

function CommentForm({articleId, addComment}) {
    const id = articleId
    const initialFormData = {
        comment: "",
        created_at: "",
        updated_at: "",
        article_id: ""
      }
      const [formData, setFormData] = useState(initialFormData)

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]:e.target.value
        })
    }
        const handleSubmit = (e) => {
        e.preventDefault()
        const newComment = {
            ...formData
        }
            fetch(`http://localhost:9292/comments`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  article_id: id,
                  comment: newComment.comment
                })
              }).then (r=> {
                if (r.ok) {
                  r.json()
                  .then(addComment)
                }
              })  
          setFormData(initialFormData)
    }

    return(
        <form id={id} onSubmit={handleSubmit}>
            <input type="text" name="comment" placeholder="Add Comments" onChange={handleChange} value={formData.comment}/>
            <button type="submit" id={id}>Post Comment</button>
        </form>
    )
}

export default CommentForm;
















