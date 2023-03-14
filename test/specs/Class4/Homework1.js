/**
 * TC.1) Verify the current temperature is less than or eqaual to feels like temp.
 * 
 */
// 1. Lauch accuweather.com
// 2. Verify current-temp is in between 45 and 55
describe('Weather Test Cases', () => {
    // 1. Lauch accuweather.com
    it.only('Between 45 and 55', async () => {
        await browser.url('https://www.accuweather.com/')
   
    // 2. Verify current-temp is in between 45 and 55
        const currentTempElement = await $('//span[@class="recent-location-temp"]');
        let currentTempText = await currentTempElement.getText();
        currentTempText = currentTempText.trim();
        let currentTemp = currentTempText.substring(0, currentTempText.length - 1)
        currentTemp = Number(currentTemp);

        let finalTemp = currentTemp >45 && currentTemp <55

        expect(finalTemp, 'Current temp is not between 45 and 55').to.be.true;


    })
})