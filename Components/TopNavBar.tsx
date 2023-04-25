import { Flex } from "@/Styles/Layout";
import { tokens } from "@fluentui/react-components";

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

      </nav>

    </header>
  )
}
