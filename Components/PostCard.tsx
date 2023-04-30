import { Flex } from "@/Styles/Layout";
import { Body1, Caption1, Card, CardHeader, Link, Title3, tokens } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import dayjs from "dayjs";

export interface IMetadata {
  Title: string;
  Posted: Date;
  Categories: string[];
}

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function PostCard({ Id }: { Id: number }) {
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

  const { data: ab } = useRequest(async () => {
    const res = await fetch(`/api/Article/${Id}/Abstract`);
    return await res.text();
  }, {
    cacheKey: `ab${Id}`
  });

  return (
    <Card size="large" style={{
      paddingLeft: tokens.spacingVerticalXL,
      paddingRight: tokens.spacingVerticalXL,
    }}>
      <CardHeader
        style={{ rowGap: tokens.spacingVerticalS }}
        header={
          <Link appearance="subtle" href={`/Article/${Id}`}>
            <Title3>{Title}</Title3>
          </Link>
        }
        description={
          <div style={{
            ...Flex,
            color: tokens.colorNeutralForeground3,
            justifyContent: "space-between"
          }}>
            <Caption1 children={`POSTED ${dayjs(Posted).fromNow()}`} />

            <Caption1>
              {Categories.join(" / ")}
            </Caption1>
          </div>
        }
      />

      <Body1>{ab}</Body1>
    </Card>
  )
}
