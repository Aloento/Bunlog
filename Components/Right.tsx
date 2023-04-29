import { ColFlex, LRColStyle } from "@/Styles/Layout";
import { Body1, Body1Strong, Caption1, Card, CardHeader, Link, tokens } from "@fluentui/react-components";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function CommRight() {
  return (
    <div style={LRColStyle}>
      <Card size="large">
        <CardHeader header={<Body1>RECENTS</Body1>} />

        <div style={{
          ...ColFlex,
          rowGap: tokens.spacingVerticalXS
        }}>
          <Caption1>2022-12-15</Caption1>

          <Link appearance="subtle">
            <Body1Strong>Turing Machines</Body1Strong>
          </Link>

          <Caption1>Algorithm</Caption1>
        </div>

      </Card>
    </div>
  )
}
