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
  ariaLabel,
}: ButtonProps) {
  //
  //
  // BUILDER
  //
  //
  /// CLASSIQUE
  const button_classique = (
    <>
      {iconLeft && <span className="btn_icon_left" aria-hidden="true">{iconLeft}</span>}
      {children}
      {iconRight && <span className="btn_icon_right" aria-hidden="true">{iconRight}</span>}
      {badge !== undefined && <span className="btn_badge">
        <span className="sr-only">Nombre restant: </span>
        {badge}
        </span>}
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
      aria-disabled={disabled}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
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
