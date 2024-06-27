import * as fs from 'fs/promises';

export type KPRData = { id?: string, price: number, dp: number, margin: number };
export type KPR = { kpr: KPRData[] };

const databaseUrl = 'app/data/kpr.json'

export async function getStoredKpr() {
  const rawFileContent = await fs.readFile(databaseUrl, { encoding: 'utf-8'});
  const data: KPR = JSON.parse(rawFileContent);
  const storedKPR = data.kpr ?? [];
  return storedKPR;
}

export function storeKPR(kprData: KPRData[]) {
  return fs.writeFile(databaseUrl, JSON.stringify({ kpr: kprData || [] }));
}