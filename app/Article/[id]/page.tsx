"use client";

import { ColLayout } from "@/Components/ColLayout";
import { Flex } from "@/Styles/Layout";
import { Avatar, Body1, Body1Stronger, Caption1, Card, CardHeader, Divider } from "@fluentui/react-components";
import dayjs from "dayjs";
import gravatarUrl from "gravatar-url";
import { ArticleContent, IArticleContent } from "./Content";
import { PostComment } from "./PostComment";

export type IArticle = IArticleContent;

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
      <ArticleContent />

      <Divider />

      <PostComment />

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
