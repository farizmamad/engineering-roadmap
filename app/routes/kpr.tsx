import { MetaDescriptor, redirect, useLoaderData } from '@remix-run/react';
import KPRForm from '~/components/KPRForm';
import KPRResult from '~/components/KPRResult';
import { getStoredKpr, KPRData, storeKPR } from '~/data/kpr';

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
    price: parseFloat(formData?.get('kpr-price')),
    dp: parseFloat(formData?.get('kpr-dp')),
    margin: parseFloat(formData?.get('kpr-margin')),
  };

  if (isNaN(kprData.price) || kprData.price < 100000000) {
    return { message: 'Harga tidak valid. Minimal Rp. 100 Juta' };
  }

  const existingKPR = (await getStoredKpr()) ?? [];
  const updatedKPR = existingKPR.concat(kprData);
  await storeKPR(updatedKPR);
  await new Promise((resolve, reject) => setTimeout(() => resolve(null), 2000))
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