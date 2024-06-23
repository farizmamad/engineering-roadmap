import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import homeStyles from "~/styles/home.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Kalkulator Finansial" },
    { name: "description", content: "Aplikasi yang anda butuhkan" },
  ];
};

export default function Index() {
  return (
    <main id="content">
      <h1>Berbagai program perhitungan masalah keuangan</h1>
      <p id="cta">
        <Link to="/kpr">KPR</Link>
      </p>
      <p id="cta">
        <Link to="/kehamilan">kehamilan</Link>
      </p>
      <p id="cta">
        <Link to="/renovasi">Renovasi</Link>
      </p>
    </main>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: homeStyles },
  ];
}
