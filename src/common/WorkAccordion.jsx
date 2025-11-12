import "./WorkAccordion.css";

export default function Card({ image, title, caption, category }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="container">
        <h3 className="card-title">{title}</h3>
        <p className="card-caption">{caption}</p>
        <div className="card-category">{category}</div>
      </div>
    </div>
  );
}
