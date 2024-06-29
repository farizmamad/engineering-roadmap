import * as fs from 'fs/promises';

export const tenures = [5, 10, 15, 20, 25] as const;

export type KPRCalculation = {
  /** tenure in year */
  tenure: typeof tenures[number],
  futurePrice: number,
  /** installment per month */
  installment: number,
};

export type KPRData = {
  id?: string,
  /** sell price */
  buyPrice: number,
  downPayment: number,
  /** margin per year */
  margin: number,
  /** One time payment notary fees */
  notaryFees?: number,
  /** One time payment catastrophic insurance */
  insuranceFees?: number,
  calculation: KPRCalculation[],
};
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