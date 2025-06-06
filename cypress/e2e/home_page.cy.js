import { cookies } from "../support/pages/Cookies";
import { header } from "../support/pages/Header";
import { homePage } from "../support/pages/HomePage";
describe('Open website', () => {
    it('Should open website and verify Url', () => {
    homePage.visit();
    homePage.maximizeWindow();
    homePage.verifyUrl();
    cookies.cookiesBlockVisible({ timeout: 6000 });
    cookies.assertCookiesButtonAllowAll();
    header.logoVisible();
    header.assertLogoAttributes();
    header.checkSupportLink();
    header.checkLangSelector();
    header.openLangDropdown();
    header.assertLangListVisible('English');
    const languages = ['Deutsch', 'Français'];
    languages.forEach(lang => header.assertContainsLang(lang));
    
});
});