import React from "react";
import "./ButtonSecondary.css";

export default function Sbutton({ label }) {
  return (
    <button className="ButtonSecondary">
      {label}
    </button>
  );
}
