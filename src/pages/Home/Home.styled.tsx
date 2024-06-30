import styled from "@emotion/styled";
import { breakpointMax, calcRem, colors } from "../../theme";

export const StyledHome = styled("div")({
  marginTop: calcRem(30),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [breakpointMax("sm")]: {
    marginTop: calcRem(0),
  },
});

export const SearchInput = styled("input")({
  background: "none",
  border: `solid 2px ${colors.gunmetal}`,
  borderRadius: calcRem(3),
  width: calcRem(200),
  padding: `${calcRem(10)} ${calcRem(15)}`,
});

export const NoResultsMessage = styled("p")({
  fontSize:calcRem(18),
  color:colors.lightCoral,
  fontWeight:600,
  marginTop:calcRem(50)
});
