"use client";
import { Flex } from "@/Styles/Layout";
import { Avatar, Body1, Body1Stronger, Caption1, Card, CardHeader } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import dayjs from "dayjs";
import gravatarUrl from "gravatar-url";

export interface IComment {
  Name: string;
  EMail: string;
  Posted: Date;
  Content: string;
}

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function Comment({ Id }: { Id: number }) {
  const { data } = useRequest(async () => {

  }, { cacheKey: `cmt${Id}` });

  return (
    <Card>
      <CardHeader
        image={
          <Avatar image={{
            src: gravatarUrl("aloento@q-audio.org", { default: "retro" })
          }} />
        }
        header={
          <div style={{
            ...Flex,
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <Body1Stronger>Elvia Atkin</Body1Stronger>
            <Caption1 children={`Posted ${dayjs().subtract(1, "M").format("YYYY-MM-DD HH:mm")}`.toUpperCase()} />
          </div>
        } />

      <Body1 children="这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本这是一串非常长的文本" />
    </Card>
  );
}
