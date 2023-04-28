"use client";

import { Lexical } from "@/Lexical";
import { ExampleRichText } from "@/Lexical/Example";
import { BaseCard, Flex, MidStyle } from "@/Styles/Layout";
import { Button, Divider, Field, Input, Textarea, tokens } from "@fluentui/react-components";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export default function PostPage() {
  return (
    <div style={{
      ...MidStyle,
      rowGap: tokens.spacingVerticalXXL
    }}>
      <Field>
        <Input appearance="underline" contentBefore="Title" placeholder="Welcome to the Playground" size="large" style={{
          marginTop: "-10px",
          fontSize: tokens.fontSizeBase600,
          columnGap: tokens.spacingHorizontalMNudge
        }} />
      </Field>

      <div style={BaseCard as any}>
        <Lexical State={ExampleRichText} />
      </div>

      <Divider />

      <Field label="Abstract" size="large">
        <Textarea resize="vertical" />
      </Field>

      <Field label="Categories" size="large">
        <Input />
      </Field>

      <Field label="Tags" size="large">
        <Input />
      </Field>

      <div style={{
        ...Flex,
        columnGap: tokens.spacingHorizontalS,
        alignSelf: "end"
      }}>
        <Button>
          Cancel
        </Button>

        <Button appearance="primary">
          Submit
        </Button>
      </div>
    </div>
  )
}
