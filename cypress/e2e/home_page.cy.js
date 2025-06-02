import { header } from "../support/pages/Header";
import { homePage } from "../support/pages/HomePage";
describe('Open website', () => {
    it('Should open website and verify Url', () => {
    homePage.visit();
    homePage.verifyUrl();
    header.logoVisible();
    header.assertLogoAttributes();
    header.checkSupportLink();
    header.checkLangSelector();
    header.openLangDropdown();
    header.assertLangListVisible('English');
    const languages = ['Русский', 'Українська', 'Deutsch', 'Français', 'Türkçe'];
    languages.forEach(lang => header.assertContainsLang(lang));
    
});
});