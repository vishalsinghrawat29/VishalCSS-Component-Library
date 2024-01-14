import { Avatar } from "../components/Avatar/Avatar";

import { Badge } from "../components/Badge/Badge";
const BadgeDocumentation = () => {
  return (
    <div className="documentation-container">
      <header className="component-header">
        <h1>Badge Component</h1>
        <p>
          The Badge Component is used to highlight and display shoty information
          on icon or avatar.
        </p>
      </header>
      <section className="component-container component-row">
        <Badge text="5" bgColor="#ff4794" textColor="#ffffff" isIcon={false}>
          <Avatar
            size="md"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
          />
        </Badge>
        <Badge text="5" bgColor="#c0e0a4" textColor="#000" isIcon={true}>
          <span className="material-symbols-outlined">account_circle</span>
        </Badge>
      </section>
      <h2 className="component-code-header">How to use Badge Component</h2>
      <pre>
        <code>
          &lt;Badge text="5" bgColor="#ff4794" textColor="#ffffff" isIcon=
          {"false"}&gt; <br /> &nbsp;&nbsp;&lt;Avatar size="md"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
          /&gt; <br />
          &lt;/Badge&gt; <br />
          <br />
          &lt;Badge text="5" bgColor="#c0e0a4" textColor="#000" isIcon={"true"}
          &gt; <br />
          &nbsp;&nbsp;&lt;span
          className="material-symbols-outlined"&gt;account_circle &lt;/span&gt;
          <br />
          &lt;/Badge&gt; <br />
        </code>
      </pre>
    </div>
  );
};

export { BadgeDocumentation };
