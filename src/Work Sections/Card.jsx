// Card.jsx
import React from "react";
import './Cardd.css'; // your CSS pasted above

export default function Card({ image, tag, title, role, buttonText, onButtonClick }) {
  return (
    <div className="carddd">
        <div className="imgg">
      <img className="theimg" src={image} alt={title} /></div>
      <span className="tag">{tag}</span>
      <h3>{title}</h3>
      <p>{role}</p>
      <div className="paddingbott">
      <button onClick={onButtonClick}>{buttonText}</button></div>
    </div>
  );
}
