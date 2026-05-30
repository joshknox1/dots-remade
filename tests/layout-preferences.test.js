const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');
const entrypoints = ['index.html', 'index-glass.html'];

for (const file of entrypoints) {
  test(`${file} removes Classic Feel mode and persistence`, () => {
    const html = fs.readFileSync(path.join(repoRoot, file), 'utf8');

    assert.doesNotMatch(html, /classicFeelToggle/, 'Classic Feel checkbox should be removed');
    assert.doesNotMatch(html, /Classic Feel/, 'Classic Feel setting label should be removed');
    assert.doesNotMatch(html, /dot-game-classic-feel/, 'Classic Feel localStorage key should be removed');
    assert.doesNotMatch(html, /classic-feel/, 'classic-feel class hook should be removed');
  });

  test(`${file} uses one unified play card around stats and board`, () => {
    const html = fs.readFileSync(path.join(repoRoot, file), 'utf8');

    assert.match(html, /<section class="play-card">/, 'topbar and board should be wrapped by one play card');
    assert.match(html, /\.play-card\s*{[\s\S]*?width:\s*min\(98vw,\s*720px\)/, 'play card should use a wider screen footprint');
    assert.match(html, /\.topbar\s*{[\s\S]*?border:\s*0;/, 'topbar should not be its own bordered card');
    assert.match(html, /\.topbar\s*{[\s\S]*?box-shadow:\s*none;/, 'topbar should not cast its own shadow');
    assert.match(html, /\.board-wrap\s*{[\s\S]*?width:\s*100%;/, 'board should fill the unified card width');
    assert.match(html, /\.board-wrap\s*{[\s\S]*?max-width:\s*680px;/, 'board should be allowed to grow larger than before');
  });
}
