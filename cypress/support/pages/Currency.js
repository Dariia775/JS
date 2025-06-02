class Currency {
    getCurrency () {
        return cy.get ('#link curr-selector');

    }
    currencyVisible () {
        this.getCurrency().should ('be.visible');
    }
    

    getCurrencySelector () {
        return cy.get ('[data-qa="base-modal"]');

    }
    checkCurrencySelector () {
        this.getCurrencySelector ()
            .should('be.visible')
            .and('contain.text', 'USD')

    }
    openCurrencyDropdown () {
        this.checkCurrencySelector.click();
    }
    getCurrencyList () {
        return cy.get('[data-qa="base-modal-content"]');
    }
    assertCurrencyListVisible () {
        this.getCurrencyList ()
        .should('be.visible');
    }
    assertContainsCurrency (currency) {
        this.getCurrencyList()
            .contains('[data-qa="currencyItem"]', currency)
            .should('be.visible');
    }
    assertSelectedCurrency (currency) {
        this.getCurrencyList()
            .contains('li.selected', currency)
            .should('have.class', 'selected')


    }

}
export const Currency = new Currency