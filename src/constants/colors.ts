enum Colors {
  White = "#fff",
  Blue = "#06aed5",
  DarkBlue = "#086788",
  Yellow = "#f0c808",
  Peach = "#daad86",
  Brown = "#bc986a",
  Beige = "#fff1d0",
  Red = "#dd1c1a",
}

const hexToRGB = (hex: string, alpha?: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return alpha ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `rgb(${r}, ${g}, ${b})`;
};

export const colors = {
  text: {
    default: hexToRGB(Colors.Yellow, "0.9"),
    header: hexToRGB(Colors.Yellow, "0.9"),
  },
  link: {
    default: Colors.Yellow,
    hover: Colors.White,
  },
  background: {
    body: Colors.DarkBlue,
  },
  spacer: Colors.DarkBlue,
  recipeLogos: [
    hexToRGB(Colors.Blue, "0.9"),
    hexToRGB(Colors.Blue, "0.7"),
    hexToRGB(Colors.Blue, "0.5"),
    hexToRGB(Colors.Blue, "0.3"),
  ],
};
