import { Flex } from "@/Styles/Layout";
import { NavW } from "./TopNavBar";

/**
 * Global Footer
 *
 * @author Aloento
 * @since MusiLand 0.3.1
 * @version 0.1.0
 */
export function Footer() {
  return (
    <footer style={{
      width: "100%",
      padding: "27px 0",
      backgroundColor: "white"
    }}>
      <div style={{
        ...Flex,
        maxWidth: NavW,
        margin: "0 auto"
      }}>
        <img src="/safari-pinned-tab.svg" style={{
          width: "150px",
          filter: "invert(1)",
          backgroundColor: "silver"
        }} />
      </div>
    </footer>
  )
}
