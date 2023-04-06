import React from "react";
import OutfitList from "./OutfitList";

function ClosetPage({outfits}) {
return (
    <div className="main-section">
        <h1>Outfits</h1>
        <OutfitList outfits={outfits} />
    </div>
)
}
export default ClosetPage;