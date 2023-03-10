const { expect } = require("chai");

describe('Basic functions of WebDriverIO', () => {

it('To launch a webpage', async () => {
    
     await browser.url('https://facebook.com/');

     await browser.pause(10000);


})

it('To get page title', async () => {
/** 
 * 1) Launch facebook.com
 * 2) Get title of page
 * 3) Print the title in the console.
*/
// 1) Launch facebook.com
await browser.url('https://facebook.com/');

// 2) Get title of page
const pageTitle = await browser.getTitle();

// 3) Verify page title is equal to 'Facebook - log in or sign up'
expect(pageTitle, 'Page title is not as expected').to.equal('Facebook - log in or sign up')

})

it('To get the current Url', async () => {
    /**
     * 1) Launch facebook.com
     * 2) Get current Url
     * 3) verify url ends with '.com/'
     */

    // 1) Launch facebook.com
    await browser.url('https://facebook.com/');
    // 2) Get current Url
    const currentUrl = await browser.getUrl();
    // 3) verify url ends with '.com/'
    const result = currentUrl.endsWith('.com/');
    expect(result, "Url doesnt end with .com/").to.be.true;

})

it('To get the windowHandle with which browser is connect', async () => {
    /**
     * 1) Launch weather.com/
     * 2) Get the handle of the window
     * 3) Print the handle in the console
     */

    // 1) Launch weather.com
    await browser.url('https://weather.com/');

    await browser.pause(5000);

    // 2) Get the handle of the window
    const handle = await browser.getWindowHandle();

    // 3) Print handle in the console. 
    console.log(`Window handle -> ${handle}`);


})

it('Misc functions', async () => {

    /** 
     * 1) Launch facebook.com
     * 2) Go to amazon.com
     * 3) Go to weather.com
     * 4) Go back
     * 5) Go back
     * 6) Go to hotels.com
     * 7) Go back
     * 8) Go forward
     * 9) Refresh page 
     */

    // 1) Launch facebook.com
    await browser.url('https://facebook.com/');
    await browser.pause(2000);

    // 2) Go to amazon.com
    await browser.url('https://amazon.com/');
    await browser.pause(2000);

    // 3) Go to weather.com
    await browser.url('https://weather.com/');
    await browser.pause(2000);

    // 4) Go back
    await browser.back();
    await browser.pause(2000);

    // 5) Go back
    await browser.back();
    await browser.pause(2000);

    // 6) Go to hotels.com
    await browser.url('https://hotels.com/');
    await browser.pause(2000);

    // 7) Go back
    await browser.back();
    await browser.pause(2000);

    // 8) GO forward
    await browser.forward();
    await browser.pause(2000);

    // 9) Refresh page
    await browser.refresh();
    await browser.pause(2000);


})



})