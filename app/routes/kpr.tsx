import { redirect } from '@remix-run/react';
import KPRForm from '~/components/KPRForm';
import { getStoredKpr, KPRData, storeKPR } from '~/data/kpr';

export default function KPRPage() {
  return (
    <main>
      <KPRForm />
    </main>
  );
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