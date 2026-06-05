function bypassWebDriverCheck(page) {
    // Injecting navigator.webdriver override
    return page.evaluateOnNewDocument(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    });
}
module.exports = { bypassWebDriverCheck };