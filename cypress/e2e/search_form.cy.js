
import { picker } from "../support/pages/Picker";
import { cookies } from "../support/pages/Cookies";
import { homePage } from "../support/pages/HomePage";
import { passanger, passenger } from "../support/pages/Passengers";
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
      //searchForm.checkReturnDateIsStartDatePlus5();
      passenger.passengerBlockVisible();
      passenger.openPassengerBlock();
      passenger.assertChoosePassengerVisible();
      passenger.assertChoosePassengerContains();
      passenger.checkAmountOfPassengerDefault();
      passenger.checkAdultRow();
      passenger.checkAdultComposition();
      passenger.checkAdultCompositionText();
      passenger.checkAdultCompositionText();
      passenger.checkAdultCompositionSubext();
      passenger.checkAdultCompositionNumber();
      passenger.checkAdultCounter();
      passenger.checkAdultCounterValueDefault();
      passenger.checkAdultDecreaseButton();
      passenger.checkAdultDecreaseButtonNumber();
      passenger.checkAdultIncreaseButton();
      passenger.checkChildrenRow();
      passenger.checkChildrenCompositionSubext();
      passenger.checkChildrenCompositionNumberDef();
      passenger.checkChildrenCounter();
      passenger.checkChildrenCounterValueDefault();
      passenger.checkChildrenDecreaseButton();
      passenger.checkChildrenIncreaseButton();
      passenger.checkChildrenIncreaseButtonNumber();
      passenger.checkChildrenDecreaseButtonActive();
      passenger.checkInfantsRow();
      passenger.pressDoneButton();
      passenger.pressFindButton();
      picker.checkActiveDateMatches(3);
      




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
