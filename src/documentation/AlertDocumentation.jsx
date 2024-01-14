import { Alert } from "../components/Alert/Alert";
import "./Style/DocumentationStyle.css";
const AlertDocumentation = () => {
  return (
    <div className="documentation-container">
      <header className="component-header">
        <h1>Alert Component</h1>
        <p>
          The Alert Component is used to display various type of messages with
          different statuses.
        </p>
      </header>
      <section className="component-container">
        <Alert
          type="error"
          message="There was an error processing your request"
        />
        <Alert
          type="check_circle"
          message="Data uploaded to server, Fire on!"
        />
        <Alert
          type="warning"
          message="Seems your account is about to expire, upgrade now"
        />
        <Alert
          type="info"
          message="noeG is going live on August 30th. Get ready"
        />
      </section>
      <h2 className="component-code-header">How to use Alert Component</h2>
      <pre>
        <code>
          &lt;Alert type="error" message="There was an error processing your
          request" /&gt;
          <br />
          &lt;Alert type="check_circle" message="Data uploaded to server, Fire
          on!" /&gt;
          <br />
          &lt;Alert type="warning" message="Seems your account is about to
          expire, upgrade now" /&gt;
          <br />
          &lt;Alert type="info" message="noeG is going live on August 30th. Get
          ready" /&gt;
          <br />
        </code>
      </pre>
    </div>
  );
};
export { AlertDocumentation };
