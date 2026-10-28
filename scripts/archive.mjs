// ZIP sans dépendance : fichiers sources uniquement, encodage UTF-8, CRC32.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const excluded = new Set(['node_modules', 'dist', '.git', '.env', '.env.local', '.DS_Store']);
const entries = [];
async function walk(directory) {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    if (excluded.has(item.name) || item.name.endsWith('.zip') || item.name.startsWith('.env.')) continue;
    const path = join(directory, item.name);
    if (item.isDirectory()) await walk(path);
    else if (item.isFile()) entries.push({ name: `portfolio-react-vite/${relative(root, path).replaceAll('\\', '/')}`, data: await readFile(path) });
  }
}
function crc32(data) {
  let crc = 0xffffffff;
  for (const byte of data) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0);
  }
  return (crc ^ 0xffffffff) >>> 0;
}
await walk(root);
entries.sort((a, b) => a.name.localeCompare(b.name));
const localParts = [], centralParts = [];
let offset = 0;
for (const entry of entries) {
  const name = Buffer.from(entry.name, 'utf8');
  const crc = crc32(entry.data);
  const local = Buffer.alloc(30);
  local.writeUInt32LE(0x04034b50, 0);
  local.writeUInt16LE(20, 4);
  local.writeUInt16LE(0x800, 6);
  local.writeUInt16LE(33, 12); // 1 janvier 1980 : date ZIP déterministe.
  local.writeUInt32LE(crc, 14);
  local.writeUInt32LE(entry.data.length, 18);
  local.writeUInt32LE(entry.data.length, 22);
  local.writeUInt16LE(name.length, 26);
  localParts.push(local, name, entry.data);
  const central = Buffer.alloc(46);
  central.writeUInt32LE(0x02014b50, 0);
  central.writeUInt16LE(20, 4);
  central.writeUInt16LE(20, 6);
  central.writeUInt16LE(0x800, 8);
  central.writeUInt16LE(33, 14);
  central.writeUInt32LE(crc, 16);
  central.writeUInt32LE(entry.data.length, 20);
  central.writeUInt32LE(entry.data.length, 24);
  central.writeUInt16LE(name.length, 28);
  central.writeUInt32LE(offset, 42);
  centralParts.push(central, name);
  offset += local.length + name.length + entry.data.length;
}
const centralDirectory = Buffer.concat(centralParts);
const end = Buffer.alloc(22);
end.writeUInt32LE(0x06054b50, 0);
end.writeUInt16LE(entries.length, 8);
end.writeUInt16LE(entries.length, 10);
end.writeUInt32LE(centralDirectory.length, 12);
end.writeUInt32LE(offset, 16);
const output = join(root, 'portfolio-react-vite.zip');
await writeFile(output, Buffer.concat([...localParts, centralDirectory, end]));
console.log(`Archive créée : ${output} (${entries.length} fichiers)`);
