import "./ButtonStyle.css";
const IconButton = ({ icon, content }) => {
  return (
    <button className={`iconBtn ${icon}Icon`}>
      <span className="material-symbols-outlined">{icon}</span> <p>{content}</p>
    </button>
  );
};
export { IconButton };
