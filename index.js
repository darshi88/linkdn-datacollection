const puppeteer = require("puppeteer");


(async () => {
    const browser = await puppeteer.launch({
        headless : false,

    });
    const page = await browser.newPage();
    await page.goto("https://in.linkedin.com/");
    await page.click('a[href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"]');
    await page.type("#username","darshidixit123@gmail.com");
    await page.type("#password","darshi07");
    await page.click('button[aria-label="Sign in"]');
    await page.waitForSelector('button[class*="search-button"]');
    await page.click('button[class*="search-button"]');
    await page.type(".search-global-typeahead__collapsed-search-button-icon.t-black--light","graphic designer");
    await page.keyboard.press('Enter');
    await page.waitForSelector('#search-reusables__filters-bar li:nth-child(2) button');

    await  page.click('#search-reusables__filters-bar li:nth-child(2) button');
    
    Array.from(document.querySelectorAll('.reusable-search__result-container')).map((e) => {
        return {
            "name": e.querySelector('.entity-result__title-text .app-aware-link [aria-hidden="true"]').innerText,
            "title": e.querySelector('.linked-area [class*="primary"]').innerText,
            "location": e.querySelector('.linked-area [class*="secondary"]').innerText,
            
        }
        console.log();
    });

    
   

   


    })();