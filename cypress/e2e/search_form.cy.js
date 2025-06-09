
import { cookies } from "../support/pages/Cookies";
import { homePage } from "../support/pages/HomePage";
import { searchForm } from "../support/pages/SearchForm";

describe('Find Tickets', () => {
    beforeEach(() => {
        homePage.visit();
        cookies.assertCookiesButtonAllowAll();
    });
    it('Search Default Value ', () => {

      searchForm.checkSearchFormFieldFrom();
      searchForm.getSearchFormFieldFrom().should('have.text','Bangkok');
      searchForm.checkSearchFormFieldTo();
      searchForm.getSearchFormFieldToInput().should('have.text','Chiang Mai');
      searchForm.checkStartDateIsPlus3Days();
      searchForm.checkReturnDateIsStartDatePlus5();
      //datePicker.checkDatePlusDays(3);  
      
    // const targetDate = new Date();
    // targetDate.setDate(targetDate.getDate() + 3);
   
   
    // const options = { weekday: 'short', month: 'short', day: 'numeric' };
    // const formattedDate = targetDate
    //   .toLocaleDateString('en-US', options)
    //   .replace(',', '');
   
    // cy.get('[data-qa="datepicker-button"] .base-form-control__content')
    //   .invoke('text')
    //   .then((text) => {
    //     const trimmed = text.trim().replace(',', '');
    //     expect(trimmed).to.eq(formattedDate);
    // });
    
    });

 });
