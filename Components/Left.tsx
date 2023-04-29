import { PersonCard } from "@/Components/PersonCard";
import { Flex, LRColStyle } from "@/Styles/Layout";
import { Body1, Card, CardHeader, tokens } from "@fluentui/react-components";
import { Pill } from "./Pill";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function CommLeft() {
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
          <Pill />
        </div>
      </Card>
    </div>
  )
}
