import { FluentProvider, RendererProvider, SSRProvider, createDOMRenderer, renderToStyleElements, webLightTheme } from "@fluentui/react-components";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { getUser } from "~/session.server";

export function links() {
  return cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [];
}

export async function loader({ request }: LoaderArgs) {
  return json({ user: await getUser(request) });
}

export default function App() {
  const renderer = createDOMRenderer();

  return (
    <html lang="en">
      <head>
        {renderToStyleElements(renderer)}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <RendererProvider renderer={renderer}>
        <SSRProvider>
          <FluentProvider theme={webLightTheme}>

            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />

          </FluentProvider>
        </SSRProvider>
      </RendererProvider>
    </html>
  );
}
