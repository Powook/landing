import { Button } from "../Button/Button";
import { FEATURES } from "./Main.consts";
import "./Main.scss";

export function Main() {
  return (
    <div className="contentContainer">
      <div className="leftBlock" style={{ maxWidth: 362 }}>
        <p className="title">
          Зарабатывайте
          <br />
          больше
        </p>
        <p className="markedTitle">с WELBEX</p>
        <span>Развиваем и контролируем продажи за вас</span>
      </div>

      <div className="rightBlock">
        <p className="title">
          Вместе с 
          <span className="title_marked">бесплатной консультацией</span>{" "}
          мы дарим:
        </p>
        <div className="features_block">
          {FEATURES.map((feature) => (
            <div className="features">
              <p>{feature.title}</p>
              <span>{feature.subtitle}</span>
            </div>
          ))}
        </div>
        <Button
          text="Получить консультацию"
          type="primary"
          width={262}
          height={61}
        />
      </div>
    </div>
  );
}
