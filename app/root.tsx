import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta property="og:image" content="https://miudc.vercel.app/og.png" />
        <meta name="google-site-verification" content="NowvXA1Cnoi8Ddi97wi-WcKhIYp5PxCVOyN7C7fJTFo" />
        <meta name="description" content="The 8th Edition of MIUDC - LGS JT Urdu Debates Competition. Register now for the premier Urdu debating event in Pakistan." />
        <meta name="keywords" content="MIUDC, Urdu Debates, LGS JT, Debating, Competition, Lahore, Pakistan, Register" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://miudc.vercel.app/" />
        <meta property="og:title" content="MIUDC - LGS JT Urdu Debates Competition" />
        <meta property="og:description" content="The 8th Edition of MIUDC - LGS JT Urdu Debates Competition. Register now for the premier Urdu debating event in Pakistan." />
        <meta property="og:url" content="https://miudc.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MIUDC - LGS JT Urdu Debates Competition" />
        <meta name="twitter:description" content="The 8th Edition of MIUDC - LGS JT Urdu Debates Competition. Register now for the premier Urdu debating event in Pakistan." />
        <meta name="twitter:image" content="https://miudc.vercel.app/og.png" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
