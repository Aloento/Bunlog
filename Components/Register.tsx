import { INewUser } from "@/app/api/auth/new/route";
import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Field, Input } from "@fluentui/react-components";
import { useBoolean } from "ahooks";
import { signIn } from "next-auth/react";
import { useState } from "react";

/**
 * Register Modal
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function Register({ open, close }: { open: boolean, close: () => void }) {
  const [name, setName] = useState<string>();
  const [mail, setMail] = useState<string>();
  const [hash, setHash] = useState<string>();

  const [up, { toggle }] = useBoolean();

  return (
    <Dialog open={open} onOpenChange={close} modalType="alert">
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Create New Account</DialogTitle>

          <DialogContent>
            <Field label="User Name" required>
              <Input value={name} onChange={(_, v) => setName(v.value.trim().normalize())} />
            </Field>

            <Field label="E-Mail" required>
              <Input type="email" value={mail} onChange={(_, v) => setMail(v.value.trim().normalize())} />
            </Field>

            <Field label="Password" required>
              <Input type="password" value={hash} onChange={(_, v) => setHash(v.value.trim().normalize())} />
            </Field>
          </DialogContent>

          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button>Cancel</Button>
            </DialogTrigger>

            <DialogTrigger disableButtonEnhancement>
              <Button appearance="primary" disabled={up} onClick={async () => {
                if ((name?.length || 0) < 2 || (hash?.length || 0) < 6 || (mail?.length || 0) < 6)
                  return;

                toggle();

                await fetch("/api/auth/new", {
                  method: "POST",
                  body: JSON.stringify({
                    Name: name,
                    EMail: mail,
                    Hash: hash
                  } as INewUser)
                });

                signIn();
              }}>
                Submit
              </Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
