import styled from "@emotion/styled";
import { breakpointMax, calcRem, colors } from "../../theme";

export const StyledAuth = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  "& button": {
    width: calcRem(200),
    height: calcRem(50),
    fontSize: calcRem(18),
    fontWeight: 600,
    margin: `0 ${calcRem(10)}`,
    border: "none",
    borderRadius: calcRem(10),
    color: colors.white,
    [breakpointMax("lg")]: {
      width: calcRem(180),
      height: calcRem(45),
    },
    [breakpointMax("sm")]: {
      width: calcRem(150),
      height: calcRem(45),
      fontSize: calcRem(16),
    },
    "&:hover": { cursor: "pointer" },
    "&:nth-child(1)": {
      backgroundColor: colors.teal,
    },
    "&:nth-child(2)": {
      backgroundColor: colors.purple,
    },
  },
});
