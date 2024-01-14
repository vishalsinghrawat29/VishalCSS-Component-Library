import "./CardStyle.css";
const CardResponsive = ({ data }) => {
  return (
    <div className="card card-responsive">
      <div className="card-img">
        <img src={data.img} alt={data.title} />
      </div>
      <div className="card-text">
        <h1>{data.title}</h1>
        <p>{data.details}</p>
      </div>
    </div>
  );
};
export { CardResponsive };
