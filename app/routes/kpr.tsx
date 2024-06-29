import { MetaDescriptor, redirect, useLoaderData } from '@remix-run/react';
import KPRForm from '~/components/KPRForm';
import KPRResult from '~/components/KPRResult';
import { getStoredKpr, KPRData, storeKPR, tenures } from '~/data/kpr';

export default function KPRPage() {
  // hooks
  const loaderData = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>Simulasi KPR</h1>
      <KPRForm />
      <KPRResult kpr={loaderData} />
    </main>
  );
}

// reserved functions
export async function loader() {
  // throw new Response('Could not find any KPR data', { status: 404, statusText: 'Not Found'});
  const kpr = await getStoredKpr();
  return kpr;
}

// reserved functions
export async function action({ request }: { request: any }) {
  const formData = await request?.formData();
  const kprData: KPRData = {
    id: new Date().toISOString(),
    buyPrice: parseFloat(formData?.get('kpr-price')),
    downPayment: parseFloat(formData?.get('kpr-dp')),
    margin: parseFloat(formData?.get('kpr-margin')),
    calculation: [],
  };

  // simulate to 1% of sell price
  kprData.notaryFees = kprData.buyPrice * (10 / 100);
  // simulate to 1% of sell price
  kprData.insuranceFees = kprData.buyPrice * (10 / 100);

  for (const tenure of tenures) {
    const futurePrice = kprData.buyPrice * Math.pow((1 + (kprData.margin / 100)), tenure);
    const installment = futurePrice / (tenure * 12);

    kprData.calculation.push({
      tenure,
      futurePrice,
      installment,
    });
  }

  if (isNaN(kprData.buyPrice) || kprData.buyPrice < 10000000) {
    return { message: 'Harga tidak valid. Minimal Rp. 10 Juta' };
  }

  const existingKPR = (await getStoredKpr()) ?? [];
  const updatedKPR = existingKPR.concat(kprData);
  await storeKPR(updatedKPR);
  return redirect('/kpr');
}

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

// reserved functions
// export function links() {}