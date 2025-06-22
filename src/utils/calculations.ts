export const convertUnits = {
  // Length conversions
  feetToMeters: (feet: number) => feet * 0.3048,
  metersToFeet: (meters: number) => meters * 3.28084,
  
  // Thickness conversions
  inchesToFeet: (inches: number) => inches / 12,
  feetToInches: (feet: number) => feet * 12,
  cmToFeet: (cm: number) => cm * 0.0328084,
  feetToCm: (feet: number) => feet * 30.48,
  
  // Volume conversions
  cubicFeetToYards: (cubicFeet: number) => cubicFeet / 27,
  cubicYardsToCubicFeet: (yards: number) => yards * 27,
  
  // Weight conversions
  lbsToTons: (lbs: number) => lbs / 2000,
  tonsToLbs: (tons: number) => tons * 2000,
};

export const calculateArea = (
  shape: 'rectangle' | 'circle' | 'trapezoid',
  dimensions: any
): number => {
  switch (shape) {
    case 'rectangle':
      return dimensions.length * dimensions.width;
    case 'circle':
      return Math.PI * Math.pow(dimensions.radius, 2);
    case 'trapezoid':
      return ((dimensions.topWidth + dimensions.bottomWidth) / 2) * dimensions.length;
    default:
      return 0;
  }
};

export const calculateVolume = (
  area: number,
  thickness: number,
  compactionFactor: number = 1.25
): number => {
  return area * thickness * compactionFactor;
};

export const calculateWeight = (
  volume: number,
  density: number
): number => {
  return convertUnits.lbsToTons(volume * density);
};

export const calculateCost = (
  weight: number,
  pricePerTon: number
): number => {
  return weight * pricePerTon;
};