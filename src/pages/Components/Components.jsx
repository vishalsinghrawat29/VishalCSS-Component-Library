import { Link } from "react-router-dom";
import "./ComponentsStyle.css";
import { Navbar } from "../../documentation/Navbar";
const Components = () => {
  return (
    <div className="components-page">
      <header>
        <Navbar />
      </header>
      <section className="components">
        <Link className="component" to="/avatar">
          Avatar
        </Link>
        <Link className="component" to="/alert">
          Alert
        </Link>
        <Link className="component" to="/badge">
          Badge
        </Link>
        <Link className="component" to="/button">
          Button
        </Link>
        <Link className="component" to="/card">
          Card
        </Link>
        <Link className="component" to="/heading">
          Heading
        </Link>
        <Link className="component" to="/text">
          Text
        </Link>
        <Link className="component" to="/Image">
          Image
        </Link>
      </section>
    </div>
  );
};
export { Components };
