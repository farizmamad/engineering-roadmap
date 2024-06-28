import { Link } from "@remix-run/react";
import '~/styles/kpr-details.css';

export default function KPRDetailsPage() {
  return <main id='kpr-details'>
    <header>
      <nav>
        <Link to="/kpr">Back to all KPR</Link>
      </nav>
      <h1>KPR Title</h1>
    </header>
    <p id='kpr-details-content'>KPR content</p>
  </main>
}