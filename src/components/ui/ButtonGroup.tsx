/// REACT
import React from 'react';
/// TYPES
import {ButtonGroupProps} from '../../Types/tp_buttonGroup';
//
//
//
//
//
export default function ButtonGroup({
    children,
    disabled,
}: ButtonGroupProps
) {
//
//
// BUILDER
//
//
/// CLASSIQUE
  const content = (
      <div
      className={`btnGp btnGp_primary btnGp_M ${disabled ? 'is_disabled' : ''}`}
    >
{children}
    </div>
  )
  //
  //
  // RETURN
  //
  //
  return content
}