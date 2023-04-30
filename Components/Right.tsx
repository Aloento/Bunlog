import { LRColStyle } from "@/Styles/Layout";
import { Recents } from "./Recents";
import { Tools } from "./Tools";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function CommRight() {
  return (
    <div style={LRColStyle}>
      <Tools />
      <Recents />
    </div>
  )
}
