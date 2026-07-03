const fs = require('fs');

const data = fs.readFileSync('/home/yudh/.gemini/antigravity/brain/8645d734-ef24-4c12-bfd4-fc74f7e196d1/.system_generated/steps/60/content.md', 'utf8');

const urlRegex = /https?:\/\/[^\s"\\]+/g;
let match;
const urls = new Set();
while ((match = urlRegex.exec(data)) !== null) {
  if (match[0].includes('tiktok.com') || match[0].includes('youtube.com') || match[0].includes('instagram.com') || match[0].includes('vt.tiktok.com') || match[0].includes('my.canva.site')) {
    urls.add(match[0]);
  }
}

const textRegex = /"A":"([^"\\]*(?:\\.[^"\\]*)*)"/g;
const texts = new Set();
while ((match = textRegex.exec(data)) !== null) {
  const text = match[1].replace(/\\n/g, '').trim();
  if (text.length > 5 && !text.match(/^[a-zA-Z0-9_-]{10,}$/) && !text.startsWith('MAH') && !text.startsWith('TAG')) {
      texts.add(text);
  }
}

fs.writeFileSync('selasarasa_extract.txt', "URLS:\n" + Array.from(urls).join('\n') + "\n\nTEXTS:\n" + Array.from(texts).join('\n'));
