class SearchForm {
    getSearchForm() {
        return cy.get('[data-qa="search-form"]');
    }
 
    searchFormVisible() {
        this.getSearchForm().should('be.visible');
    }
 
    searchFormFields() {
        this.getSearchForm()
            .find('.vue-search-form-group.places').should('exist');
        this.getSearchForm()
            .find('.vue-search-form-group.double.dates').should('exist');
        this.getSearchForm()
            .find('.vue-search-form-group.people').should('exist');
        this.getSearchForm()
            .find('[data-qa="search-form-submit-button"]').should('exist');
    }
 
    getSearchFormFieldFrom() {
        return cy.get('[data-qa="select-button"]').first();

    }

    getSearchFormFieldFromInput() {
        return cy.get('[data-qa="select-button"]').first();
    }

    getSearchFormFieldTo() {
        return cy.get('[data-qa="field-select-btn"]').last();

    }
    getSearchFormFieldToInput() {
        return cy.get('[data-qa="field-select-btn"]').last();
    }

 //Departure station

    checkSearchFormFieldFrom() {
        this.getSearchFormFieldFrom()
            .should('be.visible');
    }

    // To station

    checkSearchFormFieldTo() {
        this.getSearchFormFieldTo()
            .should('be.visible');
    }
 
    fillSearchFormFieldFrom(value) {
        this.getSearchFormFieldFromInput().type(value);
        this.getSearchFormFieldFromInput().should('have.value', value)

    }
    openSearchFormFieldFromDropdown() {
        this.getSearchFormFieldFrom().click();
    }
 
    getCityList() {
        return cy.get('[data-qa="select-list"]');
    }
 
    assertCityListVisible() {
        this.getCityList().should('be.visible');
    }
 
    assertContainsCity(city) {
        this.getCityList()
            .contains('[data-qa="suggestionsHeader-0"]', city)
            .should('be.visible');
    }
 
    getButtonSwap() {
        return cy.get('#search-form-swap');
    }
 
    assertButtonSwapVisible() {
        this.getButtonSwap().should('be.visible');
    }
 
    assertContainsButtonSwap() {
        this.getButtonSwap()
            .should('have.class', 'svg-inline--fa fa-right-left')
            .and('be.visible')
            .click();
    }
 
    getDatePicker() {
        return cy.get('[data-qa="datepicker-button"]');
    }
    
}
export const searchForm = new SearchForm();