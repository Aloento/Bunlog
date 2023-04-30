"use client";

import { Footer } from "@/Components/Footer";
import { NavH, NavW, TopNavBar } from "@/Components/TopNavBar";
import { Calc, Unit } from "@/Styles";
import { ColFlex } from "@/Styles/Layout";
import { FluentProvider, tokens, webLightTheme } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "./index.css";

dayjs.extend(relativeTime)

/**
 * Global Layout
 *
 * @author Aloento
 * @since MusiLand 0.2.2
 * @version 0.1.0
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { data } = useRequest(async () => {
    const res = await fetch("/api/auth/session");
    return await res.json() as Session;
  }, { cacheKey: "Auth" });

  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#40526c" />
        <meta name="msapplication-TileColor" content="#40526c" />
        <meta name="theme-color" content="#40526c" />
        <title>Aloento's Blog</title>
      </head>

      <SessionProvider session={data}>
        <FluentProvider as={"body" as any} theme={webLightTheme} applyStylesToPortals style={{
          backgroundColor: tokens.colorNeutralBackground3
        }}>
          <TopNavBar />

          <div style={{
            ...ColFlex,
            minWidth: "1024px",
            position: "absolute",
            paddingTop: Calc(Unit(NavH), "+", tokens.spacingVerticalXXXL),
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
          }}>
            <main style={{
              maxWidth: NavW,
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: tokens.spacingHorizontalS,
              paddingRight: tokens.spacingHorizontalS,
              paddingBottom: tokens.spacingVerticalXXXL
            }}>
              {children}
            </main>

            <Footer />
          </div>
        </FluentProvider>
      </SessionProvider>
    </html>
  )
}
