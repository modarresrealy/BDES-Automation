import test from "@playwright/test";

test.setTimeout(120_000)

test('capture screenshot', async ({ page }) => {

   let array = [
    "https://threejs.org/",
    "https://threejs.org/manual/#en/installation",
    "https://threejs.org/manual/#en/webgl-compatibility-check"
]

for (const [index, url] of array.entries()) {

    await page.goto(url);
    await page.waitForLoadState();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.screenshot({ path: 'screenshots/threejs_'+index + "_" + page.viewportSize()?.width + '.png', fullPage: true });
    await page.setViewportSize({ width: 300, height: 800 });
    await page.screenshot({ path: 'screenshots/threejs_'+index + "_" + page.viewportSize()?.width + '.png', fullPage: true });

}

})

import fs from "fs";


test('capture text', async ({ page }) => {

   let array = [
    "https://www.ontariocolleges.ca/en/colleges/algonquin",
    "https://www.ontariocolleges.ca/en/colleges/boreal",
    "https://www.ontariocolleges.ca/en/colleges/cambrian",
    "https://www.ontariocolleges.ca/en/colleges/canadore",
    "https://www.ontariocolleges.ca/en/colleges/centennial",
    "https://www.ontariocolleges.ca/en/colleges/conestoga",
    "https://www.ontariocolleges.ca/en/colleges/confederation",
    "https://www.ontariocolleges.ca/en/colleges/durham",
    "https://www.ontariocolleges.ca/en/colleges/fanshawe",
    "https://www.ontariocolleges.ca/en/colleges/fleming",
    "https://www.ontariocolleges.ca/en/colleges/george-brown",
    "https://www.ontariocolleges.ca/en/colleges/georgian",
    "https://www.ontariocolleges.ca/en/colleges/humber",
    "https://www.ontariocolleges.ca/en/colleges/la-cite",
    "https://www.ontariocolleges.ca/en/colleges/lambton",
    "https://www.ontariocolleges.ca/en/colleges/loyalist",
    "https://www.ontariocolleges.ca/en/colleges/michener",
    "https://www.ontariocolleges.ca/en/colleges/mohawk",
    "https://www.ontariocolleges.ca/en/colleges/niagara",
    "https://www.ontariocolleges.ca/en/colleges/niagara-parks",
    "https://www.ontariocolleges.ca/en/colleges/northern",
    "https://www.ontariocolleges.ca/en/colleges/ridgetown",
    "https://www.ontariocolleges.ca/en/colleges/sault",
    "https://www.ontariocolleges.ca/en/colleges/seneca",
    "https://www.ontariocolleges.ca/en/colleges/sheridan",
    "https://www.ontariocolleges.ca/en/colleges/st-clair",
    "https://www.ontariocolleges.ca/en/colleges/st-lawrence",
];

    for (const url of array) {
        await page.goto(url, { timeout: 60000 });
        await page.waitForLoadState();
        const textContent = await page.locator('body').innerText();
        const fileName = url.split('/').pop() + '.txt';
        fs.writeFileSync('screenshots/' + fileName, textContent || '', 'utf8');
    }

});