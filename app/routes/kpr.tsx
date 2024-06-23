import KPRForm, { links as kprFormLinks } from '~/components/KPRForm';

export default function KPRPage() {
  return (
    <main>
      <KPRForm />
    </main>
  );
}

export function links() {
  return [...kprFormLinks()];
}