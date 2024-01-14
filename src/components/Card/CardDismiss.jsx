import "./CardStyle.css";
const CardDismiss = ({ data }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={data.img} alt={data.title} />
        <span className="material-symbols-outlined dismiss">cancel</span>
      </div>
      <h1>{data.title}</h1>
      <p>{data.details}</p>
    </div>
  );
};
export { CardDismiss };
