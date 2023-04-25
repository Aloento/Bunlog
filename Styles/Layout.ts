/** @from MusiLand */
import { tokens } from "@fluentui/react-components";
import { CSSProperties } from "react";

export const Flex: CSSProperties = { display: "flex" };
export const Col: CSSProperties = { flexDirection: "column" };
export const ColFlex: CSSProperties = { ...Flex, ...Col };

export const BaseCard: CSSProperties = {
  ...Flex,
  backgroundColor: tokens.colorNeutralBackground1,
  boxShadow: tokens.shadow4,
  borderRadius: tokens.borderRadiusMedium,
};
