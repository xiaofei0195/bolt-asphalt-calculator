import { AsphaltType } from '../types/calculator';

export const asphaltTypes: AsphaltType[] = [
  {
    name: 'Standard Hot Mix',
    density: 145,
    description: 'Most common asphalt mix for residential and commercial projects'
  },
  {
    name: 'Dense Graded Mix',
    density: 150,
    description: 'High-traffic applications, highways and major roads'
  },
  {
    name: 'Stone Matrix Asphalt',
    density: 148,
    description: 'Premium mix for high-traffic areas with excellent durability'
  },
  {
    name: 'Recycled Asphalt',
    density: 140,
    description: 'Eco-friendly option with reclaimed materials'
  },
  {
    name: 'Porous Asphalt',
    density: 135,
    description: 'Permeable mix for drainage applications'
  }
];