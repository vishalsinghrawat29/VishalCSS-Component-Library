import { Link } from "react-router-dom";
import "./HomeStyle.css";
import { Navbar } from "../../documentation/Navbar";
const Home = () => {
  return (
    <div className="home">
      <header>
        <Navbar />
      </header>
      <div className="home-content">
        <h1>Vishal's CSS Component Library</h1>
        <p>A Collection of innovative components for modern web development.</p>
        <Link to="/components">Get Started</Link>
      </div>
    </div>
  );
};
export { Home };
