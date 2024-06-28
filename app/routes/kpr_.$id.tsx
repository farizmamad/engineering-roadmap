import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, MetaDescriptor, useLoaderData } from "@remix-run/react";
import { getStoredKpr, KPRData } from "~/data/kpr";
import '~/styles/kpr-details.css';

export default function KPRDetailsPage() {
  const data = useLoaderData<KPRData>();

  return <main id='kpr-details'>
    <header>
      <nav>
        <Link to="/kpr">Back to all KPR</Link>
      </nav>
      <h1>Harga: {data.price}</h1>
    </header>
    <p id='kpr-details-content'>DP: {data.dp}</p>
    <p id='kpr-details-content'>Margin: {data.margin}</p>
  </main>
}

export async function loader({ params }: LoaderFunctionArgs) {
  const kprId = params.id;
  const allKPR = await getStoredKpr();
  const selectedKPR = allKPR.find((data) => data.id === kprId);
  if (selectedKPR) return selectedKPR;
  throw new Response('Could not find the KPR details. Try another one.', { status: 404, statusText: 'Not Found' });
}

export function meta({data}: {data: KPRData}): MetaDescriptor[] {
  return [
    {
      title: data.price ?? 'Simulasi KPR',
    },
    {
      name: 'description',
      content: 'Lihat cicilan berdasarkan tenor yang anda pilih.'
    }
  ];
}