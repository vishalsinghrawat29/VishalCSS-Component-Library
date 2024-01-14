import "./AlertStyle.css";
const Alert = ({ type, message }) => {
  return (
    <div className={`alert ${type}`}>
      <span className="material-symbols-outlined">{type}</span>
      <p>{message}</p>
    </div>
  );
};

export { Alert };
