const LinkButton = ({ content, link }) => {
  return (
    <a href={link} className="linkBtn">
      {content}
    </a>
  );
};
export { LinkButton };
