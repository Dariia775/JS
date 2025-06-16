import { cookies } from "../support/pages/Cookies";
import { currency } from "../support/pages/Currency";
import { header } from "../support/pages/Header";
import { homePage } from "../support/pages/HomePage";
import { searchForm } from "../support/pages/SearchForm";
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
    searchForm.searchFormVisible();
    currency.currencyVisible();
    currency.checkCurrencySelector();
    currency.openCurrencyDropdown();
    currency.assertCurrencyListVisible();
    currency.assertContainsCurrency('PLN');
    currency.assertSelectedCurrency('PLN');
    
});
});