import { Avatar } from "../components/Avatar/Avatar";
import "./Style/DocumentationStyle.css";
const AvatarDocumentation = () => {
  return (
    <div className="documentation-container">
      <header className="component-header">
        <h1>Avatar Component</h1>
        <p>
          The Avatar Component displays an image representing a user or entity,
          along with a name.
        </p>
      </header>
      <section className="component-container component-row">
        <Avatar
          size="sm"
          name="John"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
        />
        <Avatar
          size="md"
          name="Alpha"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
        />
        <Avatar
          size="lg"
          name="Beta"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
        />
      </section>
      <h2 className="component-code-header">How to use Avatar Component</h2>
      <pre>
        <code>
          &lt;Avatar size="sm" name="John"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
          /&gt;
          <br />
          &lt;Avatar size="md" name="Alpha"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
          /&gt;
          <br />
          &lt;Avatar size="lg" name="Beta"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
          /&gt;
          <br />
        </code>
      </pre>
    </div>
  );
};
export { AvatarDocumentation };
