import { Flex } from "@/Styles/Layout";
import { Caption1, tokens } from "@fluentui/react-components";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function Pill() {
  return (
    <div style={Flex}>
      <div style={{
        color: "#fff",
        borderTopLeftRadius: tokens.borderRadiusMedium,
        borderBottomLeftRadius: tokens.borderRadiusMedium,
        padding: `${tokens.spacingVerticalXXS} ${tokens.spacingVerticalS}`,
        backgroundColor: tokens.colorBrandStroke1
      }}>
        <Caption1>.NET</Caption1>
      </div>

      <div style={{
        borderTopRightRadius: tokens.borderRadiusMedium,
        borderBottomRightRadius: tokens.borderRadiusMedium,
        padding: `${tokens.spacingVerticalXXS} ${tokens.spacingVerticalS}`,
        backgroundColor: tokens.colorNeutralBackground6
      }}>
        <Caption1>1</Caption1>
      </div>
    </div>
  );
}
