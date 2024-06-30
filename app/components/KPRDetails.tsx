import { DataGrid } from "@mui/x-data-grid";
import { KPRData } from "~/data/kpr";
import './KPRDetails.css';

export default function KPRDetails({ data }: { data: KPRData }) {
  const columns = [
    {field: 'tenure', headerName: 'Tenor', flex: 1},
    {field: 'sellPrice', headerName: 'Harga Jual (Rp)', flex: 2},
    {field: 'margin', headerName: 'Margin (Rp)', flex: 2},
    {field: 'installmentDeferred', headerName: 'Angsuran Ditangguhkan (Rp)', flex: 2},
    {field: 'installment', headerName: 'Cicilan per bulan (Rp)', flex: 2},
  ];

  const rows = data.calculation.map((kprData, index) => {
    return {
      id: index,
      tenure: kprData.tenure,
      sellPrice: kprData.sellPrice.toLocaleString(),
      margin: kprData.margin.toLocaleString(),
      installmentDeferred: kprData.installmentDeferred.toLocaleString(),
      installment: kprData.installment.toLocaleString(),
    };
  });


  return <main id='kpr-details'>
    <h1>Dasar Perhitungan Cicilan</h1>
    <p id='kpr-details-content'>Harga Beli ke Developer: Rp{data.buyPrice.toLocaleString()}</p>
    <p id='kpr-details-content'>Uang Muka: Rp{data.downPayment.toLocaleString()}</p>

    <h1>Biaya adminisitrasi</h1>
    <p id='kpr-details-content'>Biaya Notaris: Rp{data.notaryFees?.toLocaleString() ?? '?'}</p>
    <p id='kpr-details-content'>Asuransi: Rp{data.insuranceFees?.toLocaleString() ?? '-'}</p>

    <section id="DataGrid" style={{ height: 350, width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
      <DataGrid rows={rows} columns={columns} sx={{backgroundColor: "#caffca"}} hideFooter={true}/>
    </section>
  </main>
}