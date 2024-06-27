import { KPRData } from "~/data/kpr";
import './KPRResult.css';

export default function KPRResult({ kpr }: { kpr: KPRData[] }) {
  return (
    <ul id='kpr-data-list'>
      { kpr.map((data, index) => (
        <li key={data.id} className='kpr-data'>
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
              <h2>Harga: {data.price}</h2>
            </header>
            <p>{data.dp}</p>
            <p>{data.margin}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}