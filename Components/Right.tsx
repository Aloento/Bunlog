import { LRColStyle } from "@/Styles/Layout";
import { Body1, Card, CardHeader, tokens } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import { Recent } from "./Recent";
import { Tools } from "./Tools";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function CommRight() {
  const { data } = useRequest(async () => {
    const res = await fetch("/api/Article?" + new URLSearchParams({ limit: "9" }));
    return await res.json() as number[];
  }, {
    cacheKey: `list9`
  });

  return (
    <div style={LRColStyle}>
      <Tools />

      <Card size="large" style={{ rowGap: tokens.spacingVerticalXXL }}>
        <CardHeader header={<Body1>RECENTS</Body1>} />

        {data?.map(x => <Recent Id={x} />)}

      </Card>
    </div>
  )
}
