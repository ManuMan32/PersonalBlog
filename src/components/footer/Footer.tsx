import "./Footer.css";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footerLinks">
        <div className="footerLinks_Link">
          <img src="iconEmail.svg" alt="Email" />
          <span className="footerLink_LinkText">manuelcrocco1221@gmail.com</span>
        </div>
        <div className="footerLinks_Link">
          <img src="iconWebsite.svg" alt="Email" />
          <a className="footerLink_LinkText" href="https://manuelcrocco.glitch.me/" target="_blank">Visit my portfolio</a>
        </div>
      </div>
      <div className="footerSocialMedia">
        <a className="footerSocialMedia_Link" href="https://twitter.com/ManuCro32" target="_blank">
          <img src="iconTwitter.svg" alt="Twitter" />
        </a>
        <a className="footerSocialMedia_Link" href="https://www.youtube.com/channel/UCq6abTyDgfHaiMEutdbmdqw" target="_blank">
          <img src="iconYoutube.svg" alt="YouTube" />
        </a>
        <a className="footerSocialMedia_Link" href="https://github.com/ManuMan32" target="_blank">
          <img src="iconGithub.svg" alt="GitHub" />
        </a>
        <a className="footerSocialMedia_Link" href="https://twitter.com/ManuCro32" target="_blank">
          <img src="iconDiscord.svg" alt="Discord" />
        </a>
      </div>
    </footer>
  )
}
export default Footer;