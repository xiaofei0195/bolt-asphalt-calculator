export interface Calculation {
  id: string;
  name: string;
  date: string;
  shape: 'rectangle' | 'circle' | 'trapezoid';
  projectType: 'driveway' | 'parking' | 'road';
  dimensions: {
    length?: number;
    width?: number;
    radius?: number;
    topWidth?: number;
    bottomWidth?: number;
    thickness: number;
  };
  units: {
    dimension: 'feet' | 'meters';
    thickness: 'inches' | 'feet' | 'cm';
  };
  results: {
    area: number;
    volume: number;
    volumeYards: number;
    weight: number;
    cost: number;
  };
  settings: {
    density: number;
    pricePerTon: number;
    compactionFactor: number;
  };
}

export interface AsphaltType {
  name: string;
  density: number; // lbs per cubic foot
  description: string;
}