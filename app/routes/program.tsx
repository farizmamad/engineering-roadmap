import SearchProgram, { links as searchProgramLinks } from '~/components/SearchProgram';

export default function ProgramPage() {
  return (
    <main>
      <SearchProgram />
    </main>
  );
}

export function links() {
  return [...searchProgramLinks()];
}