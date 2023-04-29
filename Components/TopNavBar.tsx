import { Flex } from "@/Styles/Layout";
import { Link, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, tokens } from "@fluentui/react-components";
import { useBoolean } from "ahooks";
import { signIn, signOut, useSession } from "next-auth/react";
import { CSSProperties } from "react";
import { Register } from "./Register";

export const NavH = 54;
export const NavW = "1440px";

const menu: CSSProperties = {
  marginBlock: 0,
  paddingInline: 0,
  ...Flex,
  columnGap: tokens.spacingHorizontalXXL
}

/**
 * Global top navigation bar
 *
 * @author Aloento
 * @since MusiLand 0.1.0
 * @version 0.1.0
 */
export function TopNavBar() {
  const { data } = useSession();
  const [open, { toggle }] = useBoolean();

  return (
    <header style={{
      position: "fixed",
      top: "0",
      width: "100%",
      height: `${NavH}px`,
      padding: "0 32px",
      backgroundColor: "#fff",
      boxSizing: "border-box",
      boxShadow: tokens.shadow4,
      zIndex: 1
    }}>
      <nav style={{
        ...Flex,
        maxWidth: NavW,
        height: "100%",
        margin: "0 auto",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <menu style={menu}>
          <Link href="/" appearance="subtle">Aloento</Link>
          <Link appearance="subtle" href="https://github.com/Aloento/Bunlog" target="_blank">
            Source Code
          </Link>
          <Register open={open} close={toggle} />
        </menu>

        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <Link appearance="subtle">{data?.user?.name ?? "Account"}</Link>
          </MenuTrigger>

          <MenuPopover>
            <MenuList>
              {
                data?.user?.name
                  ?
                  <>
                    <MenuItem disabled>{data.user.image}</MenuItem>
                    <MenuItem>{data.user.email}</MenuItem>
                    <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                  </>
                  :
                  <>
                    <MenuItem onClick={() => signIn()}>Login</MenuItem>
                    <MenuItem onClick={toggle}>Register</MenuItem>
                  </>
              }
            </MenuList>
          </MenuPopover>
        </Menu>
      </nav>
    </header>
  )
}
