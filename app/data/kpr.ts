import * as fs from 'fs/promises';
import { KPRInput } from './kprInput';

export const tenures = [5, 10, 15, 20, 25] as const;

export type KPRCalculation = {
  /** tenure in year */
  tenure: typeof tenures[number],
  sellPrice: number | string,
  margin: number | string,
  installmentDeferred: number,
  /** installment per month */
  installment: number | string,
};

export type KPRData = KPRInput & {
  id?: string,
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