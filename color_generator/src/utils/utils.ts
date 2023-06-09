const hexadecimalValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

export const getHexColor = (iterator = 5): string => {
  const randomNumber = Math.floor(Math.random() * hexadecimalValues.length);
  if (iterator === 0) {
    return hexadecimalValues[randomNumber];
  }
  let hexValue;
  if (iterator === 5) {
    hexValue = `#${hexadecimalValues[randomNumber]}`;
  } else {
    hexValue = hexadecimalValues[randomNumber];
  }
  return `${hexValue}`.concat(getHexColor(--iterator));
};

export const isLightOrDark = (rgbColor: number[]) => {
  const [r, g, b] = rgbColor;
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  if (hsp > 127.5) return "light";
  return "dark";
};
