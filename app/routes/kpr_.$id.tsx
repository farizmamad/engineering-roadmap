import { DataGrid } from "@mui/x-data-grid";
import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, MetaDescriptor, useLoaderData } from "@remix-run/react";
import { getStoredKpr, KPRData } from "~/data/kpr";
import '~/styles/kpr-details.css';

export default function KPRDetailsPage() {
  const data = useLoaderData<KPRData>();

  const columns = [
    {field: 'tenure', headerName: 'Tenor', flex: 1},
    {field: 'futurePrice', headerName: 'Harga di masa depan', flex: 1},
    {field: 'installment', headerName: 'Cicilan per bulan (flat)', flex: 1},
  ];

  const rows = data.calculation.map((kprData, index) => {
    return {
      id: index,
      tenure: kprData.tenure,
      futurePrice: kprData.futurePrice,
      installment: kprData.installment,
    };
  });

  return <main id='kpr-details'>
    <header>
      <nav>
        <Link to="/kpr">Back to all KPR</Link>
      </nav>
      <h1>Harga Beli: {data.buyPrice}</h1>
    </header>
    <p id='kpr-details-content'>DP: {data.downPayment}</p>
    <p id='kpr-details-content'>Margin: {data.margin}</p>
    <p id='kpr-details-content'>Biaya Notaris: {data.notaryFees ?? '?'}</p>
    <p id='kpr-details-content'>Asuransi: {data.insuranceFees ?? '-'}</p>
    <section id="DataGrid" style={{ height: 350, width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
      <DataGrid rows={rows} columns={columns} sx={{backgroundColor: "#caffca"}}/>
    </section>
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
      title: data.buyPrice ?? 'Simulasi KPR',
    },
    {
      name: 'description',
      content: 'Lihat cicilan berdasarkan tenor yang anda pilih.'
    }
  ];
}