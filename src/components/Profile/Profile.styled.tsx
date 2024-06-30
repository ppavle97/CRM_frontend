import styled from "@emotion/styled";
import { breakpointMax, calcRem, colors } from "../../theme";

export const StyledProfile = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: calcRem(40),
  "& p": {
    fontSize: calcRem(24),
    [breakpointMax("sm")]: {
      fontSize: calcRem(18),
    },
    "& #user": {
      color: colors.purple,
      fontWeight: 700,
    },
    "& #logout": {
      color: colors.red,
      fontWeight: 700,
      "&:hover": { cursor: "pointer" },
    },
  },
});
