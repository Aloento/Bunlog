"use client";
import { Lexical } from "@/Lexical";
import { LexDisplayPreset } from "@/Lexical/Context/Display";
import { CurrentEditor } from "@/Lexical/Utils";
import { Flex } from "@/Styles/Layout";
import { Caption1, Card, CardHeader, Divider, Title3, tokens } from "@fluentui/react-components";
import { useRequest, useUpdateEffect } from "ahooks";
import dayjs from "dayjs";
import { Helmet } from "react-helmet";

export interface IArticle {
  Title: string;
  Posted: Date;
  Categories: string[];
  Content: any;
}

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function ArticleContent({ Id }: { Id: number }) {
  const { data } = useRequest(async () => {
    const res = await fetch(`/api/Article/${Id}`);
    return await res.json() as IArticle;
  }, {
    cacheKey: `post${Id}`
  });

  const { Title, Posted, Categories, Content } = data || {
    Title: "Loading...",
    Categories: [],
  };

  useUpdateEffect(() => {
    if (data && CurrentEditor) {
      const state = CurrentEditor.parseEditorState(Content);
      CurrentEditor.setEditorState(state);
    }
  }, [data, CurrentEditor]);

  return (
    <Card style={{
      padding: [tokens.spacingHorizontalM, tokens.spacingHorizontalXL, tokens.spacingHorizontalXXL].join(" "),
    }}>
      <Helmet>
        <title>{Title} - Aloento's Blog</title>
      </Helmet>

      <CardHeader
        style={{ rowGap: tokens.spacingVerticalS }}
        header={<Title3>{Title}</Title3>}
        description={
          <div style={{
            ...Flex,
            color: tokens.colorNeutralForeground3,
            justifyContent: "space-between"
          }}>
            <Caption1 children={`POSTED ${dayjs(Posted).format("YYYY-MM-DD HH:mm")}`} />

            <Caption1>
              {Categories.join(" / ")}
            </Caption1>
          </div>
        }
      />

      <Divider />

      <Lexical Plugin={LexDisplayPreset} Display Editable={false} />
    </Card>
  );
}
