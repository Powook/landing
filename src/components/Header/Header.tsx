import "./Header.css";
import logo from "../../assets/logo_welbex.svg";
import { nav_icons, paths } from "./Header.consts";

export function Header() {
  return (
    <header className="header">
      <div className="logo" style={{ width: 140 }}>
        <img style={{ marginBottom: 10 }} src={logo} alt="logo" />
        <p className="logo_text">
          крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
      </div>
      <nav>
        <ul
          className="headerText"
          style={{ display: "flex", justifyContent: "space-between", gap: 30 }}
        >
          {paths.map((item) => (
            <li>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="contacts">
        <a href="tel:75555555555" className="headerText" style={{ marginRight: 47 }}>
          +7 555 555-55-55
        </a>
        <div className="icons">
          {nav_icons.map((icon) => (
            <a href={icon.path}><img src={icon.icon} alt={icon.alt}/></a>
          ))}
        </div>
      </div>
    </header>
  );
}
