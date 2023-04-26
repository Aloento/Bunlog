import { ColFlex } from "@/Styles/Layout";
import { tokens } from "@fluentui/react-components";
import { CSSProperties } from "react";

export const LRColStyle: CSSProperties = {
  ...ColFlex,
  flexBasis: "25%",
  flexShrink: 0,
  rowGap: tokens.spacingVerticalXL
}
