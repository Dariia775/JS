class Currency {

    getCurrencySelector() {

        return cy.get(':nth-child(3) > .link > span');  

    }

    checkCurrencySelector() {

        this.getCurrencySelector()

            .should('be.visible')

            .and('contain.text', 'PLN');

    }

 
    //currencyVisible() {

        //this.getCurrency().should('be.visible');

   // }
 
    
 
    
 
    openCurrencyDropdown() {

        this.getCurrencySelector().click();

    }
 
    getCurrencyList() {

        return cy.get('[data-qa="base-modal-content"]');

    }
 
    assertCurrencyListVisible() {

        this.getCurrencyList().should('be.visible');

    }
 
    assertContainsCurrency(currency) {

        this.getCurrencyList()

            .contains('[data-qa="currencyItem"]', currency)

            .should('be.visible');

    }
 
    assertSelectedCurrency(currency) {

        this.getCurrencyList()

            .contains('li.selected', currency)

            .should('have.class', 'selected');

    }

}
 
export const currency = new Currency();

 