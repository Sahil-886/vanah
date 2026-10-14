const puppeteer = require('puppeteer-core');
const path = require('path');

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const artifactDir = '/Users/sahildevendramakhamale/.gemini/antigravity-ide/brain/1b78c536-1d41-49c9-adfc-1e5ef67b92e9';

async function main() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars'],
  });

  const page = await browser.newPage();

  // 1. Desktop 1440px
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500)); // allow line-art animation to complete

  await page.screenshot({
    path: path.join(artifactDir, 'phase1-desktop-1440.png'),
    fullPage: false,
  });
  console.log('Saved phase1-desktop-1440.png');

  // Check desktop full page
  await page.screenshot({
    path: path.join(artifactDir, 'phase1-desktop-full.png'),
    fullPage: true,
  });
  console.log('Saved phase1-desktop-full.png');

  // 2. Mobile 390px (iPhone 14 style)
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));

  // Inspect for any overflow elements
  const overflowInfo = await page.evaluate(() => {
    const docWidth = document.documentElement.offsetWidth;
    const scrollWidth = document.documentElement.scrollWidth;
    const bodyScrollWidth = document.body.scrollWidth;
    const overflowingElements = [];
    
    document.querySelectorAll('*').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.right > docWidth + 2) {
        overflowingElements.push({
          tag: el.tagName,
          id: el.id,
          className: el.className,
          right: rect.right,
          width: rect.width,
        });
      }
    });

    return { docWidth, scrollWidth, bodyScrollWidth, overflowingElements: overflowingElements.slice(0, 10) };
  });

  console.log('Mobile layout diagnostics:', JSON.stringify(overflowInfo, null, 2));

  await page.screenshot({
    path: path.join(artifactDir, 'phase1-mobile-390.png'),
    fullPage: false,
  });
  console.log('Saved phase1-mobile-390.png');

  await page.screenshot({
    path: path.join(artifactDir, 'phase1-mobile-full.png'),
    fullPage: true,
  });
  console.log('Saved phase1-mobile-full.png');

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
