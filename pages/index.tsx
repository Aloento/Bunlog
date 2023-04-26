import { ColFlex } from "@/Styles/Layout";
import { tokens } from "@fluentui/react-components";
import { PostCard } from "./Home/PostCard";

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
      ...ColFlex,
      rowGap: tokens.spacingVerticalXL,
      flexGrow: 1
    }}>
      <PostCard />
    </div>
  )
}
