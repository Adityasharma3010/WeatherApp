import React from "react";
import windIcon from "../assets/Wind.png";
import humidityIcon from "../assets/Humidity.png";
import visibilityIcon from "../assets/Visibility.png";
import sunriseIcon from "../assets/Sunrise.png";
import sunsetIcon from "../assets/Sunset.png";

const Icon = ({ src, alt, className = "" }) => (
  <img src={src} alt={alt} className={`h-8 w-8 inline-block ${className}`} />
);

export const WindIcon = () => (
  <Icon src={windIcon} alt="Wind" className="powerful-pulse svg-hover" />
);
export const HumidityIcon = () => (
  <Icon
    src={humidityIcon}
    alt="Humidity"
    className="powerful-pulse svg-hover"
  />
);
export const VisibilityIcon = () => (
  <Icon
    src={visibilityIcon}
    alt="Visibility"
    className="powerful-pulse svg-hover"
  />
);
export const SunriseIcon = () => (
  <Icon src={sunriseIcon} alt="Sunrise" className="powerful-pulse svg-hover" />
);
export const SunsetIcon = () => (
  <Icon src={sunsetIcon} alt="Sunset" className="powerful-pulse svg-hover" />
);
