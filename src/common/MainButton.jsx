import React from "react";
import "./MainButton.css";

export default function MainButton({ label }) {
  return (
    <button className="mainn-button">
      {label}
    </button>
  );
}
