import './icons.style.css'

import { IIconComponent } from "../../../interfaces/UI/icons.interface";
import { ReactSVG } from "react-svg";

export const SVGIcon = (props: IIconComponent) => {
  const { icon, fill, size, stroke, height, width } = props;
  return (
    <div
      className="icon-component-container"
      style={{ width: width ?? size ?? "", height: height ?? size ?? "" }}
    >
      <ReactSVG
        src={icon}
        fill={fill}
        stroke={stroke}
        className="icon-component-icon"
      />
    </div>
  );
};
