import { Heading } from "../components/Heading/Heading";

const HeadingDocumentation = () => {
  return (
    <div className="documentation-container">
      <header className="component-header">
        <h1>Heading Component</h1>
        <p>Heading is used to render semantic HTML heading elements</p>
      </header>
      <section className="component-container">
        <Heading />
      </section>
      <h2 className="component-code-header">How to use Heading Component</h2>
      <pre>
        <code>
          &lt;h1&gt;Heading 1&lt;/h1&gt;
          <br />
          &lt;h2&gt;Heading 2&lt;/h2&gt;
          <br />
          &lt;h3&gt;Heading 3&lt;/h3&gt;
          <br />
          &lt;h4&gt;Heading 2&lt;/h4&gt;
          <br />
          &lt;h5&gt;Heading 5&lt;/h5&gt;
          <br />
          &lt;h6&gt;Heading 6&lt;/h6&gt;
          <br />
          &lt;p&gt;Paragraph&lt;/p&gt;
          <br />
          &lt;span&gt;copyrightText&lt;/span&gt;
        </code>
      </pre>
    </div>
  );
};
export { HeadingDocumentation };
