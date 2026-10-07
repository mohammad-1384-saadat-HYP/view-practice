import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div></div>
      <div>
        <FaFacebookF />
        <FaWhatsapp />
        <FaInstagram />
        <FaTwitter />
      </div>
      <div>Location : Vancouver Island</div>
      <div>------------------------------------------------</div>
      <div>
        <span>Email:</span>
        <a
          href="https://github.com/mohammad-1384-saadat-HYP?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/mohammad-1384-saadat-HYP
        </a>
      </div>
      <span className="w-full h-px bg-gold-500"></span>
      <div>github.com/mohammad-1384-saadat-HYP</div>
    </footer>
  );
}
