import { three, threePlus, four, fourPlus, five } from '../assets/images';

type Rating = {
  value: string;
  label: string;
};

export type Price = {
  value: { min: number; max: number };
  label: string;
};

export const FACILITIES: string[] = [
  'Restaurant',
  'Bar',
  'Spa',
  'Safety Deposit Box',
  'Evening Entertainment',
  'Fitness Centre/Gym',
  'Games Room',
  'Internet Access',
  'Swimming Pool',
  'Whirlpool',
  'Laundry Service',
];

export const PRICE: Price[] = [
  {
    value: { min: 1, max: 2810 },
    label: 'up to £2810',
  },
  {
    value: { min: 2810, max: 3310 },
    label: '£2810 - £3310',
  },
  {
    value: { min: 3310, max: 4310 },
    label: '£3310 - £4340',
  },
  {
    value: { min: 4310, max: 10000 },
    label: 'over £4340',
  },
];

export const RATING: Rating[] = [
  {
    value: '3',
    label: three,
  },
  {
    value: '3+',
    label: threePlus,
  },
  {
    value: '4',
    label: four,
  },
  {
    value: '4+',
    label: fourPlus,
  },
  {
    value: '5',
    label: five,
  },
];
