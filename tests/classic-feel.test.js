const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');
const entrypoints = ['index.html', 'index-glass.html'];

for (const file of entrypoints) {
  test(`${file} no longer ships Classic Feel mode`, () => {
    const html = fs.readFileSync(path.join(repoRoot, file), 'utf8');

    assert.doesNotMatch(html, /classicFeelToggle/);
    assert.doesNotMatch(html, /Classic Feel/);
    assert.doesNotMatch(html, /dot-game-classic-feel/);
    assert.doesNotMatch(html, /classic-feel/);
  });
}
