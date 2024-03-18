import { useGlobalContext } from "../../../globalContext";
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav: React.FC = () => {
  const { setScrolleable, setOptionsShown, theme } = useGlobalContext();
  function handleClickOptions() {
    setScrolleable(false);
    setOptionsShown(true)
  }
  return (
    <nav className="nav">
      <ul className="navList">
        <li className="navListElement">
          <a href="https://manucro.vercel.app/">
            <img src="/iconM.svg" alt="M" style={{ filter: 'invert' + ((theme == "light") ? "(100%)" : "(0%)") }}/>
          </a>
        </li>
        <li className="navListElement"><Link to="/">Home</Link></li>
        <li className="navListElement"><Link to="articles">Articles</Link></li>
        <li className="navListElement" onClick={handleClickOptions}>Options</li>
      </ul>
    </nav>
  )
}
export default Nav;