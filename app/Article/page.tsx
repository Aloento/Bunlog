"use client";

import { ColLayout } from "@/Components/ColLayout";
import { Lexical } from "@/Lexical";
import { LexDisplayPreset } from "@/Lexical/Context/Display";
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
    <ColLayout style={BaseCard as any}>
      <Lexical Plugin={LexDisplayPreset} Editable={false} State={ExampleRichText} />
    </ColLayout>
  )
}
