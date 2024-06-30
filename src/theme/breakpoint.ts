import { calcEm } from "./fonts";

export interface Breakpoints {
  xxxl: number;
  xxl: number;
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
  xxs: number;
}

export const breakpoints: Breakpoints = {
  xxxl: 1800,
  xxl: 1560,
  xl: 1440,
  lg: 1280,
  md: 1020,
  sm: 768,
  xs: 660,
  xxs: 480,
};

export const breakpoint = (
  point: keyof Breakpoints,
  includeMediaDecleration = true
) =>
  `${includeMediaDecleration ? "@media " : ""}(min-width: ${calcEm(
    breakpoints[point]
  )})`;

export const breakpointMax = (
  point: keyof Breakpoints,
  includeMediaDecleration = true
) =>
  `${includeMediaDecleration ? "@media " : ""}(max-width: ${calcEm(
    breakpoints[point] - 1
  )})`;
