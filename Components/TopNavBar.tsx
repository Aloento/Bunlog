import { Flex } from "@/Styles/Layout";
import { Link, Text, tokens } from "@fluentui/react-components";
import { useRouter } from "next/router";

export const NavH = 54;
export const NavW = "1440px";

/**
 * Global top navigation bar
 *
 * @author Aloento
 * @since MusiLand 0.1.0
 * @version 0.1.0
 */
export function TopNavBar() {
  const route = useRouter();

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
        <menu style={{
          marginBlock: 0,
          paddingInline: 0,
          ...Flex,
          columnGap: tokens.spacingHorizontalXXL
        }}>
          <Text>Aloento</Text>
          <Link href="/" appearance="subtle">Home</Link>
          <Link href="/" appearance="subtle">Archives</Link>
          <Link href="/" appearance="subtle">Categories</Link>
          <Link href="/" appearance="subtle">Tags</Link>
        </menu>

        <menu style={{
          marginBlock: 0,
          paddingInline: 0
        }}>

        </menu>
      </nav>
    </header>
  )
}
