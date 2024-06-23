import './KPRForm.css';

export default function KPRForm() {
  return (
    <form method="post" id="kpr-form">
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
        <button>Simulasikan</button>
      </div>
    </form>
  )
}