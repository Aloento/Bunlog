"use client";

import { Login } from "@/Components/User";
import { Flex } from "@/Styles/Layout";
import { Avatar, Button, Card, CardHeader, Divider, Field, Input, tokens } from "@fluentui/react-components";
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

  return (
    <Login>
      <Card>
        <CardHeader
          image={<Avatar image={{ src: gravatarUrl(data?.user?.email || "@", { default: "retro" }) }} />}
          header={
            <div style={{
              ...Flex,
              columnGap: tokens.spacingHorizontalM
            }}>
              <Field style={{ flexGrow: 1 }}>
                <Input appearance="underline" placeholder="Post Comment Here" />
              </Field>

              <Button icon={<SendRegular />} />
            </div>
          }
        />
      </Card>

      <Divider />
    </Login>
  );
}
