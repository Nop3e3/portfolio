import React from "react";
import "./Foldercontent.css";

export default function Foldercontent({ category, title, caption }) {
  return (
    <div className="cardd">
      <div className="card-categoryy">{category}</div>
      <h2 className="card-titlee">{title}</h2>
      <p className="card-captionn">{caption}</p>
    </div>
  );
}