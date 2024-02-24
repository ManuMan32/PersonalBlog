import "./Nav.css";
import { Link } from "react-router-dom";
const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="navList">
        <li className="navListElement">
          <a href="https://manuelcrocco.glitch.me/">
            <img src="/iconM.svg" alt="M" />
          </a>
        </li>
        <li className="navListElement"><Link to="/">Home</Link></li>
        <li className="navListElement"><Link to="articles">Articles</Link></li>
        <li className="navListElement">Options</li>
      </ul>
    </nav>
  )
}
export default Nav;