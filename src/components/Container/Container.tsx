import { ReactNode } from "react";
import "./Container.css";
import cl from "classnames";

export type ContainerProps = {
  children: ReactNode;
  containerWidth?: number;
  customClassName?: string;
};

export function Container({
  children,
  containerWidth,
  customClassName,
}: ContainerProps) {
  return (
    <div
      className={
        customClassName ? cl(customClassName, "container") : "container"
      }
      style={{
        padding: "0 24px",
        maxWidth: containerWidth ? containerWidth+24 : "auto",
      }}
    >
      {children}
    </div>
  );
}
