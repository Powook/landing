import "./Button.scss";
import cl from "classnames";

type ButtonProps = {
  text: string;
  type: "primary" | "outline";
  width?: number;
  height?: number;
};

export function Button({ text, type, width, height }: ButtonProps) {
  return (
    <button
      type="button"
      style={{ width, height }}
      className={cl(
        'button',
        type === "primary" ? "button_primary" : "button_outline"
      )}
    >
      {text}
    </button>
  );
}
