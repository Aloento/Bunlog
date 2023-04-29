"use client";

import { ColLayout } from "@/Components/ColLayout";
import { Lexical } from "@/Lexical";
import { LexDisplayPreset } from "@/Lexical/Context/Display";
import { ExampleRichText } from "@/Lexical/Example";
import { Flex } from "@/Styles/Layout";
import { Avatar, Body1, Body1Stronger, Button, Caption1, Card, CardHeader, Divider, Field, Input, Link, Title3, tokens } from "@fluentui/react-components";
import { SendRegular } from "@fluentui/react-icons";
import dayjs from "dayjs";
import gravatarUrl from "gravatar-url";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export default function ArtiPage({ id }: { id: number }) {
  return (
    <ColLayout>
      <Card style={{
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
      </Card>

      <Divider />

      <Card>
        <CardHeader
          image={<Avatar image={{ src: gravatarUrl("aloento@q-audio.org") }} />}
          header={
            <div style={{
              ...Flex,
              columnGap: tokens.spacingHorizontalM
            }}>
              <Field style={{ flexGrow: 1 }}>
                <Input appearance="underline" placeholder="Post Comment Here" />
              </Field>

              <Button icon={<SendRegular />} />
            </div>
          }
        />
      </Card>

      <Divider />

      <Card>
        <CardHeader
          image={<Avatar image={{
            src: gravatarUrl("aloento@q-audio.org", { default: "retro" })
          }} />}
          header={
            <div style={{
              ...Flex,
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <Body1Stronger>Elvia Atkin</Body1Stronger>
              <Caption1 children={`Posted ${dayjs().subtract(1, "M").format("YYYY-MM-DD HH:mm")}`.toUpperCase()} />
            </div>
          }
        />

        <Body1 children="这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本" />
      </Card>

    </ColLayout>
  )
}
