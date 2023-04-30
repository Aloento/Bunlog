import { Flex } from "@/Styles/Layout";
import { Body1, Caption1, Card, CardHeader, Link, Title3, tokens } from "@fluentui/react-components";
import dayjs from "dayjs";

export interface IAbstract {
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
export function PostCard() {
  return (
    <Card size="large" style={{
      paddingLeft: tokens.spacingVerticalXL,
      paddingRight: tokens.spacingVerticalXL,
    }}>
      <CardHeader
        style={{ rowGap: tokens.spacingVerticalS }}
        header={
          <Link appearance="subtle" href="/Article">
            <Title3>Video processing with WebCodecs</Title3>
          </Link>
        }
        description={
          <div style={{
            ...Flex,
            color: tokens.colorNeutralForeground3,
            justifyContent: "space-between"
          }}>
            <Caption1 children={`Posted ${dayjs().subtract(1, "M").fromNow()}`.toUpperCase()} />

            <Caption1>
              PROGRAM / FRONTEND / WEBCODECS
            </Caption1>
          </div>
        }
      />

      <Body1 children="Modern web technologies provide ample ways to work with video. Media Stream API, Media Recording API, Media Source API, and WebRTC API add up to a rich tool set for recording, transferring, and playing video streams. While solving certain high-level tasks, these APIs don't let web programmers work with individual components of a video stream such as frames and unmuxed chunks of encoded video or audio. To get low-level access to these basic components, developers have been using WebAssembly to bring video and audio codecs into the browser. But given that modern browsers already ship with a variety of codecs (which are often accelerated by hardware), repackaging them as WebAssembly seems like a waste of human and computer resources." />
    </Card>
  )
}
