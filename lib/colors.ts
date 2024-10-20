export interface PantoneColor {
  id: number;
  name: string;
  hex: string;
  rgb: [number, number, number];
  cmyk: [number, number, number, number];
}

export function hexToRgb(hex: string): [number, number, number] {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

export async function getPantoneColors(): Promise<PantoneColor[]> {
  return [
    { id: 1, name: 'Yellow 012 C', hex: '#FFD700', rgb: hexToRgb('#FFD700'), cmyk: [0, 16, 100, 0] },
    { id: 2, name: 'Bright Red C', hex: '#F93822', rgb: hexToRgb('#F93822'), cmyk: [0, 78, 86, 2] },
    { id: 3, name: 'Blue 072 C', hex: '#0018A8', rgb: hexToRgb('#0018A8'), cmyk: [100, 95, 0, 3] },
    { id: 4, name: 'Green C', hex: '#00AB84', rgb: hexToRgb('#00AB84'), cmyk: [100, 0, 59, 0] },
    { id: 5, name: 'Black C', hex: '#2D2926', rgb: hexToRgb('#2D2926'), cmyk: [63, 62, 59, 94] },
    { id: 6, name: 'Yellow PY12 C', hex: '#F6DD00', rgb: hexToRgb('#F6DD00'), cmyk: [0, 10, 100, 4] },
{ id: 7, name: 'Orange 016 C', hex: '#FF5600', rgb: hexToRgb('#FF5600'), cmyk: [0, 66, 100, 0] },
{ id: 8, name: 'Purple V2 C', hex: '#B041B1', rgb: hexToRgb('#B041B1'), cmyk: [1, 63, 0, 31] },
{ id: 9, name: 'Violet V2 C', hex: '#3D0385', rgb: hexToRgb('#3D0385'), cmyk: [54, 98, 0, 48] },
{ id: 10, name: 'Real Purple C', hex: '#C92FBF', rgb: hexToRgb('#C92FBF'), cmyk: [0, 77, 5, 21] },
{ id: 11, name: '6001 C', hex: '#E7D083', rgb: hexToRgb('#E7D083'), cmyk: [0, 10, 43, 9] },
{ id: 12, name: '6002 C', hex: '#E8C871', rgb: hexToRgb('#E8C871'), cmyk: [0, 14, 51, 9] },
{ id: 13, name: '6003 C', hex: '#E1B74C', rgb: hexToRgb('#E1B74C'), cmyk: [0, 19, 66, 12] },
{ id: 14, name: '6004 C', hex: '#DDAD33', rgb: hexToRgb('#DDAD33'), cmyk: [0, 22, 77, 13] },


    // Add more colors as needed
  ];
}