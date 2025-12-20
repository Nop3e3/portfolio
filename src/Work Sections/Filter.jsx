
import React from "react";
import './Filters.css'; // your CSS pasted above

export default function Filters() {
  return (
<div class="controls-container">
    <div class="filter-control">
        <span class="label">FILTER :</span>
        <button class="dropdown-button">
            UX / UI <span class="arrow">↓</span>
        </button>
    </div>
    <div class="sort-control">
        <span class="label">SORT BY :</span>
        <button class="dropdown-button">
            Latest <span class="arrow">↓</span>
        </button>
    </div>
</div>// Card.jsx
  );
}
