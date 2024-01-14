import "./BadgeStyle.css";
const Badge = ({ text, bgColor, textColor, isIcon, children }) => {
  return (
    <div className="badge">
      <div className="badge-content">{children}</div>
      <span
        className="badge-label"
        style={{
          backgroundColor: `${bgColor}`,
          color: `${textColor}`,
          right: `${isIcon ? "8px" : "18px"}`,
          top: `${isIcon ? "1px" : "6px"}`,
          fontSize: `${isIcon ? "8px" : "12px"}`
        }}
      >
        {text}
      </span>
    </div>
  );
};
export { Badge };
