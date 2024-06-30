import { metrics } from "./metrics";

export interface Calc {
  (no1: number): string;
  (no1: number, no2: number): string;
  (no1: number, no2: number, no3: number): string;
  (no1: number, no2: number, no3: number, no4: number): string;
}

export const calcEm: Calc = (...vals: number[]) =>
  vals
    .map((val) => (val !== 0 ? `${val / metrics.baseFontSize}em` : "0"))
    .join(" ");

export const calcRem: Calc = (...vals: number[]) =>
  vals
    .map((val) => (val !== 0 ? `${val / metrics.baseFontSize}rem` : "0"))
    .join(" ");

