import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style/NavbarStyle.css";
const Navbar = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = () => {
    if (
      [
        "avatar",
        "alert",
        "badge",
        "button",
        "card",
        "heading",
        "text",
        "image"
      ].some((search) => search === searchInput.toLowerCase())
    ) {
      navigate(`/${searchInput}`);
      setSearchInput("");
    } else {
      alert("No component found.");
      setSearchInput("");
    }
  };

  return (
    <nav className="nav">
      <h1 onClick={() => navigate("/")}>Vishal CSS</h1>
      <div className="input">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/components">Components</Link>
        </li>
      </ul>
    </nav>
  );
};
export { Navbar };
