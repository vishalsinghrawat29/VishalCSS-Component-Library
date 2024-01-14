import "./CardStyle.css";
const CardBadge = ({ data }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={data.img} alt={data.title} />
        <span className="tag">{data.tag}</span>
      </div>
      <h1>{data.title}</h1>
      <p>{data.details}</p>
    </div>
  );
};
export { CardBadge };
