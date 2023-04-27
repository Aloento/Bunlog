import { Flex, MidStyle } from "@/Styles/Layout";
import { tokens } from "@fluentui/react-components";
import { CommLeft } from "./Left";
import { CommRight } from "./Right";

/**
 * LR Layout
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function ColLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      ...Flex,
      columnGap: tokens.spacingHorizontalXL
    }}>
      <CommLeft />

      <div style={MidStyle}>
        {children}
      </div>

      <CommRight />
    </div>
  )
}
