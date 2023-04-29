"use client";
import { Lexical } from "@/Lexical";
import { LexDisplayPreset } from "@/Lexical/Context/Display";
import { ExampleRichText } from "@/Lexical/Example";
import { Flex } from "@/Styles/Layout";
import { Caption1, Card, CardHeader, Divider, Title3, tokens } from "@fluentui/react-components";
import dayjs from "dayjs";

export interface IArticle {
  Title: string;
  Posted: Date;
  Categories: string[];
  Content: string;
}

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function ArticleContent({ Title, Posted, Categories, Content }: IArticle) {
  return (
    <Card style={{
      padding: [tokens.spacingHorizontalM, tokens.spacingHorizontalXL, tokens.spacingHorizontalXXL].join(" "),
    }}>
      <CardHeader
        style={{ rowGap: tokens.spacingVerticalS }}
        header={<Title3>Video processing with WebCodecs</Title3>}
        description={
          <div style={{
            ...Flex,
            color: tokens.colorNeutralForeground3,
            justifyContent: "space-between"
          }}>
            <Caption1 children={`POSTED ${dayjs().subtract(1, "M").format("YYYY-MM-DD HH:mm")}`} />

            <Caption1>
              PROGRAM / FRONTEND / WEBCODECS
            </Caption1>
          </div>
        }
      />

      <Divider />

      <Lexical Plugin={LexDisplayPreset} Display Editable={false} State={ExampleRichText} />
    </Card>
  );
}
