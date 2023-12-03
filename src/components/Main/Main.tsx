import { isMobile } from "../../shared/helpers/viewport";
import { useViewportWidth } from "../../shared/hooks/viewport";
import { Button } from "../Button/Button";
import { FEATURES } from "./Main.consts";
import "./Main.scss";

export function Main() {
  const isMobileDevice = useViewportWidth(isMobile, false);
  return (
    <div className="contentContainer">
      <div className="block">
        <div className="leftBlock">
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
            {FEATURES.map((feature) => {
              return isMobileDevice ? (
                <div className="feature_mobile">
                  <span className="gradient">— </span>
                  {feature.title}
                </div>
              ) : (
                <div className="features">
                  <p>{feature.title}</p>
                  <span>{feature.subtitle}</span>
                </div>
              );
            })}
          </div>
          <Button
            text="Получить консультацию"
            type="primary"
            width={262}
            height={61}
          />
        </div>
      </div>
    </div>
  );
}
