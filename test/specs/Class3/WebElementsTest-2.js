const { expect } = require("chai");

describe('basic locator strategies', () => {
    
    it('Locator strategy: Using id-value', async () => {
        /**
         * 1) Lauch Facebook
         * 2) Type (abcd@gmail.com) in the email or phone number field/element
         * 3) Type (abcd@1234) in the password field/element
         */

        // 1) Lauch fb
        await browser.url('https://www.facebook.com/');
        
        // 2) Type (abcd@gmail.com) in the email or phone number field/element
        const loginEmailElement = await $('#email');
        // $(findElement) has to find a webElement where id-attribute = 'email'
        await loginEmailElement.setValue('abcd@gmail.com');

        // 3) Type (abcd@1234) in the password field/element 
        const loginPasswordElement = await $('#pass');
         // $(findElement) has to find a webElement where id-attribute = 'pass'
         loginPasswordElement.setValue('abcd@1234');

         await browser.pause(10000)
    })

    it('Locator strategy: Using other attribute instead of id-attribute', async () => {
        /**
         * 1) Lauch Facebook
         * 2) Type (abcd@gmail.com) in the email or phone number field/element
         * 3) Type (abcd@1234) in the password field/element
         * 4) Click the Login button
         */

        // 1) Lauch fb
        await browser.url('https://www.facebook.com/');
        
        // 2) Type (abcd@gmail.com) in the email or phone number field/element
        const loginEmailElement = await $('input[name=email]');
        // $(findElement) has to find a webElement where tagName=input which has attr(name) with value(email)
        await loginEmailElement.setValue('abcd@gmail.com');

        // 3) Type (abcd@1234) in the password field/element 
        ////input[@data-testid="royal_pass"]
        const loginPasswordElement = await $('input[data-testid=royal_pass]');
         // $(findElement) has to find a webElement where tageName=input which has attr(data-testid) with value (royal_pass)
        await loginPasswordElement.setValue('abcd@1234');

        // 4) Click the Log-In button
        const logInBtn = $('button=Log In');
        await logInBtn.click();

        await browser.pause(10000)
    })

    it('Using partial attribute Value and text value', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Click on Create New Account
         * 3. Enter 'Jamison' as Firstname
         * 4. Enter 'Tart' as Lastname
         * 5. Click SignUp button
         */

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        await browser.pause(2000);

        // 2. Click on Create New Account
        // //a[contains(text(), 'ccoun')]
        const createAccountBtn = $('a*=ccoun');
        createAccountBtn.click();

        await browser.pause(2000);

        // 3. Enter 'Jamison' as Firstname
        //input[contains(@name, 'first')]
        const firstNameInput = await $('input[name*=first]');
        await firstNameInput.setValue('Jamison');

        await browser.pause(2000);

        // 4. Enter Tart as Last Name
        //input[contains(@aria-label, 'Last')]
        const lastNameInput = await $('input[aria-label*=Last]');
        await lastNameInput.setValue('Tart');

        await browser.pause(2000);

        // 5. Click SignUp button
        //button[contains(@name, 'ubmi')]
        const signUpBtn = $('button[name*=ubmi]');
        signUpBtn.click();

        await browser.pause(15000)
    })

    it('Using link text and partial link text', async () => {
        /**
         * 1) Lauch facebook.com
         * 2) Click on Messenger
         * 3) Clink on "forgot your password?"
         */
        // 1) Lauch facebook.com
        await browser.url('https://www.facebook.com/')

        await browser.pause(2000)

        // 2) Click on Messenger
        // //a[text()='Messenger']
        const messengerLink = await $('=Messenger');
        messengerLink.click();

        await browser.pause(2000);

        // 3) Clink on "forgot your password?"
        // //a[contains(text(), 'Forgot')]
        
        const fypLink = await $('*=Forgot');
        await fypLink.click();

        await browser.pause(10000)



    })

    it('Locator strategy: Using tagName', async () => {
        /**
         * 1) Lauch Facebook
         * 2) Type (abcd@gmail.com) in the email or phone number field/element
         * 3) Type (abcd@1234) in the password field/element
         * 4) Click the Login button
         */

        // 1) Lauch fb
        await browser.url('https://www.facebook.com/');

        await browser.pause(5000);
        
        // 2) Type (abcd@gmail.com) in the email or phone number field/element
        const loginEmailElement = await $('input[name=email]');
        // $(findElement) has to find a webElement where tagName=input which has attr(name) with value(email)
        await loginEmailElement.setValue('abcd@gmail.com');

        await browser.pause(2000);

        // 3) Type (abcd@1234) in the password field/element 
        ////input[@data-testid="royal_pass"]
        const loginPasswordElement = await $('input[data-testid=royal_pass]');
         // $(findElement) has to find a webElement where tageName=input which has attr(data-testid) with value (royal_pass)
        await loginPasswordElement.setValue('abcd@1234');

        await browser.pause(2000);

        // 4) Click the Log-In button
        const logInBtn = $('<button>');
        await logInBtn.click();

        await browser.pause(10000)
    })

    // Verify login fields and button are enabled when user lands on facebook.com
    it('Verify login fields and button are enabled when user lands on facebook.com', async () => {
        // Verify login fields and button are enabled when user lands on facebook.com
        /**
         * 1. Launch facebook.com
         * 2. Verify login email is enabled
         * 3. Verify loginPassword is enabled
         * 4. Verify login button is enabled
         *  */ 
        // 1. Launch facebook.com
        await browser.url('https://facebook.com/');

        // 2. Verify login email is enabled
        const loginEmail = await $('#email');
        const isLoginEmailEnabled = await loginEmail.isEnabled();
        expect(isLoginEmailEnabled, 'Login email is NOT enabled').to.be.true;

        // 3. Verify loginPassword is enabled
        // //input[@aria-label="Password"]
        const loginPassword = await $('input[aria-label=Password]')
        const isLoginPasswordEnabled = await loginPassword.isEnabled();
        expect(isLoginPasswordEnabled, 'Login password is NOT enabled').to.be.true;

        // 4. Verify login button is enabled
        // //button[contains(text(), 'og')]
        const logInBtn = await $('button*=og');
        const isLogInBtnEnabled = await logInBtn.isEnabled();
        expect(isLogInBtnEnabled, 'Login button is NOT enabled').to.be.true;
    })

    // Verify no gender is selected on sign up
    /**
         * 1) Launch facebook.com
         * 2) Click on Create new account button
         * 3) Verify female radio button is not selected 
         * 4) Verify male radio button is not selected
         * 5) Verify custom radio button is not selected
         */
    it('Verify no gender is selected on sign up', async () => {
        // 1) Launch facebook.com
        await browser.url('https://www.facebook.com/');
        await browser.pause(2000);

        // 2) Click on Create new account button
        // //a[contains(text(), 'ccoun')]
        const createAccountBtn = $('a*=ccoun');
        createAccountBtn.click();

        await browser.pause(2000)

        await browser.pause(2000);

        // 3) Verify female radio button is not selected 
        // //input[@value="1"]
        const femaleRadioBtn = await $('input[value="1"]')
        const isFemaleRadioBtnSelected = await femaleRadioBtn.isSelected();
        expect(isFemaleRadioBtnSelected, 'Female radio button is selected').to.be.false;

        // 4. Verify male radio button is not selected
        const maleRadioBtn = await $('input[value="2"]')
        const isMaleRadioBtnSelected = await maleRadioBtn.isSelected();
        expect(isMaleRadioBtnSelected, 'Male radio button is selected').to.be.false;


        // 5) Verify custom radio button is not selected
        const customRadioBtn = await $('input[value="-1"]')
        const isCustomRadioBtnSelected = await customRadioBtn.isSelected();
        expect(isCustomRadioBtnSelected, 'Custom radio button is selected').to.be.false;

    });

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
        const forgotPasswordLink = await $('*=word');
        await forgotPasswordLink.click();

        await browser.pause(2000);

         // 3) Verify user lands on forgot your password page
        // //h2[@class="uiHeaderTitle"]
       
        // if "Find your account" heading is displayed means we are on Forgot your password page
        const pageHeading = await $('h2[class=uiHeaderTitle]')
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

       
    })



})