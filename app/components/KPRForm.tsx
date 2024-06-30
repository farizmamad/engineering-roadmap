import { Form, useActionData, useNavigation } from '@remix-run/react';
import './KPRForm.css';

type ActionData = { message: string };

export default function KPRForm() {
  // hooks
  const navigation = useNavigation();
  const actionData = useActionData<ActionData>();

  // flags
  const isSubmitting = navigation.state === 'submitting';
  
  return (
    <Form method="post" id="kpr-form">
      {actionData?.message && <p>{actionData.message}</p>}
      <p>
        <label htmlFor="kpr-price">Harga Beli (Rupiah)</label>
        <input type="number" id="kpr-price" name="kpr-price"/>
      </p>
      <p>
        <label htmlFor="kpr-margin">Margin per tahun (%)</label>
        <input type="number" step="0.01" id="kpr-margin" name="kpr-margin"/>
      </p>
      <p>
        <label htmlFor="kpr-dp">Uang Muka (Rupiah)</label>
        <input type="number" id="kpr-dp" name="kpr-dp"/>
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Sedang menghitung...' : 'Hitung'}
        </button>
      </div>
    </Form>
  )
}