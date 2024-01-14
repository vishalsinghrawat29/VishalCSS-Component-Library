import "./CardStyle.css";
const CardText = ({ data }) => {
  return (
    <div className="card">
      <h1>{data.title}</h1>
      <p>{data.details}</p>
    </div>
  );
};
export { CardText };
