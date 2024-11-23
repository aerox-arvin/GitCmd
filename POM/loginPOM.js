class   loginPOM{

    constructor(page)
    {
        this.page = page;
        this.emailField=page.getByPlaceholder("email@example.com");
        this.passwordField=page.getByPlaceholder("enter your passsword");
        this.Loginbutton=page.locator("#login");
        this.productTitles=page.locator(".card-body b");
    }

    async goToWebsite()
    {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async login(email,password)
    {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.Loginbutton.click();
    }

    async fetchProductTitles()
    {
      //  await page.waitForLoadState('networkidle');  //this is the explicit wait for allTextContents(). 
      //  This is falkey so we are considering waitFor()
        await this.productTitles.first().waitFor();
        return await this.productTitles.allTextContents();
    }
}

module.exports={loginPOM};