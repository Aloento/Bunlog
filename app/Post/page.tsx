"use client";

import { Lexical } from "@/Lexical";
import { ExampleRichText } from "@/Lexical/Example";
import { BaseCard, MidStyle } from "@/Styles/Layout";
import { Field, Input, tokens } from "@fluentui/react-components";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export default function PostPage() {
  return (
    <div style={MidStyle}>
      <Field>
        <Input appearance="underline" contentBefore="Title" placeholder="Welcome to the Playground" style={{
          fontSize: tokens.fontSizeBase600,
          columnGap: tokens.spacingHorizontalMNudge
        }} />
      </Field>

      <div style={BaseCard as any}>
        <Lexical State={ExampleRichText} />
      </div>
    </div>
  )
}
