import { useSession } from "next-auth/react";

/**
 * With Admin Role
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function Admin({ children }: { children: React.ReactNode }) {
  const { data } = useSession();
  return data?.user?.image === "Admin" ? children as JSX.Element : null;
}

/**
 * With Login
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function Login({ children }: { children: React.ReactNode }) {
  const { data } = useSession();
  return data?.user?.name ? children as JSX.Element : null;
}
