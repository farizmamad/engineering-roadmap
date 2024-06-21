import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import homeStyles from "~/styles/home.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Saintek" },
    { name: "description", content: "Jelajahi cakrawala sains dan teknologi" },
  ];
};

export default function Index() {
  return (
    <main id="content">
      <h1>Cara mudah menjelajahi ilmu sains dan teknologi</h1>
      <p id="cta">
        <Link to="/program">Cek Program Studi</Link>
      </p>
      <p id="cta">
        <Link to="/ask">Tanya Saintek</Link>
      </p>
    </main>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: homeStyles },
  ];
}
