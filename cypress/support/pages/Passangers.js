class Passanger {

getPassengerBlock() {
    return cy.get('[data-qa="people-button"]');
}


passangerBlockVisible() {
    this.getPassengerBlock().should('be.visible');

}

openPassangerBlock() {
    this.getPassengerBlock().click();
}

getChoosePasanger() {
    return cy.get('[data-qa="base-modal"]');
}

assertChoosePasangerVisible() {
    this.getChoosePasanger().should('be.visible');
}

assertChoosePassangerContains() {
    this.getChoosePasanger()
    .find ('[data-qa="base-input-wrapper"]').should('exist');
    this.getChoosePasanger()
    .find('[data-qa="base-modal-default"]').should('be.visible');
    this.getChoosePasanger()
    .find('[data-qa="base-modal-footer"]').should('be.visible');
}
getPassangerBaseModalDefault() {
    return cy.get('[data-qa="base-modal-default"]');

}

getAdultRow() {
    return cy.get(':nth-child(1) > .field-people-row-label > .field-people-row-title');

    
}

checkAdultRow() {
    this.getAdultRow().should('have.text','Adults')

}

getChildrenRow() {
    return cy.get(':nth-child(2) > .field-people-row-label > .field-people-row-title');  
}

checkChildrenRow() {
    this.getChildrenRow().should('have.text','Children')

}

getInfantsRow() {
    return cy.get(':nth-child(3) > .field-people-row-label > .field-people-row-title');  
}

checkInfantsRow() {
    this.getInfantsRow().should('have.text','Infants')

}



}





// fillSearchFormFieldFrom(value) {
//     this.getSearchFormFieldFromInput().type(value);
//     this.getSearchFormFieldFromInput().should('have.value', value)

// }
// openSearchFormFieldFromDropdown() {
//     this.getSearchFormFieldFrom().click();
// }

// getCityList() {
//     return cy.get('[data-qa="select-list"]');
// }

// assertCityListVisible() {
//     this.getCityList().should('be.visible');
// }

// assertContainsCity(city) {
//     this.getCityList()
//         .contains('[data-qa="suggestionsHeader-0"]', city)
//         .should('be.visible');
// }

// getButtonSwap() {
//     return cy.get('#search-form-swap');
// }

// assertButtonSwapVisible() {
//     this.getButtonSwap().should('be.visible');
// }

// assertContainsButtonSwap() {
//     this.getButtonSwap()
//         .should('have.class', 'svg-inline--fa fa-right-left')
//         .and('be.visible')
//         .click();
// }

// getDatePicker() {
//     return cy.get('[data-qa="datepicker-button"]');
// });

// }

// }

export const passanger = new Passanger();