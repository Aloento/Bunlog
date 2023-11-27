"use client";

import { Flex } from "@/Styles/Layout";
import { Avatar, Button, Card, CardHeader, Field, Input, tokens } from "@fluentui/react-components";
import { SendRegular } from "@fluentui/react-icons";
import { useBoolean } from "ahooks";
import gravatarUrl from "gravatar-url";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function PostComment({ Id }: { Id: number }) {
  const { data } = useSession();
  const { refresh } = useRouter();
  const email = data?.user?.email;

  const [cmt, setCmt] = useState<string>();
  const [up, { toggle }] = useBoolean();

  return (
    <Card>
      <CardHeader
        image={<Avatar image={{ src: gravatarUrl(email || "@", { default: email ? "retro" : "404" }) }} />}
        header={
          <div style={{
            ...Flex,
            flexGrow: 1,
            columnGap: tokens.spacingHorizontalM
          }}>
            <Field style={{ flexGrow: 1 }}>
              <Input
                appearance="underline"
                placeholder={email ? "Post Comment Here" : "Login to Post New Comment"}
                disabled={!email}
                value={cmt}
                onChange={(_, v) => setCmt(v.value)}
              />
            </Field>

            <Button icon={<SendRegular />} disabled={up || !email} onClick={async () => {
              const s = cmt?.trim();
              if ((s?.length || 0) < 2)
                return;

              toggle();

              const res = await fetch(`/api/Comment/${Id}`, {
                method: "POST",
                body: cmt
              })

              if (res.status === 201)
                refresh();
            }} />
          </div>
        }
      />
    </Card>
  );
}
