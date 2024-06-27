import { Form, useNavigation } from '@remix-run/react';
import './KPRForm.css';

export default function KPRForm() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Form method="post" id="kpr-form">
      <p>
        <label htmlFor="kpr-price">Harga Rumah (Rupiah)</label>
        <input type="number" id="kpr-price" name="kpr-price"/>
      </p>
      <p>
        <label htmlFor="kpr-dp">DP yang anda siapkan (Rupiah)</label>
        <input type="number" id="kpr-dp" name="kpr-dp"/>
      </p>
      <p>
        <label htmlFor="kpr-margin">Margin per tahun (%)</label>
        <input type="number" step="0.01" id="kpr-margin" name="kpr-margin"/>
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Sedang menghitung...' : 'Hitung'}
        </button>
      </div>
    </Form>
  )
}