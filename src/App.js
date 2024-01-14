import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Components } from "./pages/Components/Components";
import "./styles.css";
import { Documentation } from "./documentation/Documentation";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="*" element={<Documentation />} />
      </Routes>
    </div>
  );
}
