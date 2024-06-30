import styled from "@emotion/styled";
import { breakpointMax, calcRem, colors } from "../../theme";

const HEADER_HEIGHT = calcRem(100);
const HEADER_HEIGHT_SM = calcRem(80);

export const StyledLayout = styled("div")({
  maxHeight: "100vh",
  width: "100%",
  position: "relative",
});

export const StyledHeader = styled("div")({
  height: HEADER_HEIGHT,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [breakpointMax("sm")]: {
    height: HEADER_HEIGHT_SM,
  },
  "& p": {
    fontSize: calcRem(32),
    fontWeight: 600,
    color: colors.gunmetal,
    [breakpointMax("md")]: {
      fontSize: calcRem(28),
    },
    [breakpointMax("sm")]: {
      fontSize: calcRem(24),
    },
  },
});

export const StyledLayoutContent = styled("div")({
  height: `calc(100vh - ${HEADER_HEIGHT})`,
  overflow: "hidden",

  [breakpointMax("sm")]: {
    height: `calc(100vh - ${HEADER_HEIGHT_SM})`,
  },
});
