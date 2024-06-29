import { KPRData } from "~/data/kpr";
import './KPRResult.css';
import { Link } from "@remix-run/react";

export default function KPRResult({ kpr }: { kpr: KPRData[] }) {
  return (
    <ul id='kpr-data-list'>
      { kpr.map((data, index) => (
        <li key={data.id} className='kpr-data'>
          <Link to={data.id!}>
            <article>
              <header>
                <ul className='kpr-data-meta'>
                  <li>#{index + 1}</li>
                  <li>
                    <time dateTime={data.id}>
                      {new Date(data.id!).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </time>
                  </li>
                </ul>
                <h2>Harga Beli: {data.buyPrice.toLocaleString()}</h2>
              </header>
              <p>DP: {data.downPayment.toLocaleString()}</p>
              <p>Margin per tahun: {`${data.margin}%`}</p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}