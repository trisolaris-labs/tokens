import { join } from 'node:path';
import { renameSync, readdirSync } from 'node:fs';
import { getAddress } from '@ethersproject/address';

const ASSETS = './assets';
const excludedFiles = ["ethlogo.svg"]

const dirs = readdirSync(ASSETS)
  .filter((name) => !excludedFiles.includes(name))
  .filter((name) => name !== getAddress(name));

for (const name of dirs) {
  renameSync(join(ASSETS, name), join(ASSETS, getAddress(name)));
}
