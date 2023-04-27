import { Flex } from "@/Styles/Layout";
import { Link, Text, tokens } from "@fluentui/react-components";
import { Code20Regular } from "@fluentui/react-icons";
import { CSSProperties } from "react";

export const NavH = 54;
export const NavW = "1440px";

const menu: CSSProperties = {
  marginBlock: 0,
  paddingInline: 0,
  ...Flex,
  columnGap: tokens.spacingHorizontalXXL
}

/**
 * Global top navigation bar
 *
 * @author Aloento
 * @since MusiLand 0.1.0
 * @version 0.1.0
 */
export function TopNavBar() {
  return (
    <header style={{
      position: "fixed",
      top: "0",
      width: "100%",
      height: `${NavH}px`,
      padding: "0 32px",
      backgroundColor: "#fff",
      boxSizing: "border-box",
      boxShadow: tokens.shadow4,
      zIndex: Number.MAX_SAFE_INTEGER
    }}>
      <nav style={{
        ...Flex,
        maxWidth: NavW,
        height: "100%",
        margin: "0 auto",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <menu style={menu}>
          <Text>Aloento</Text>
          <Link href="/" appearance="subtle">Home</Link>
          <Link href="/Archives" appearance="subtle">Archives</Link>
          <Link href="/Categories" appearance="subtle">Categories</Link>
          <Link href="/Tags" appearance="subtle">Tags</Link>
        </menu>

        <menu style={menu}>
          <Link href="/Account" appearance="subtle">Account</Link>

          <Link appearance="subtle" href="https://github.com/Aloento/Bunlog" target="_blank">
            <Code20Regular />
          </Link>
        </menu>
      </nav>
    </header>
  )
}
