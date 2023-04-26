/** @from MusiLand */
import { tokens } from "@fluentui/react-components";
import { CSSProperties } from "react";

export const Flex: CSSProperties = { display: "flex" };
export const Col: CSSProperties = { flexDirection: "column" };
export const ColFlex: CSSProperties = { ...Flex, ...Col };

export const LRColStyle: CSSProperties = {
  ...ColFlex,
  flexBasis: "25%",
  flexShrink: 0,
  rowGap: tokens.spacingVerticalXL
}

export const MidStyle: CSSProperties = {
  ...ColFlex,
  rowGap: tokens.spacingVerticalXL,
  flexGrow: 1
}
