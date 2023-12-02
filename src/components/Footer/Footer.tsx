import "./Footer.scss";
import cl from "classnames";
import { ABOUT_COMPANY, MENU, NAV_ICONS } from "./Footer.consts";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer_links">
        <p className="footer_title">О компании</p>
        {ABOUT_COMPANY.map((menuItem) => (
          <a href={menuItem.path}>{menuItem.title}</a>
        ))}
      </div>
      <div>
        <p className="footer_title">Меню</p>
        <div className="footer_links">
          {MENU.map((menuItem) => (
            <a href={menuItem.path}>{menuItem.title}</a>
          ))}
        </div>
      </div>
      <div>
        <p className={cl("footer_title", "contacts")}>Контакты</p>
        <div className="contacts_block">
          <a href="tel:75555555555">+7 555 555-55-55</a>
          <div className="icons">
            {NAV_ICONS.map((icon) => (
              <a href={icon.path}>
                <img src={icon.icon} alt={icon.alt} />
              </a>
            ))}
          </div>
          <p>Москва, Путевой проезд 3с1, к 902</p>
        </div>
      </div>
    </footer>
  );
}
