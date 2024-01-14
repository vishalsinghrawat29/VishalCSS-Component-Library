import { PrimaryButton } from "../components/Button/PrimaryButton";
import { LinkButton } from "../components/Button/LinkButton";
import { IconButton } from "../components/Button/IconButton";
import { FloatingButton } from "../components/Button/FloatingButton";

const ButtonDocumentation = () => {
  return (
    <div className="documentation-container">
      <header className="component-header">
        <h1>Button Component</h1>
        <p>
          The Button Component provide various styles for different actions.
        </p>
      </header>
      <section className="component-container component-row">
        <PrimaryButton content="Primary Btn" />
        <LinkButton content="Link Btn" link="https://www.google.com/" />
      </section>
      <h2 className="component-code-header">How to use Button Component</h2>
      <pre>
        <code>
          &lt;PrimaryButton content="Primary Btn" /&gt; <br />
          &lt;LinkButton content="Link Btn" link="https://www.google.com/" /&gt;
        </code>
      </pre>
      <header className="component-header">
        <h1>IconButton Component</h1>
        <p>The IconButton Component combine icon with text for actions.</p>
      </header>
      <section className="component-container component-row">
        <IconButton icon="search" content="search" />
        <IconButton icon="edit" content="edit" />
        <IconButton icon="delete" content="delete" />
        <IconButton icon="add" content="add" />
      </section>
      <h2 className="component-code-header">How to use IconButton Component</h2>
      <pre>
        <code>
          &lt;IconButton icon="search" content="search" /&gt; <br />
          &lt;IconButton icon="edit" content="edit" /&gt; <br />
          &lt;IconButton icon="delete" content="delete" /&gt; <br />
          &lt;IconButton icon="add" content="add" /&gt; <br />
        </code>
      </pre>
      <header className="component-header">
        <h1>FloatingButton Component</h1>
        <p>
          The FloatingButton Component provide quick actions for user
          interactions.
        </p>
      </header>
      <section className="component-container component-row">
        <FloatingButton icon="search" />
        <FloatingButton icon="edit" />
        <FloatingButton icon="delete" />
        <FloatingButton icon="add" />
      </section>
      <h2 className="component-code-header">
        How to use FloatingButton Component
      </h2>
      <pre>
        <code>
          &lt;FloatingButton icon="search" /&gt; <br />
          &lt;FloatingButton icon="edit" /&gt; <br />
          &lt;FloatingButton icon="delete" /&gt; <br />
          &lt;FloatingButton icon="add" /&gt; <br />
        </code>
      </pre>
    </div>
  );
};
export { ButtonDocumentation };
