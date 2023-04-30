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
    const res = await fetch(`/api/Comment/${Id}`);
    return await res.json() as IComment;
  }, { cacheKey: `cmt${Id}` });

  const { Name, EMail, Posted, Content } = data || {
    Name: "Loading..."
  };

  return (
    <Card>
      <CardHeader
        image={
          <Avatar image={{
            src: gravatarUrl(EMail || "@", { default: EMail ? "retro" : "404" })
          }} />
        }
        header={
          <div style={{
            ...Flex,
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <Body1Stronger>{Name}</Body1Stronger>
            <Caption1 children={`POSTED ${dayjs(Posted).format("YYYY-MM-DD HH:mm")}`} />
          </div>
        } />

      <Body1>{Content}</Body1>
    </Card>
  );
}
