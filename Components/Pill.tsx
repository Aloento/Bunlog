import { Flex } from "@/Styles/Layout";
import { Caption1, tokens } from "@fluentui/react-components";

export interface IPill {
  Name: string;
  Count: number;
}

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function Pill({ Name, Count }: IPill) {
  return (
    <div style={Flex}>
      <div style={{
        color: "#fff",
        borderTopLeftRadius: tokens.borderRadiusMedium,
        borderBottomLeftRadius: tokens.borderRadiusMedium,
        padding: `${tokens.spacingVerticalXXS} ${tokens.spacingVerticalS}`,
        backgroundColor: tokens.colorBrandStroke1
      }}>
        <Caption1>{Name}</Caption1>
      </div>

      <div style={{
        borderTopRightRadius: tokens.borderRadiusMedium,
        borderBottomRightRadius: tokens.borderRadiusMedium,
        padding: `${tokens.spacingVerticalXXS} ${tokens.spacingVerticalS}`,
        backgroundColor: tokens.colorNeutralBackground6
      }}>
        <Caption1>{Count}</Caption1>
      </div>
    </div>
  );
}
