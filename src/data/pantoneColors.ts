interface PantoneColor {
  id: number;
  name: string;
  hex: string;
  rgb: [number, number, number];
  cmyk: [number, number, number, number];
}

const pantoneColors: PantoneColor[] = [
  {
    id: 1,
    name: "Pantone 100 C",
    hex: "#F4ED7C",
    rgb: [244, 237, 124],
    cmyk: [0, 0, 55, 0]
  },
  {
    id: 2,
    name: "Pantone 101 C",
    hex: "#F4ED47",
    rgb: [244, 237, 71],
    cmyk: [0, 0, 73, 0]
  },
  {
    id: 3,
    name: "Pantone 102 C",
    hex: "#F9E814",
    rgb: [249, 232, 20],
    cmyk: [0, 1, 100, 0]
  },
  // Add more colors here...
];

export default pantoneColors;