import React from "react";
import OutfitList from "./OutfitList";

function ClosetPage({outfits, handleUpdate}) {
return (
    <div className="main-section">
        <OutfitList handleUpdate={handleUpdate} outfits={outfits} />
    </div>
)
}
export default ClosetPage;