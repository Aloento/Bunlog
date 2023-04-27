"use client";

import { Lexical } from "@/Lexical";
import { ExampleRichText } from "@/Lexical/Example";
import { BaseCard } from "@/Styles/Layout";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export default function ArtiPage() {
  return (
    <div style={BaseCard as any}>
      <Lexical State={ExampleRichText} />
    </div>
  )
}
