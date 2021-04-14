enum Colors {
  White = "#fff",
  Black = "#293241",
  BabyBlue = "#98c1d9",
  Yellow = "#634806",
  Blue = "#3d5a80",
  Grey = "#4F5A65",
  Orange = "#ee6c4d",
}

const hexToRGB = (hex: string, alpha?: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return alpha ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `rgb(${r}, ${g}, ${b})`;
};

export const colors = {
  text: {
    default: Colors.Black,
    header: hexToRGB(Colors.Black, "0.9"),
  },
  link: {
    default: Colors.Orange,
    hover: Colors.Blue,
  },
  background: {
    body: Colors.White,
  },
  spacer: Colors.Black,
  recipeLogos: [
    hexToRGB(Colors.Blue, "0.9"),
    hexToRGB(Colors.Blue, "0.7"),
    hexToRGB(Colors.Blue, "0.5"),
    hexToRGB(Colors.Blue, "0.3"),
  ],
};
