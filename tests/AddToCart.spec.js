import { test } from "@playwright/test";
import { loginPOM } from "../POM/loginPOM";

// test('Valid Login to the website', async ({page})=>
//     {
//         await page.goto("https://rahulshettyacademy.com/client");
//         await page.getByPlaceholder("email@example.com").fill("arnold@gmail.com");
//         await page.getByPlaceholder("enter your passsword").fill("ArnoldPlay#31");
//         await page.locator("#login").click();
//     });

// Create object for loginPOM class

test('check valid login', async ({page})=>{

    const loginpageObj=new loginPOM(page);

    await loginpageObj.goToWebsite();
    await loginpageObj.login("arnold@gmail.com", "ArnoldPlay#31");
    const titles = await loginpageObj.fetchProductTitles();
    console.log(titles);
});