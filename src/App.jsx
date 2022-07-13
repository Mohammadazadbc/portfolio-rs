import Intro from "./components/intro/Intro";
import Portfoilio from "./components/portfolio/Portfoilio";
import Topbar from "./components/topbar/Topbar";
import Work from "./components/work/Work";
import Testimponial from "./components/Testimponial/Testimponial";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
function App() {
  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro/>
        <Portfoilio />
        <Work />
        <Testimponial/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
