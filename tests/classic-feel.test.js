const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');
const entrypoints = ['index.html', 'index-glass.html'];

for (const file of entrypoints) {
  test(`${file} exposes a persisted Classic Feel setting`, () => {
    const html = fs.readFileSync(path.join(repoRoot, file), 'utf8');

    assert.match(html, /id="classicFeelToggle"/, 'settings modal should include a Classic Feel checkbox');
    assert.match(html, /Classic Feel/, 'settings modal should label the option Classic Feel');
    assert.match(html, /dot-game-classic-feel/, 'Classic Feel preference should persist to localStorage');
    assert.match(html, /classic-feel/, 'body should get a classic-feel class hook');
  });

  test(`${file} defines classic visual overrides`, () => {
    const html = fs.readFileSync(path.join(repoRoot, file), 'utf8');

    assert.match(html, /body\.classic-feel\s+\.topbar/, 'classic mode should flatten/simplify topbar chrome');
    assert.match(html, /body\.classic-feel\s+\.board-wrap/, 'classic mode should flatten/simplify board chrome');
    assert.match(html, /body\.classic-feel\s+\.hint/, 'classic mode should de-emphasize or hide hint text');
    assert.match(html, /body\.classic-feel\s+\.power-btn/, 'classic mode should simplify power buttons');
  });
}
