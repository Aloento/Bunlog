"use client";

import { Button } from "@fluentui/react-components";
import { signIn, useSession } from "next-auth/react";

/**
 * 
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export default function RegiPage() {
  const { data } = useSession();

  return (
    <div>
      <Button onClick={() => signIn()}>{JSON.stringify(data)}</Button>
    </div>
  )
}
