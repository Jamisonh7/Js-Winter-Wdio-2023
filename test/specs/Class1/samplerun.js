const { describe, it } = require("mocha");

describe('Lauch Page', () => {
    it('Vrify we can lauch a page', async () => {

        await browser.url('https://www.nordstrom.com');
        await browser.pause(10000);
    })
})