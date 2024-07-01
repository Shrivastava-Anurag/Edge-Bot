const puppeteer = require('puppeteer-core');
const puppeteerExtra = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteerExtra.use(StealthPlugin());

(async () => {
    // Specify the path to your Edge browser executable
    const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'; // Adjust this path as necessary

    // Launch the browser
    const browser = await puppeteer.launch({
        executablePath: edgePath,
        headless: false, // Set to false so you can see the browser window
        // args: ['--user-data-dir=C:\\Users\\anura\\AppData\\Local\\Microsoft\\Edge\\User Data\\'],
        userDataDir:"C:\\Users\\anura\\AppData\\Local\\Microsoft\\Edge\\User Data\\", // Adjust this path as necessary
        
        // args: [
        //     '--profile-directory=Profile 1' //Select your profle here
        // ]
    });

    // Open a new page
    const page_to = await browser.pages();
    console.log("pages are")
    console.log(page_to)
    const page = pages[0];
    // const page = await browser.newPage();


    // Navigate to a search engine
    await page.goto('https://www.bing.com');

    // Perform a search
    const searchQuery = 'One Piece Anime';
    await page.type('textarea[name="q"]', searchQuery);
    await page.keyboard.press('Enter');

    // Wait for results to load
    await page.waitForNavigation();

    // Do something with the results, e.g., log the titles
    const titles = await page.$$eval('h2', elements => elements.map(el => el.textContent));
    console.log(titles);

    // Close the browser
    // await browser.close();
})();
