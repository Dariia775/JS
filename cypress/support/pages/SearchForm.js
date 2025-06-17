class SearchForm {

    startDateSelector = '[data-qa="datepicker-button"] .base-form-control__content';

    endDateBlock = '[data-qa="datepicker-input-range"]'; 
  
    endDateSelector = '[data-qa="datepicker-input-range"] .base-form-control__content';
   
    
  
    getFormattedDate(daysFromToday) {
  
      const date = new Date();
  
      date.setDate(date.getDate() + daysFromToday);
   
      const options = { weekday: 'short', month: 'short', day: 'numeric' };
  
      return date.toLocaleDateString('en-US', options).replace(',', '');
  
    }
  
    checkStartDateIsPlus3Days() {
  
      const expectedDate = this.getFormattedDate(3);
   
      cy.get(this.startDateSelector)
  
        .invoke('text')
  
        .then((text) => {
  
          const actual = text.trim().replace(',', '');
  
          expect(actual).to.eq(expectedDate);
  
        });
  
    }
   
    
  
    checkReturnDateIsStartDatePlus5() {
  
      cy.get(this.endDateBlock).click();
   
   
  
      cy.get(this.startDateSelector)
  
        .invoke('text')
  
        .then((startText) => {
  
          const baseDate = new Date(startText.trim());
  
          baseDate.setDate(baseDate.getDate() + 5);
   
          const options = { weekday: 'short', month: 'short', day: 'numeric' };
  
          const expectedReturn = baseDate.toLocaleDateString('en-US', options).replace(',', '');
   
      
  
          cy.get(this.endDateSelector)
  
            .should('not.contain', 'Add return')
  
            .invoke('text')
  
            .then((returnText) => {
  
              const actual = returnText.trim().replace(',', '');
  
              expect(actual).to.eq(expectedReturn);
  
            });
  
        });
  
    }
   
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