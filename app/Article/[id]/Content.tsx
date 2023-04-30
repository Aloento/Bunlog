"use client";
import { IAbstract } from "@/Components/PostCard";
import { Lexical } from "@/Lexical";
import { LexDisplayPreset } from "@/Lexical/Context/Display";
import { CurrentEditor } from "@/Lexical/Utils";
import { Flex } from "@/Styles/Layout";
import { Caption1, Card, CardHeader, Divider, Title3, tokens } from "@fluentui/react-components";
import { useRequest, useUpdateEffect } from "ahooks";
import dayjs from "dayjs";
import { SerializedEditorState } from "lexical";
import { Helmet } from "react-helmet";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function ArticleContent({ Id }: { Id: number }) {
  const { data: meta } = useRequest(async () => {
    const res = await fetch(`/api/Article/${Id}`);
    return await res.json() as IAbstract;
  }, {
    cacheKey: `meta${Id}`
  });

  const { Title, Posted, Categories } = meta || {
    Title: "Loading...",
    Categories: [],
  };

  const { data: ctx } = useRequest(async () => {
    const res = await fetch(`/api/Article/${Id}/Content`);
    return await res.json() as SerializedEditorState;
  }, {
    cacheKey: `ctx${Id}`
  })

  useUpdateEffect(() => {
    if (ctx && CurrentEditor) {
      const state = CurrentEditor.parseEditorState(ctx);
      CurrentEditor.setEditorState(state);
    }
  }, [ctx, CurrentEditor]);

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
