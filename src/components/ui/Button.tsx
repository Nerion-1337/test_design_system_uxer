/// TYPES
import { ButtonProps } from "../../Types/tp_button";
//
//
//
//
//
export default function Button({
  variant,
  size,
  color,
  iconLeft,
  iconRight,
  badge,
  onClick,
  children,
  disabled,
}: ButtonProps) {
  //
  //
  // BUILDER
  //
  //
  /// CLASSIQUE
  const button_classique = (
    <>
      {iconLeft && <span className="btn_icon_left">{iconLeft}</span>}
      {children}
      {iconRight && <span className="btn_icon_right">{iconRight}</span>}
      {badge !== undefined && <span className="btn_badge">{badge}</span>}
    </>
  );
  //
  /// ICON
  const button_icon = <>{children}</>;
  //
  /// CONTENT
  const content = (
    <button
      className={`btn_${variant} btn_${size} btn_${color}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {variant === "standard" ? button_classique : button_icon}
    </button>
  );
  //
  //
  // RETURN
  //
  //
  return content;
}
