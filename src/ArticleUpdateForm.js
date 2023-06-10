
import React, {useState} from "react";
import { useParams } from "react-router";


function ArticleUpdateForm({updateArticle, curArticle}) {
  const params = useParams();
  const [formData, setFormData] = useState({...curArticle})
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedArticle = {
      ...formData
    }
    fetch(`http://localhost:9292/articles/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedArticle),
    })
        .then((r) => r.json())
        .then((article) => updateArticle(article))

  };

  return (
    <div className="item-update-form">
      <h3>Last Worn</h3>
      <form onSubmit={handleSubmit}>
        <input type="date" name="last_worn" placeholder="Last Worn Date" value={formData.last_worn} onChange={handleChange}/>
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange}/>
        <button type="submit">Update Last Worn Date</button>
      </form>
    </div>
  );
}


export default ArticleUpdateForm;
