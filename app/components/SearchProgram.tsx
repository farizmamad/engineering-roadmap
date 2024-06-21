import styles from './SearchProgram.css';

export default function SearchProgram() {
  return (
    <form method="get" id="search-program-form">
      <p>
        <label htmlFor="program-name">Nama Program</label>
        <input type="text" id="program-name" name="program-name"/>
      </p>
      <div className="form-actions">
        <button>Cari</button>
      </div>
    </form>
  )
}

export function links() {
  return [
    { rel: 'stylesheet', ref: styles },
  ];
}