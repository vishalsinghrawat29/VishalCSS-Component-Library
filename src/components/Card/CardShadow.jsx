import "./CardStyle.css";
const CardShadow = ({ data }) => {
  return (
    <div className="card card-shadow">
      <div className="card-img">
        <img src={data.img} alt={data.title} />
      </div>
      <h1>{data.title}</h1>
      <p>{data.details}</p>
    </div>
  );
};
export { CardShadow };
