"use client";

import { ColLayout } from "@/Components/ColLayout";
import { Lexical } from "@/Lexical";
import { LexDisplayPreset } from "@/Lexical/Context/Display";
import { ExampleRichText } from "@/Lexical/Example";
import { BaseCard } from "@/Styles/Layout";
import { tokens } from "@fluentui/react-components";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export default function ArtiPage() {
  return (
    <ColLayout style={{
      ...BaseCard as any,
      padding: [tokens.spacingVerticalMNudge, tokens.spacingHorizontalXL].join(" "),
    }}>
      <Lexical Plugin={LexDisplayPreset} Display Editable={false} State={ExampleRichText} />
    </ColLayout>
  )
}
