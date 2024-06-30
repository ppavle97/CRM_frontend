import styled from "@emotion/styled";
import { breakpointMax, calcRem, colors } from "../../theme";

export const PaginationContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: calcRem(5),
  [breakpointMax("sm")]: {
    margin: `${calcRem(10)} 0`,
  },
  [breakpointMax("xs")]: {
    gap: calcRem(2),
  },
});

export const PageButton = styled("button")<{ isActive?: boolean }>(
  ({ isActive }) => ({
    width: calcRem(40),
    height: calcRem(40),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: calcRem(5),
    backgroundColor: isActive ? colors.lightGray : colors.paleGray,
    color: isActive ? colors.gunmetal : colors.gunmetal,
    cursor: "pointer",
    fontSize: calcRem(14),
    fontWeight: 500,
    "&:disabled": {
      cursor: "not-allowed",
      backgroundColor: colors.lightGray,
    },
    [breakpointMax("sm")]: {
      width: calcRem(35),
      height: calcRem(35),
      fontSize: calcRem(13),
    },
    [breakpointMax("xs")]: {
      width: calcRem(30),
      height: calcRem(30),
      fontSize: calcRem(12),
    },

    "& img": {
      width: calcRem(6),
    },
  })
);

export const PageEllipsis = styled("span")({
  width: calcRem(40),
  height: calcRem(40),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: calcRem(16),
  color: colors.cadetGray,
});
