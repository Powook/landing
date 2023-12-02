import { ReactNode } from "react";
import telegram from "../../assets/telegram.png";
import viber from "../../assets/viber.png";
import whatsapp from "../../assets/whatsapp.png";
import "./Footer.css";
import cl from "classnames";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer_links">
        <p className="footer_title">О компании</p>
        <a>Партнёрская программа</a>
        <a>Вакансии</a>
      </div>
      <div>
        <p className="footer_title">Меню</p>
        <div className="footer_links">
          <a>Расчёт стоимости</a>
          <a>Услуги</a>
          <a>Виджеты</a>
          <a>Интеграции</a>
          <a>Наши клиенты</a>
          <a>Кейсы</a>
          <a>Благодарственные письма</a>
          <a>Сертификаты</a>
          <a>Блог на Youtube</a>
          <a>Вопрос / Ответ</a>
        </div>
      </div>
      <div>
        <p className={cl("footer_title", "contacts")}>Контакты</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            alignItems: "end",
          }}
        >
          <p>+7 555 555-55-55</p>
          <div style={{ display: "flex", gap: 10 }} className="icons">
            <img src={telegram} alt="tg" />
            <img src={viber} alt="vb" />
            <img src={whatsapp} alt="wa" />
          </div>
          <p>Москва, Путевой проезд 3с1, к 902</p>
        </div>
      </div>
    </footer>
  );
}
