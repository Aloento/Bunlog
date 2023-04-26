import { Flex } from "@/Styles/Layout";
import { tokens } from "@fluentui/react-components";
import { HomeLeft } from "./Home/Left";
import { HomeMid } from "./Home/Mid";
import { HomeRight } from "./Home/Right";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export default function HomePage() {
  return (
    <div style={{
      ...Flex,
      columnGap: tokens.spacingHorizontalXL
    }}>
      <HomeLeft />
      <HomeMid />
      <HomeRight />
    </div>
  )
}
