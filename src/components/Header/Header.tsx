import "./Header.scss";
import logo from "../../assets/logo_welbex.svg";
import { NAV_ICONS, PATHS } from "./Header.consts";
import cl from "classnames";

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
      </div>
      <nav>
        <ul className={cl("headerText", "ul")}>
          {PATHS.map((item) => (
            <li>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="contacts">
        <a
          href="tel:75555555555"
          className="headerText"
        >
          +7 555 555-55-55
        </a>
        <div className="icons">
          {NAV_ICONS.map((icon) => (
            <a href={icon.path}>
              <img src={icon.icon} alt={icon.alt} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
