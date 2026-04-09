import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcPath = path.join(__dirname, 'src');

const replacements = [
  { regex: /\bbg-white\b/g, replacement: 'bg-surface' },
  { regex: /\border-neutral-[12]00\b/g, replacement: 'border-border' },
  { regex: /\bborder-gray-[12]00\b/g, replacement: 'border-border' },
  { regex: /\btext-neutral-[89]00\b/g, replacement: 'text-text-main' },
  { regex: /\btext-gray-[89]00\b/g, replacement: 'text-text-main' },
  { regex: /\btext-neutral-[56]00\b/g, replacement: 'text-text-main/70' },
  { regex: /\btext-gray-[56]00\b/g, replacement: 'text-text-main/70' },
  { regex: /\bbg-neutral-50\/?[0-9]*\b/g, replacement: 'bg-background' },
  { regex: /\bbg-gray-50\b/g, replacement: 'bg-background' },
  { regex: /\bhover:bg-neutral-50\b/g, replacement: 'hover:bg-text-main/5' },
  
  // Specific pastel background fixes
  { regex: /\bbg-indigo-50\b/g, replacement: 'bg-indigo-500/10 text-indigo-500' },
  { regex: /\bbg-emerald-50\b/g, replacement: 'bg-emerald-500/10 text-emerald-500' },
  { regex: /\bbg-blue-50\b/g, replacement: 'bg-blue-500/10 text-blue-500' },
  { regex: /\bbg-amber-50\b/g, replacement: 'bg-amber-500/10 text-amber-500' },
  { regex: /\bbg-green-50\b/g, replacement: 'bg-green-500/10 text-green-500' },
  { regex: /\bbg-rose-50\b/g, replacement: 'bg-rose-500/10 text-rose-500' },
  { regex: /\bbg-yellow-50\b/g, replacement: 'bg-yellow-500/10 text-yellow-500' },
  
  // Metric cards gradient fixes (like from-violet-50/60 to-transparent)
  { regex: /from-violet-50\/[0-9]+/g, replacement: 'from-violet-500/10' },
  { regex: /from-blue-50\/[0-9]+/g, replacement: 'from-blue-500/10' },
  { regex: /from-emerald-50\/[0-9]+/g, replacement: 'from-emerald-500/10' },

  // Text color on those metrics if they had them (e.g. text-blue-600 -> text-blue-500)
  { regex: /\btext-green-600\b/g, replacement: 'text-green-500' },
  { regex: /\btext-amber-600\b/g, replacement: 'text-amber-500' },
  { regex: /\btext-blue-600\b/g, replacement: 'text-blue-500' },
];

function migrateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  for (const rule of replacements) {
    content = content.replace(rule.regex, rule.replacement);
  }

  // Adding overflow-hidden to metric cards
  // Find div elements with rounded-xl...shadow-sm and ensure they have overflow-hidden
  content = content.replace(/className="relative bg-surface p-[^"]+ rounded-xl sm:rounded-2xl border border-border shadow-sm([^"]*)"/g, (match, group1) => {
    if (!group1.includes('overflow-hidden')) {
      return `className="relative bg-surface p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-border shadow-sm overflow-hidden${group1}"`;
    }
    return match;
  });

  content = content.replace(/className="relative bg-surface p-[^"]+ rounded-xl border border-border shadow-sm([^"]*)"/g, (match, group1) => {
    if (!group1.includes('overflow-hidden')) {
      return `className="relative bg-surface p-4 sm:p-5 rounded-xl border border-border shadow-sm overflow-hidden${group1}"`;
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Migrated:', filePath);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      migrateFile(fullPath);
    }
  }
}

walk(srcPath);
console.log("Migration Complete");
