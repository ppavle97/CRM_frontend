import styled from "@emotion/styled";
import { calcRem } from "../../theme";

export const StyledHome = styled("div")({
  marginTop: calcRem(30),
  height: "100%",
  display:'flex',
  flexDirection:'column',
  alignItems:'center'
});
