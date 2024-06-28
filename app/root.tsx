import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import "./tailwind.css";
import MainNavigation from "~/components/MainNavigation";
import '~/styles/main.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
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

export function ErrorBoundary() {
  const error = useRouteError();
  
  if (isRouteErrorResponse(error)) {
    return (
      <main className="error">
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p className="info-message">{error.data}</p>
      </main>
    );
  } else if (error instanceof Error) {
    return (
      <main className="error">
        <h1>Error</h1>
        <p className="info-message">{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </main>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

// export function links() {
//   return [
//     { rel: "stylesheet", href: styles },
//   ];
// }
