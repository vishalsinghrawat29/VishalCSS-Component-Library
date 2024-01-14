import "./ButtonStyle.css";
const FloatingButton = ({ icon }) => {
  return (
    <button className={`floatingBtn ${icon}Float`}>
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
};
export { FloatingButton };
