const { expect } = require("chai");

describe('Simple xpath locator strategies', () => {
    
 // Verify user lands on forgot your password page after clicking the link
    /**
     * 1) Launch facebook.com
     * 2) CLick "forgot password"
     * 3) Verify user lands on forgot your password page
     */

    it('Verify user lands on forgot your password page after clicking the link', async () => {
        // 1. Launch facebook.com
        await browser.url("https://www.facebook.com/");

        await browser.pause(2000);


        // 2. Click "forgot password"
        // //a[contains(text(), 'pass')]
        const forgotPasswordLink = await $('//a[text()="Forgot password?"]');
        await forgotPasswordLink.click();

        await browser.pause(2000);

         // 3) Verify user lands on forgot your password page
        // //h2[@class="uiHeaderTitle"]
       
        // if "Find your account" heading is displayed means we are on Forgot your password page
        const pageHeading = await $('//h2[@class="uiHeaderTitle"]')
        const isHeadingDisplayed = await pageHeading.isDisplayed();
        expect(isHeadingDisplayed, 'Heading: We are not on Forgot password page').to.be.true;

        // if Url contains "www.facebook.com/login/identify/" means we are on Forgot your password page
        const currentUrl = await browser.getUrl();
        const isUrlContain = currentUrl.includes('www.facebook.com/login/identify/');
        expect(isUrlContain, 'Url: We are not on Forgot password page').to.be.true;

        // if pageTitle starts with "Forgot password" means we are on Forgot your password page
        const pageTitle = await browser.getTitle();
        const isTitleStartsWith = pageTitle.startsWith('Forgot password');
        expect(isTitleStartsWith, 'TItle: We are not on forgot password page').to.be.true;

       
    });

    // Verify the empty login fields
    /**
     * 1. Launch facebook.com
     * 2. Verify empty login email says "Email or phone number"
     * 3. Verify empty login password says "Password"
     * 4. Verify login button says "Login"
     */
    it('Verify the empty login fields', async () => {
        // 1. Launch facebook.com
        await browser.url('https://facebook.com/');

        // 2. Verify empty login email says "Email or phone number"
        // //input[contains(@data-testid, "yal_e")]
        

    })


})