import { json, MetaDescriptor, useActionData } from '@remix-run/react';
import KPRDetails from '~/components/KPRDetails';
import KPRForm from '~/components/KPRForm';
import { KPRData, tenures } from '~/data/kpr';
import { KPRInput } from '~/data/kprInput';

export default function KPRPage() {
  // hooks
  const actionData = useActionData<KPRData>();

  return (
    <main>
      <h1>Simulasi KPR</h1>
      <KPRForm />
      {actionData && <KPRDetails data={actionData}/>}
    </main>
  );
}

// reserved functions
export async function action({ request }: { request: any }) {
  const formData = await request?.formData();
  const input: KPRInput = {
    buyPrice: parseFloat(formData?.get('kpr-price')),
    margin: parseFloat(formData?.get('kpr-margin')),
    downPayment: parseFloat(formData?.get('kpr-dp')),
  };

  
  const kprData: KPRData = {
    ...input,
    id: new Date().toISOString(),
    // simulate to 1% of sell price
    notaryFees: Math.round(input.buyPrice * (1 / 100)),
    // simulate to 1% of sell price
    insuranceFees: Math.round(input.buyPrice * (1 / 100)),
    calculation: [],
  };
  
  
  for (const tenure of tenures) {
    const sellPrice = Math.round((kprData.buyPrice) * Math.pow((1 + (kprData.margin / 100)), tenure));
    const margin = sellPrice - input.buyPrice;
    const installmentDeferred = sellPrice - input.downPayment;
    const installment = Math.round(sellPrice / (tenure * 12));

    kprData.calculation.push({
      tenure,
      sellPrice,
      margin,
      installmentDeferred,
      installment,
    });
  }

  if (isNaN(kprData.buyPrice) || kprData.buyPrice < 10000000) {
    return { message: 'Harga tidak valid. Minimal Rp. 10 Juta' };
  }

  return json(kprData);
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