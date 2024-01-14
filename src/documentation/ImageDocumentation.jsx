import { Alert } from "../components/Alert/Alert";
import { Image } from "../components/Image/Image";
import "./Style/DocumentationStyle.css";
const ImageDocumentation = () => {
  return (
    <div className="documentation-container">
      <header className="component-header">
        <h1>Image Component</h1>
        <p>
          The Image Component is used to display images with support for
          fallback.
        </p>
      </header>
      <section className="component-container">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="nature"
          isRound={false}
        />
      </section>
      <h2 className="component-code-header">How to use Image Component</h2>
      <pre>
        <code>
          &lt;Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="nature" isRound={"false"}
          /&gt;
          <br />
        </code>
      </pre>
      <header className="component-header">
        <h1>Round Image Component</h1>
        <p>
          The Round Image Component is used to display images in round shape.
        </p>
      </header>
      <section className="component-container">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="nature"
          isRound={true}
        />
      </section>
      <h2 className="component-code-header">
        How to use Round Image Component
      </h2>
      <pre>
        <code>
          &lt;Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="nature" isRound={"true"}
          /&gt;
          <br />
        </code>
      </pre>
    </div>
  );
};
export { ImageDocumentation };
