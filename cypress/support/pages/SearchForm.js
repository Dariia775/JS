class SearchForm {
    getSearchForm () {
        return cy.get ('[data-qa="search-form"]');

    }
    searchFormVisible () {
        this.getSearchForm ()
        .should ('be.visible');
    }
    
    searchFormFields() {
        this.getSearchForm()
        .should('have.class','vue-search-form-group places')
        .and('have.class','vue-search-form-group double dates')
        .and('have.class','vue-search-form-group people')
        .and('[data-qa="search-form-submit-button"]')
    }
    
    getSearchFormFieldFrom () {
        return cy.get ('[data-qa="select-button"]');

    }
    checkSearchFormFieldFrom () {
        this.getSearchFormFieldFrom ()
            .should('be.visible')
            .and('contain.text', 'Bangkok')

    }
    openSearchFormFieldFromDropdown () {
        this.checkLangSelector.click();
    }
    getCityList () {
        return cy.get('[data-qa="select-list"]');
    }
    assertCityListVisible () {
        this.getCityList ()
        .should('be.visible');
    }
    assertContainsCity (city) {
        this.getCityList()
            .contains('[data-qa="suggestionsHeader-0"]', city)
            .should('be.visible');
    }
    
    getButtonSwap () {
        return cy.get('#search-form-swap'); 
    
    }
    assertButtonSwapVisible () {
        this.getButtonSwap ()
        .should('be.visible');
    }

    assertContainsButtonSwap () {
        this.getButtonSwap()
            .should('have.class','svg-inline--fa fa-right-left'),click()
            .and('be.visible');
        }

        getDatePicker () {
            return cy.get('[data-qa="datepicker-button"]'); 





    }
}

const city = ['Bangkok', 'Chiangmai', 'Phuket', 'Hanoi', 'Krabi'];
    
export const searchForm = new SearchForm