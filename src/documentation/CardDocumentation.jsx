import { CardBadge } from "../components/Card/CardBadge";
import { CardDismiss } from "../components/Card/CardDismiss";
import { CardOverlay } from "../components/Card/CardOverlay";
import { CardResponsive } from "../components/Card/CardResponsive";
import { CardShadow } from "../components/Card/CardShadow";
import { CardText } from "../components/Card/CardText";
import "./Style/DocumentationStyle.css";
const CardDocumentation = () => {
  return (
    <div className="documentation-container">
      <header className="component-header">
        <h1>Card With Badge Component</h1>
        <p>
          Card is flexible component used to group and display content in a
          clear and concise format.
        </p>
      </header>
      <section className="component-container">
        <CardBadge
          data={{
            img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            tag: "new",
            title: "Title of the card",
            details:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          }}
        />
      </section>
      <h2 className="component-code-header">How to use CardBadge Component</h2>
      <pre>
        <code>
          &lt;CardBadge data= &#123;&#123; img:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e", <br />
          tag: "new", <br />
          title: "Title of the card", <br />
          details: "Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s." <br />
          &#125;&#125; /&gt;
          <br />
        </code>
      </pre>

      <header className="component-header">
        <h1>Card With Dismiss Component</h1>
        <p>
          Card is flexible component used to group and display content in a
          clear and concise format.
        </p>
      </header>
      <section className="component-container">
        <CardDismiss
          data={{
            img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            title: "Title of the card",
            details:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          }}
        />
      </section>
      <h2 className="component-code-header">
        How to use CardDismiss Component
      </h2>
      <pre>
        <code>
          &lt;CardDismiss data= &#123;&#123; img:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e", <br />
          title: "Title of the card", <br />
          details: "Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s." <br />
          &#125;&#125; /&gt;
          <br />
        </code>
      </pre>

      <header className="component-header">
        <h1>Card With Text Overlay Component</h1>
        <p>
          Card is flexible component used to group and display content in a
          clear and concise format.
        </p>
      </header>
      <section className="component-container">
        <CardOverlay
          data={{
            img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            title: "Title of the card",
            details:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          }}
        />
      </section>
      <h2 className="component-code-header">
        How to use CardOverlay Component
      </h2>
      <pre>
        <code>
          &lt;CardOverlay data= &#123;&#123; img:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e", <br />
          title: "Title of the card", <br />
          details: "Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s." <br />
          &#125;&#125; /&gt;
          <br />
        </code>
      </pre>

      <header className="component-header">
        <h1>Text Only Card Component</h1>
        <p>
          Card is flexible component used to group and display content in a
          clear and concise format.
        </p>
      </header>
      <section className="component-container">
        <CardText
          data={{
            title: "Title of the card",
            details:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          }}
        />
      </section>
      <h2 className="component-code-header">How to use CardText Component</h2>
      <pre>
        <code>
          &lt;CardText data= &#123;&#123; title: "Title of the card", <br />
          details: "Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s." <br />
          &#125;&#125; /&gt;
          <br />
        </code>
      </pre>

      <header className="component-header">
        <h1>Responsive Card Component</h1>
        <p>
          Card is flexible component used to group and display content in a
          clear and concise format.
        </p>
      </header>
      <section className="component-container">
        <CardResponsive
          data={{
            img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            title: "Title of the card",
            details:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          }}
        />
      </section>
      <h2 className="component-code-header">
        How to use CardResponsive Component
      </h2>
      <pre>
        <code>
          &lt;CardResponsive data= &#123;&#123; img:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e", <br />
          title: "Title of the card", <br />
          details: "Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s." <br />
          &#125;&#125; /&gt;
          <br />
        </code>
      </pre>

      <header className="component-header">
        <h1>Shadow Card Component</h1>
        <p>
          Card is flexible component used to group and display content in a
          clear and concise format.
        </p>
      </header>
      <section className="component-container">
        <CardShadow
          data={{
            img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            title: "Title of the card",
            details:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          }}
        />
      </section>
      <h2 className="component-code-header">How to use CardShadow Component</h2>
      <pre>
        <code>
          &lt;CardShadow data= &#123;&#123; img:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e", <br />
          title: "Title of the card", <br />
          details: "Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s." <br />
          &#125;&#125; /&gt;
          <br />
        </code>
      </pre>
    </div>
  );
};
export { CardDocumentation };
