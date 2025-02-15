import "./styles/Footer.css";
import logo from "../assets/Logo/logo_branca.png";
import instagramIcon from "../assets/img/icon_instagram.png";
import whatsappIcon from "../assets/img/icon_whatsapp.png";
import tiktokIcon from "../assets/img/icon_tiktok.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
        <div className="social-media">
          <a href="#" target="_blank" aria-label="Instagram">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="#" target="_blank" aria-label="WhatsApp">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="#" target="_blank" aria-label="TikTok">
            <img src={tiktokIcon} alt="TikTok" />
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-nav">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">A ProdTech</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;