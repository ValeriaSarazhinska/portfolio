import { Link, useLocation } from "react-router-dom";
import woman from "../assets/woman.png";
import katana from "../assets/katana.png";
import animation from "../assets/animation.png";
import letter from "../assets/letter.png";
import "../styles/nav.css";

export default function Nav() {
  const location = useLocation();

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECT";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };
  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();
  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };
  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";
    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} className="nav-image" />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };
  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink("/", woman, "woman icon", "nav-about")}
      {renderNavLink("/skills", katana, "katana icon", "nav-skills")}
      {renderNavLink("/projects", animation, "animation icon", "nav-projects")}
      {renderNavLink("/contact", letter, "letter icon", "nav-contact")}
    </nav>
  );
}
