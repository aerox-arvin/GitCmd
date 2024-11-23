const {test, expect} = require('@playwright/test');

// test('first test case', async function()
// {
// // Use await before every step so that it will wait until the step is executed

// // await Step1

// // if we use await in a function, we must put async befoore the function.


// });

test('Browser Fixture test', async ({browser})=>
    {
       const context = await browser.newContext();
       const page = await context.newPage();
       await page.goto("https://playwright.dev/docs/test-fixtures");
    });

test('Page test', async ({page})=>
        {
         await page.goto("https://playwright.dev/docs/intro");
         console.log(await page.title());
         //Assertion to validate the page title
         await expect(page).toHaveTitle("Installation | Playwright");
        });

//selectors
test.only('webelement selectors test', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyemy");
    await page.locator("#password").fill("learning");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='display']").textContent());
    await expect(await page.locator("[style*='display']")).toContainText("Incorrect");
});

// use only key word to run specific test

