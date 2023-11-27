'use client'

import { Flex, MidStyle } from "@/Styles/Layout";
import { tokens } from "@fluentui/react-components";
import { CSSProperties } from "react";
import { CommLeft } from "./Left";
import { CommRight } from "./Right";

/**
 * LR Layout
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function ColLayout({ children, style }: { children: React.ReactNode, style?: CSSProperties }) {
  return (
    <div style={{
      ...Flex,
      columnGap: tokens.spacingHorizontalXL
    }}>
      <CommLeft />

      <div style={{ ...MidStyle, ...style }}>
        {children}
      </div>

      <CommRight />
    </div>
  )
}
