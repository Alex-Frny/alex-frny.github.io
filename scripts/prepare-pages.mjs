import { cp, mkdir, realpath, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = await realpath(dirname(dirname(fileURLToPath(import.meta.url))));
const output = resolve(root, 'docs');
if (dirname(output) !== root || output !== join(root, 'docs')) throw new Error('Chemin de sortie invalide');
try {
  const existing = await realpath(output);
  if (existing !== output) throw new Error('Le dossier docs ne doit pas être un lien');
} catch (error) { if (error.code !== 'ENOENT') throw error; }
await rm(output, { recursive: true, force: true });
await mkdir(output);
await cp(join(root, 'dist'), output, { recursive: true });
await writeFile(join(output, '.nojekyll'), '');
console.log('Version GitHub Pages prête dans docs/');
