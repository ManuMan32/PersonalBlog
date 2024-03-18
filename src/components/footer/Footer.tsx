import { useGlobalContext } from "../../globalContext";
import "./Footer.css";
const Footer: React.FC = () => {
  const { theme } = useGlobalContext();
  return (
    <footer className="footer">
      <div className="footerLinks">
        <div className="footerLinks_Link">
          <img src="/iconEmail.svg" alt="Email" style={{ filter: 'invert' + ((theme == "light") ? "(0%)" : "(100%)") }} />
          <span className="footerLink_LinkText">manuelcrocco1221@gmail.com</span>
        </div>
        <div className="footerLinks_Link">
          <img src="/iconWebsite.svg" alt="Email" style={{ filter: 'invert' + ((theme == "light") ? "(0%)" : "(100%)") }} />
          <a className="footerLink_LinkText" href="https://manucro.vercel.app/" target="_blank">Visit my portfolio</a>
        </div>
      </div>
      <div className="footerSocialMedia">
        <a className="footerSocialMedia_Link" href="https://twitter.com/ManuCro32" target="_blank">
          <img src="/iconTwitter.svg" alt="Twitter" style={{ filter: 'invert' + ((theme == "light") ? "(100%)" : "(0%)") }} />
        </a>
        <a className="footerSocialMedia_Link" href="https://www.youtube.com/channel/UCq6abTyDgfHaiMEutdbmdqw" target="_blank">
          <img src="/iconYoutube.svg" alt="YouTube" style={{ filter: 'invert' + ((theme == "light") ? "(100%)" : "(0%)") }} />
        </a>
        <a className="footerSocialMedia_Link" href="https://github.com/ManuMan32" target="_blank">
          <img src="/iconGithub.svg" alt="GitHub" style={{ filter: 'invert' + ((theme == "light") ? "(100%)" : "(0%)") }} />
        </a>
        <div className="footerSocialMedia_Link">
          <img src="/iconDiscord.svg" alt="Discord" style={{ filter: 'invert' + ((theme == "light") ? "(100%)" : "(0%)") }} />
          <span className="footerTooltip">manuman_</span>
        </div>
      </div>
    </footer>
  )
}
export default Footer;