"use client";

import { Flex } from "@/Styles/Layout";
import { Avatar, Button, Card, CardHeader, Field, Input, tokens } from "@fluentui/react-components";
import { SendRegular } from "@fluentui/react-icons";
import gravatarUrl from "gravatar-url";
import { useSession } from "next-auth/react";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function PostComment() {
  const { data } = useSession();
  const email = data?.user?.email;

  return (
    <Card>
      <CardHeader
        image={<Avatar image={{ src: gravatarUrl(email || "@", { default: email ? "retro" : "404" }) }} />}
        header={
          <div style={{
            ...Flex,
            columnGap: tokens.spacingHorizontalM
          }}>
            <Field style={{ flexGrow: 1 }}>
              <Input appearance="underline" placeholder={email ? "Post Comment Here" : "Login to Post New Comment"} disabled={!email} />
            </Field>

            <Button icon={<SendRegular />} disabled={!email} />
          </div>
        }
      />
    </Card>
  );
}
