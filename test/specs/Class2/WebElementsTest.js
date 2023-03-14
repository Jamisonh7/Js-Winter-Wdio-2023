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

    it.only('Locator strategy: Using other attribute instead of id-attribute', async () => {
        /**
         * 1) Lauch Facebook
         * 2) Type (abcd@gmail.com) in the email or phone number field/element
         * 3) Type (abcd@1234) in the password field/element
         */

        // 1) Lauch fb
        await browser.url('https://www.facebook.com/');
        
        // 2) Type (abcd@gmail.com) in the email or phone number field/element
        const loginEmailElement = $('input[name=email]');
        // $(findElement) has to find a webElement where tagName=input which has attr(name) with value(email)
        await loginEmailElement.setValue('abcd@gmail.com');

        // 3) Type (abcd@1234) in the password field/element 
        ////input[@data-testid="royal_pass"]
        const loginPasswordElement = await $('input[@data-testid="royal_pass]');
         // $(findElement) has to find a webElement where id-attribute = 'pass'
         loginPasswordElement.setValue('abcd@1234');

         await browser.pause(10000)
    })
})