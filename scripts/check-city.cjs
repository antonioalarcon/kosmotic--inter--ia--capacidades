const assert = require('node:assert/strict');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const url = pathToFileURL(path.resolve('web/city/index.html')).href;
    await page.goto(url);
    for (const width of [320, 390, 1280]) {
      await page.setViewportSize({ width, height: 900 });
      assert.equal(await page.locator('.inventory-list > li').count(), 24);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'horizontal overflow at ' + width);
    }
    const missing = await page.locator('a[href^="#"]').evaluateAll(links => links.map(a => a.getAttribute('href').slice(1)).filter(id => id && !document.getElementById(id)));
    assert.deepEqual(missing, [], 'all public anchors need rendered targets');
    const ids = await page.locator('[id]').evaluateAll(elements => elements.map(e => e.id));
    assert.equal(new Set(ids).size, ids.length, 'IDs must be unique');
    const skip = page.locator('a.skip-link');
    assert.equal(await skip.count(), 1, 'skip link present');
    assert.equal(await skip.getAttribute('href'), '#contenido', 'skip link targets the main content');
    assert.equal(await page.locator('main#contenido[tabindex="-1"]').count(), 1, 'main is a focusable skip target');
    assert.equal(await skip.evaluate(el => el.getBoundingClientRect().x < 0), true, 'skip link hidden until focused');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.classList.contains('skip-link')), true, 'skip link is the first tab stop');
    const skipBox = await skip.boundingBox();
    assert.ok(skipBox && skipBox.x >= 0 && skipBox.width > 0, 'skip link visible when focused');
    await page.keyboard.press('Enter');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'contenido', 'focus lands on the main content');
    await page.getByRole('searchbox', { name: 'Buscar entre las 24 referencias' }).fill('Claude');
    assert.equal(await page.locator('.inventory-list > li:not([hidden])').count(), 1);
    await page.locator('#meta-inv-query').fill('Llama');
    const llama = page.locator('.inventory-list > li:not([hidden])');
    assert.equal(await llama.count(), 1);
    assert.match(await llama.first().innerText(), /^22\b/, 'canonical numbering must survive filtering (Llama is reference 22)');
    await page.locator('#meta-inv-query').fill('mícrosoft');
    assert.equal(await page.locator('.inventory-list > li:not([hidden])').count(), 1, 'accent insensitive search');
    await page.getByRole('button', { name: 'Limpiar', exact: true }).click();
    assert.equal(await page.locator('.inventory-list > li:not([hidden])').count(), 24);
    assert.equal(await page.locator('#meta-inv-query').evaluate(el => el === document.activeElement), true);
    assert.equal(await page.locator('#meta-inv-count').getAttribute('role'), 'status');
    const bodyText = await page.evaluate(() => document.body.innerText);
    for (const estado of ['Disponible', 'En investigación o experimentación', 'En preparación', '🚧 En obras']) {
      assert.ok(bodyText.includes(estado), 'exact state label present: ' + estado);
    }
    assert.ok(!bodyText.includes('👷'), 'obsolete construction marker removed in favour of exact states');
    for (const anchor of ['principios', 'retos', 'auti-f001', 'biblioteca-city']) {
      assert.equal(await page.locator('#' + anchor).count(), 1, 'section present: #' + anchor);
    }
    await page.setViewportSize({ width: 640, height: 900 });
    await page.addStyleTag({ content: 'body { font-size: 200% !important; }' });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, '200 percent text reflow');
    assert.deepEqual(errors, [], 'no JavaScript runtime errors');
    const noJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 320, height: 900 } });
    const fallback = await noJS.newPage();
    await fallback.goto(url);
    assert.equal(await fallback.locator('.inventory-list > li').count(), 24);
    assert.equal(await fallback.locator('.inventory-list > li[hidden]').count(), 0);
    assert.equal(await fallback.locator('.inventory-list .ref-num').count(), 24, 'explicit canonical numbers render without JS');
    await noJS.close();
    console.log('PASS: 24 entries, canonical numbering on filter, exact states, skip link, search, reset/focus, anchors, IDs, responsive layout, text reflow and no-JS fallback');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error.message); process.exit(1); });
