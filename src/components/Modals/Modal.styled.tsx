import styled from "@emotion/styled";
import { breakpointMax, calcRem, colors } from "../../theme";

export const StyledModalLayout = styled("div")({
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: 0,
  right: 0,
  background: "rgba(0,0,0,.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  zIndex: 11,

  "& .content": {
    width: calcRem(440),
    minHeight: calcRem(200),
    background: colors.white,
    borderRadius: calcRem(10),
    padding: calcRem(30),
    boxSizing: "border-box",
    position: "relative",
    [breakpointMax("sm")]: {
      width: "60%",
    },
    [breakpointMax("xs")]: {
      width: "80%",
    },
    [breakpointMax("xxs")]: {
      width: "90%",
    },
  },
  "& .close-btn": {
    background: "none",
    border: "none",
    color: colors.white,
    opacity: 0.5,
    marginTop: calcRem(15),
    fontSize: calcRem(13),
    "&:hover": {
      cursor: "pointer",
    },
  },
  "& .close-icon": {
    position: "absolute",
    right: calcRem(15),
    top: calcRem(15),
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export const StyledModalHeading = styled("h3")({
  fontSize: calcRem(20),
  fontWeight: "500",
  textAlign: "center",
  color: colors.gunmetal,
  marginTop: "0",
});
