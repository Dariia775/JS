class Header {
    getLogo () {
        return cy.get ('[data-qa="logo-component"]');

    }
    logoVisible () {
        this.getLogo ().should ('be.visible');
    }
    assertLogoAttributes () {

        this.getLogo ()
            .should('have.attr', 'href', '/en');

    }
    getSupportLink () {
        return cy.get('a[href="/en/support"]'); 

    }
    checkSupportLink () {
        this.getSupportLink ()
            .should('be.visible')
            .and('contain.text','Support')
            .and('have.attr', 'href', '/en/support');
    }
    getLangSelector () {
        return cy.get ('[data-qa="lang-selector"]');

    }
    checkLangSelector () {
        this.getLangSelector ()
            .should('be.visible')
            .and('contain.text', 'English')

    }
    openLangDropdown () {
        this.checkLangSelector.click();
    }
    getLangList () {
        return cy.get('[data-qa="lang-selector-select-list"]');
    }
    assertLangListVisible () {
        this.getLangList ()
        .should('be.visible');
    }
    assertContainsLang (language) {
        this.getLangList()
            .contains('[data-qa="select-list-item"]', language)
            .should('be.visible');
    }
    assertSelectedLanguage (language) {
        this.getLangList()
            .contains('li.selected', language)
            .should('have.class', 'selected')


    }
    

}
const languages = ['Русский', 'Українська', 'Deutsch', 'Français', 'Türkçe'];
    languages.forEach(lang => header.assertContainsLanguage(lang));
export const header = new Header