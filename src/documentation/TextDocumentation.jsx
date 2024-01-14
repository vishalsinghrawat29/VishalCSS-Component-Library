import { Text } from "../components/Text/Text";

const TextDocumentation = () => {
  return (
    <div className="documentation-container">
      <header className="component-header">
        <h1>Text Component</h1>
        <p>Text is used to render text and paragraph within an interface.</p>
      </header>
      <section className="component-container">
        <Text />
      </section>
      <h2 className="component-code-header">How to use Text Component</h2>
      <pre>
        <code>
          &lt;p className="xl6"&gt;Text 1&lt;/p&gt;
          <br />
          &lt;p className="xl5"&gt;Text 2&lt;/p&gt;
          <br />
          &lt;p className="xl4"&gt;Text 3&lt;/p&gt;
          <br />
          &lt;p className="xl3"&gt;Text 4&lt;/p&gt;
          <br />
          &lt;p className="xl2"&gt;Text 5&lt;/p&gt;
          <br />
          &lt;p className="xl"&gt;Text 6&lt;/p&gt;
          <br />
          &lt;p className="lg"&gt;Text 7&lt;/p&gt;
          <br />
          &lt;p&gt;Text Default&lt;/p&gt;
        </code>
      </pre>
    </div>
  );
};
export { TextDocumentation };
