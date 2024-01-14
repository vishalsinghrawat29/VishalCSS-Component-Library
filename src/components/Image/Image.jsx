import "./ImageStyle.css";
const Image = ({ src, alt, isRound }) => {
  return <img src={src} alt={alt} className={isRound ? `round` : `image`} />;
};
export { Image };
