import { ColFlex } from "@/Styles/Layout";
import { Body1, Body1Strong, Caption1, Card, CardHeader, Link, tokens } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import dayjs from "dayjs";
import { IMetadata } from "./PostCard";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function Recent({ Id }: { Id: number }) {
  const { data: meta } = useRequest(async () => {
    const res = await fetch(`/api/Article/${Id}`);
    return await res.json() as IMetadata;
  }, {
    cacheKey: `meta${Id}`
  });

  const { Title, Posted, Categories } = meta || {
    Title: "Loading...",
    Categories: [],
  };

  return (
    <div style={{
      ...ColFlex,
      rowGap: tokens.spacingVerticalXS
    }}>
      <Caption1>{dayjs(Posted).format("YYYY-MM-DD")}</Caption1>

      <Link appearance="subtle" href={`/Article/${Id}`}>
        <Body1Strong>{Title}</Body1Strong>
      </Link>

      <Caption1>
        {Categories.join(" / ")}
      </Caption1>
    </div>
  );
}
