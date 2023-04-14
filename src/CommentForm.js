import React, {useState} from "react";

function CommentForm({outfit_id, handleUpdate}) {
    const id = outfit_id
    const initialFormData = {
        comment: "",
        created_at: "",
        updated_at: "",
        outfit_id: ""
      }
      const [formData, setFormData] = useState(initialFormData)

    const handleChange = (e) => {
        e.preventDefault()
        setFormData({
          ...formData,
          [e.target.name]:e.target.value
        })
        //console.log(formData)
    }
        const handleSubmit = (e) => {
        e.preventDefault()
        const newComment = {
            ...formData
        }
            fetch(`http://localhost:9292/closet`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  outfit_id: e.target.id,
                  comment: newComment.comment
                })
              });              
    }

    return(
        <form id={id} onSubmit={handleSubmit}>
            <input type="text" name="comment" placeholder="Comments" onChange={handleChange}/>
            <button type="submit" id={id}>Post Comment</button>
        </form>
    )
}

export default CommentForm;
















