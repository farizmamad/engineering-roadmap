import KPRForm from '~/components/KPRForm';

export default function KPRPage() {
  return (
    <main>
      <KPRForm />
    </main>
  );
}

export function action() {
  console.log('kpr action');
  return null;
}