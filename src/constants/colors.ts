import { Colors, RGB } from "../../types/colors";

const hexToRGBObj = (hex: string, a?: number): RGB => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return {
    r,
    g,
    b,
    a,
  };
};

export const rgbObjToRgb = ({ r, g, b, a }: RGB): string =>
  a ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;

const hexToRgb = (hex: string, alpha?: number): string =>
  rgbObjToRgb(hexToRGBObj(hex, alpha));

export const colors = {
  text: {
    default: Colors.Black,
    header: hexToRgb(Colors.Black, 0.9),
  },
  link: {
    default: Colors.Orange,
    hover: Colors.Blue,
  },
  background: {
    body: Colors.White,
    translate: Colors.White,
  },
  spacer: Colors.Black,
  recipeLogos: [
    hexToRGBObj(Colors.Blue, 0.9),
    hexToRGBObj(Colors.Blue, 0.7),
    hexToRGBObj(Colors.Blue, 0.5),
    hexToRGBObj(Colors.Blue, 0.3),
  ],
};
