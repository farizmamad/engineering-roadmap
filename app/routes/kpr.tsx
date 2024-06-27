import { json, redirect, useLoaderData } from '@remix-run/react';
import KPRForm from '~/components/KPRForm';
import KPRResult from '~/components/KPRResult';
import { getStoredKpr, KPRData, storeKPR } from '~/data/kpr';

export default function KPRPage() {
  const kpr = useLoaderData<typeof loader>();
  return (
    <main>
      <KPRForm />
      <KPRResult kpr={kpr} />
    </main>
  );
}

export async function loader() {
  const kpr = await getStoredKpr();
  return kpr;
}

export async function action({ request }: { request: any }) {
  const formData = await request?.formData();
  const kprData: KPRData = {
    id: new Date().toISOString(),
    price: formData?.get('kpr-price'),
    dp: formData?.get('kpr-dp'),
    margin: formData?.get('kpr-margin'),
  };
  const existingKPR = (await getStoredKpr()) ?? [];
  const updatedKPR = existingKPR.concat(kprData);
  await storeKPR(updatedKPR);
  return redirect('/kpr');
}