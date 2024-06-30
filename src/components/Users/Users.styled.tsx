import styled from "@emotion/styled";
import { breakpointMax, calcRem, colors } from "../../theme";
import { StyledUserItemProps } from "./types";

const userItemHeight = calcRem(56);

export const StyledUsers = styled("div")({
  width: "60%",
  marginTop: calcRem(20),
  padding: `${calcRem(10)} ${calcRem(20)}`,
  borderRadius: calcRem(5),
  [breakpointMax("lg")]: {
    width: "80%",
  },
  [breakpointMax("sm")]: {
    width: "90%",
    padding: 0,
    overflow: "hidden",
  },
  height: `calc(${userItemHeight} * 10 + ${calcRem(20)})`,
});

export const StyledUserItem = styled("div")<StyledUserItemProps>(
  ({ active }) => [
    {
      width: "100%",
      height: userItemHeight,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: active ? colors.lightCoral : "",
      padding: `0 ${calcRem(10)}`,
      [breakpointMax("sm")]: {
        justifyContent: "flex-start",
      },
      "& p": {
        fontSize: calcRem(16),
        width: "30%",
        [breakpointMax("sm")]: {
          fontSize: calcRem(13),
          width: "45%",
        },
        "&:nth-child(1)": {
          fontWeight: 700,
        },
        "&:nth-child(2)": {
          fontSize: calcRem(14),
          [breakpointMax("sm")]: {
            fontSize: calcRem(12),
          },
        },
        "&:nth-child(3)": {
          fontWeight: 300,
          fontSize: calcRem(13),
          [breakpointMax("sm")]: {
            display: "none",
          },
        },
      },
    },
  ]
);
