#!/usr/bin/env node
// Builds trust-services-criteria/...controls.csv from ...controls.json so the two
// always hold exactly the same content: one row per point of focus.
//
//   node tools/build-controls-csv.mjs          write the CSV
//   node tools/build-controls-csv.mjs --check  exit 1 if the CSV is out of date
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'trust-services-criteria');
const base = '2017-trust-services-criteria-with-revised-points-of-focus-2022.controls';
const jsonPath = join(dir, `${base}.json`);
const csvPath = join(dir, `${base}.csv`);

const header = ['section', 'criterion_id', 'criterion', 'pof_id', 'pof_title', 'pof_requirement'];
const cell = (v) => (/[",\r\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);

const tsc = JSON.parse(readFileSync(jsonPath, 'utf8')).trustServicesCriteria;
const sections = [];
for (const [key, value] of Object.entries(tsc)) {
  if (Array.isArray(value)) sections.push([key, value]);
  else for (const [sub, list] of Object.entries(value)) sections.push([`${key}.${sub}`, list]);
}

const rows = [header];
for (const [section, criteria] of sections) {
  for (const c of criteria) {
    for (const p of c.pof) rows.push([section, c.id, c.principle, p.id, p.title, p.requirement]);
  }
}
const csv = rows.map((r) => r.map(cell).join(',')).join('\n') + '\n';

if (process.argv.includes('--check')) {
  let current = '';
  try { current = readFileSync(csvPath, 'utf8'); } catch { /* missing file counts as out of date */ }
  if (current !== csv) {
    console.error(`${base}.csv does not match ${base}.json; run: npm run build:csv`);
    process.exit(1);
  }
  console.log(`CSV matches JSON (${rows.length - 1} points of focus).`);
} else {
  writeFileSync(csvPath, csv);
  console.log(`Wrote ${base}.csv (${rows.length - 1} points of focus).`);
}
