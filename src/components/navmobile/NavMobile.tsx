import { useGlobalContext } from "../../globalContext";
import "./NavMobile.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
const NavMobile: React.FC = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const { setScrolleable, setOptionsShown, theme } = useGlobalContext();
  function handleClickOptions() {
    setOpened(false);
    setScrolleable(false);
    setOptionsShown(true);
  }
  function handleClickMenu() {
    setOpened(!opened);
  }
  function handleCloseMenu() {
    setOpened(false);
  }
  return (
    <nav className="navMobile">
      <ul className="navMobileList">
        <li className="navMobileListElement">
          <a href="https://manuelcrocco.glitch.me/">
            <img src="/iconM.svg" alt="M" style={{ filter: 'invert' + ((theme == "light") ? "(100%)" : "(0%)") }}/>
          </a>
        </li>
        <li className="navMobileListElement">
          <div className="navMobileListToggleMenu" onClick={handleClickMenu}>
            <img src="iconMenu.svg" alt="Menu" />
          </div>
        </li>
      </ul>
      <ul className="navMobileListMenu" style={{
        display: (opened) ? "flex" : "none"
      }}>
        <li className="navMobileListMenuElement">
          <Link to="/" onClick={handleCloseMenu}>
            <img className="navMobileListMenuElementIcon" src="iconHome.svg" alt="Home" />
            Home
          </Link>
        </li>
        <li className="navMobileListMenuElement">
          <Link to="articles" onClick={handleCloseMenu}>
            <img className="navMobileListMenuElementIcon" src="iconArticle.svg" alt="Articles" />
            Articles
          </Link>
        </li>
        <li className="navMobileListMenuElement">
          <div className="navMobileOptionsButton" onClick={handleClickOptions}>
            <img className="navMobileListMenuElementIcon" src="iconSettings.svg" alt="Settings" />
            Options
          </div>
        </li>
      </ul>
    </nav>
  )
}
export default NavMobile;