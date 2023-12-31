import "./input.style.css";

import { IInputComponent } from "../../../interfaces/UI/input.interface";

export const Input = (props: IInputComponent) => {
  const {
    onChange,
    size,
    value,
    customLeft,
    customRight,
    iconLeft,
    iconRight,
  } = props;
  return (
    <div className={`input-component-container input-component-${size}`}>
      <div className="input-component-top">this is a label</div>
      <div className={`input-component-body `}>
        {(customLeft || iconLeft) && (
          <div className="input-component-left">{customLeft ?? iconLeft}</div>
        )}
        <div className="input-component-input">
          <input type="text" onChange={onChange} value={value} />
        </div>
        {(customRight || iconRight) && (
          <div className="input-component-right">
            {customRight ?? iconRight}
          </div>
        )}
      </div>
      <div className="input-component-bottom">this is an error message</div>
    </div>
  );
};
