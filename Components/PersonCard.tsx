import { ColFlex, Flex } from "@/Styles/Layout";
import { Avatar, Body1, Card, Subtitle1, Title3, tokens } from "@fluentui/react-components";
import { Location16Filled } from "@fluentui/react-icons";
import { useRequest } from "ahooks";
import { CSSProperties } from "react";

export interface IStatistics {
  Posts: number;
  Categories: number;
  Tags: number;
}

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function PersonCard() {
  const { data } = useRequest(async () => {
    const res = await fetch("/api/Statistics");
    const js: IStatistics = await res.json();
    return js;
  }, { cacheKey: "Statistics" });

  return (
    <Card size="large" style={{
      alignItems: "center",
      rowGap: tokens.spacingVerticalS,
      paddingTop: tokens.spacingVerticalXL,
      paddingBottom: tokens.spacingVerticalXL
    }}>
      <Avatar
        size={128}
        image={{
          src: "/Aloento.png"
        }}
      />

      <Subtitle1>Aloento</Subtitle1>

      <div style={{ ...ColFlex, alignItems: "center" }}>
        <Body1>Reindeer</Body1>

        <div style={{
          ...Flex,
          alignItems: "center",
          columnGap: tokens.spacingHorizontalXS
        }}>
          <Location16Filled />
          <Body1>Foot of Sacred Mountain</Body1>
        </div>
      </div>

      <div style={{
        ...Flex,
        width: "-webkit-fill-available",
        justifyContent: "space-around",
        paddingTop: tokens.spacingVerticalS
      }}>
        <div style={sta}>
          <Body1>POSTS</Body1>
          <Title3>{data?.Posts}</Title3>
        </div>

        <div style={sta}>
          <Body1>CATEGORIES</Body1>
          <Title3>{data?.Categories}</Title3>
        </div>

        <div style={sta}>
          <Body1>TAGS</Body1>
          <Title3>{data?.Tags}</Title3>
        </div>
      </div>
    </Card>
  )
}

const sta: CSSProperties = {
  ...ColFlex,
  alignItems: "center"
}
