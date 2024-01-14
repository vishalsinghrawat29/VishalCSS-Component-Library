import "./AvatarStyle.css";
const Avatar = ({ size, name, src }) => {
  return (
    <div className={`avatar ${size}`}>
      <img className="avatarImg" src={src} alt={name} />
    </div>
  );
};

export { Avatar };
