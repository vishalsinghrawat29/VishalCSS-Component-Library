import "./CardStyle.css";
const CardOverlay = ({ data }) => {
  return (
    <div className="card">
      <div className="card-img overlay-img">
        <img src={data.img} alt={data.title} />
      </div>
      <div className="overlay-text">
        <h1>{data.title}</h1>
        <p>{data.details}</p>
      </div>
    </div>
  );
};
export { CardOverlay };
