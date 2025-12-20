
import React from "react";
import './Pagination.css'; // your CSS pasted above

export default function Pageination() {
  return (
<nav class="pagination-container" aria-label="Pagination">
    <ul class="pagination-list">
        <li class="page-item disabled">
            <a href="#" class="page-link" aria-label="Previous">
                &laquo;
            </a>
        </li>

        <li class="page-item active">
            <a href="#" class="page-link">1</a>
        </li>

        <li class="page-item">
            <a href="#" class="page-link">2</a>
        </li>
        <li class="page-item">
            <a href="#" class="page-link">3</a>
        </li>

        <li class="page-item ellipsis" aria-hidden="true">
            <span>...</span>
        </li>

        <li class="page-item">
            <a href="#" class="page-link">10</a>
        </li>

        <li class="page-item">
            <a href="#" class="page-link" aria-label="Next">
                &raquo;
            </a>
        </li>
    </ul>
</nav>
  );
}
