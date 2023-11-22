import { PersonCard } from "@/Components/PersonCard";
import { Flex, LRColStyle } from "@/Styles/Layout";
import { Body1, Card, CardHeader, tokens } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import { IPill, Pill } from "./Pill";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function CommLeft() {
  const { data } = useRequest(async () => {
    const res = await fetch("/api/Categories");
    return await res.json() as IPill[];
  }, {
    cacheKey: `pill`
  });

  return (
    <div style={LRColStyle}>
      <PersonCard />

      <Card size="large">
        <CardHeader header={<Body1>CATEGORIES</Body1>} />

        <div style={{
          ...Flex,
          flexWrap: "wrap",
          gap: tokens.spacingHorizontalS
        }}>
          {data?.map((x, i) => <Pill key={i} {...x} />)}
        </div>
      </Card>
    </div>
  )
}
