import React from "react";
import ItemList from "./ItemList";

function ClosetPage({items, handleDeleteItem}) {
return (
    <div className="main-section">
    <ItemList handleDeleteItem={handleDeleteItem} items={items} />
    </div>
)
}
export default ClosetPage;