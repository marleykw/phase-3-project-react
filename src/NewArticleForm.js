
import React, {useState} from "react";

function NewArticleForm({handleAddArticle}) {
  const initialFormData = {
    name: "",
    image: "",
    price: "",
    date: ""
  }
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArticle = {
      ...formData
    }

    fetch("http://localhost:9292/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(newArticle),
    })
        .then((r) => r.json())
        .then((article) => handleAddArticle(article))

        setFormData(initialFormData)
  };
  return (
    <div className="new-item-form">
      <h2>Add to Closet</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="New Item Name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange}/>
        <input type="date" name="date" placeholder="Purchase Date" value={formData.date} onChange={handleChange}/>
        <button type="submit">Add New Item</button>
      </form>
    </div>
  );
}


export default NewArticleForm;
