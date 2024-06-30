import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  MetaDescriptor,
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
        <Link to='/'>Go Back</Link>
      </main>
    );
  } else if (error instanceof Error) {
    return (
      <main className="error">
        <h1>Error</h1>
        <p className="info-message">{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
        <Link to='/'>Go Back</Link>
      </main>
    );
  } else {
    return (
      <main>
        <h1>Unknown Error</h1>
        <Link to='/'>Go Back</Link>
      </main>
    );
  }
}

// export function links() {
//   return [
//     { rel: "stylesheet", href: styles },
//   ];
// }

export function meta(): MetaDescriptor[] {
  return [
    {
      title: 'Simulasi KPR',
    },
    {
      name: 'description',
      content: 'Lihat cicilan berdasarkan tenor yang anda pilih.'
    }
  ];
}
