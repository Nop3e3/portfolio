import React from "react";
import "./TitleandCaption.css";

export default function Sbutton({ title, caption }) {
  return (
    <div className="titlencaption-container">
          <h3 className="section-title">{title}</h3>
        <p className="section-caption">{caption}</p>
    </div>
  );
}