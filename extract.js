const fs = require('fs');

const data = fs.readFileSync('/home/yudh/.gemini/antigravity/brain/8645d734-ef24-4c12-bfd4-fc74f7e196d1/.system_generated/steps/4/content.md', 'utf8');

const regex = /"A":"([^"\\]*(?:\\.[^"\\]*)*)"/g;
let match;
const texts = new Set();
while ((match = regex.exec(data)) !== null) {
  const text = match[1].replace(/\\n/g, '').trim();
  if (text.length > 5 && !text.match(/^[a-zA-Z0-9_-]{10,}$/) && !text.startsWith('MAH') && !text.startsWith('TAG')) {
      texts.add(text);
  }
}

fs.writeFileSync('extracted_text.txt', Array.from(texts).join('\n'));
