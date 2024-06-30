import styled from "@emotion/styled";
import { breakpointMax, calcRem, colors } from "../../theme";

export const StyledNotFound = styled("div")({
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "& p": {
    fontSize: calcRem(28),
    color: colors.gunmetal,
    textAlign: "center",
    [breakpointMax("sm")]: {
      fontSize: calcRem(18),
    },
    "& span": {
      color: colors.purple,
    },
  },
  "& button": {
    fontSize: calcRem(17),
    color: colors.white,
    backgroundColor: colors.purple,
    border: "none",
    borderRadius: calcRem(10),
    padding: `${calcRem(15)} ${calcRem(30)}`,
    marginTop: calcRem(20),
    "&:hover": {
      cursor: "pointer",
    },
    [breakpointMax("sm")]: {
      padding: `${calcRem(10)} ${calcRem(30)}`,
      fontSize: calcRem(15),
    },
  },
});
