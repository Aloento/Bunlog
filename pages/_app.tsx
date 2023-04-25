import { Footer } from "@/Components/Footer";
import { NavH, NavW, TopNavBar } from "@/Components/TopNavBar";
import { ColFlex } from "@/Styles/Layout";
import { FluentProvider, tokens, webLightTheme } from "@fluentui/react-components";
import type { AppProps } from "next/app";

/**
 * Global Layout
 *
 * @author Aloento
 * @since MusiLand 0.2.2
 * @version 0.1.0
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <FluentProvider theme={webLightTheme} applyStylesToPortals>
      <TopNavBar />

      <div style={{
        ...ColFlex,
        minWidth: "1024px",
        position: "absolute",
        marginTop: `${NavH}px`,
        width: "100%",
        height: "-webkit-fill-available",
        justifyContent: "space-between",
        backgroundColor: tokens.colorNeutralBackground3
      }}>
        <main style={{
          maxWidth: NavW,
          width: "-webkit-fill-available",
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </FluentProvider>
  )
}
