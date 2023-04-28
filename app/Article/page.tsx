"use client";

import { ColLayout } from "@/Components/ColLayout";
import { Lexical } from "@/Lexical";
import { LexDisplayPreset } from "@/Lexical/Context/Display";
import { ExampleRichText } from "@/Lexical/Example";
import { BaseCard, Flex } from "@/Styles/Layout";
import { Caption1, CardHeader, Divider, Link, Title3, tokens } from "@fluentui/react-components";
import dayjs from "dayjs";

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
      padding: [tokens.spacingHorizontalM, tokens.spacingHorizontalXL, tokens.spacingHorizontalXXL].join(" "),
    }}>
      <CardHeader
        style={{ rowGap: tokens.spacingVerticalS }}
        header={
          <Link appearance="subtle" href="/Article">
            <Title3>Video processing with WebCodecs</Title3>
          </Link>
        }
        description={
          <div style={{
            ...Flex,
            color: tokens.colorNeutralForeground3,
            justifyContent: "space-between"
          }}>
            <Caption1 children={`Posted ${dayjs().subtract(1, "M").format("YYYY-MM-DD HH:mm")}`.toUpperCase()} />

            <Caption1>
              PROGRAM / FRONTEND / WEBCODECS
            </Caption1>
          </div>
        }
      />

      <Divider />

      <Lexical Plugin={LexDisplayPreset} Display Editable={false} State={ExampleRichText} />

      <Divider />

      <div style={{
        ...Flex,
        flexWrap: "wrap",
        gap: tokens.spacingHorizontalSNudge,
        color: tokens.colorNeutralForeground3,
      }}>
        <Caption1>#</Caption1>
        <Caption1>123</Caption1>
        <Caption1>123</Caption1>
        <Caption1>123</Caption1>
        <Caption1>123</Caption1>
        <Caption1>123</Caption1>
        <Caption1>123</Caption1>
      </div>
    </ColLayout>
  )
}
