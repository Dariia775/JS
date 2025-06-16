class Passenger {

getPassengerBlock() {
    return cy.get('[data-qa="people-button"]');
}

passengerBlockVisible() {
    this.getPassengerBlock().should('be.visible');

}

openPassengerBlock() {
    this.getPassengerBlock().click();
}

getChoosePassenger() {
    return cy.get('[data-qa="base-modal"]');
}

assertChoosePassengerVisible() {
    this.getChoosePassenger().should('be.visible');
}

assertChoosePassengerContains() {
    this.getChoosePassenger()
    .find ('[data-qa="base-input-wrapper"]').should('exist');
    this.getChoosePassenger()
    .find('[data-qa="base-modal-default"]').should('be.visible');
    this.getChoosePassenger()
    .find('[data-qa="base-modal-footer"]').should('be.visible');
}

getAmountOfPassengerDefault() {
    return cy.get('.field-people-title-wrapper')
}

checkAmountOfPassengerDefault() {
    this.getAmountOfPassengerDefault().should('have.text','2 Passengers');
}

getPassengerBaseModalDefault() {
    return cy.get('[data-qa="base-modal-default"]');

}

getAdultRow() {
    return cy.get(':nth-child(1) > .field-people-row-label > .field-people-row-title');
   
}

checkAdultRow() {
    this.getAdultRow().should('have.text','Adults');

}
getAdultSection() {
    return cy.get('[data-qa="base-modal-default"] > :nth-child(1)')

}
getAdultCounter() {
    return cy.get('[data-qa="people-adults"]');
}

checkAdultCounter() {
    this.getAdultCounter().should('be.visible');
}

checkAdultCounterValueDefault() {
    this.getAdultCounter()
    .find('[data-qa="counter-value"]').should('be.visible')
    .and('have.text', '2');

}

getAdultDecreaseButton() {
    return cy.get('[data-qa="decrease-new-button"]',{timeout: 10000}).first();
}

checkAdultDecreaseButton() {
    this.getAdultDecreaseButton().should('be.visible').click();
}

 checkAdultDecreaseButtonNumber() {
    this.getAdultCounter().should('have.text', '1')

 }

 getAdultIncreaseButton() {
     return cy.get('[data-qa="people-adults"] > [data-qa="increase-new-button"]');
 }

 checkAdultIncreaseButton() {
    this.getAdultIncreaseButton()
    .click();
 }

 // checkAdultComposition

getAdultComposition() {
    return cy.get('[data-qa="base-modal-default"] > :nth-child(1)');
}
 
checkAdultComposition() {
    this.getAdultComposition().should('be.visible');
}

getAdultCompositionText() {
return cy.get(':nth-child(1) > .field-people-row-label > .field-people-row-title');
}

checkAdultCompositionText() {
    this.getAdultCompositionText().should('have.text','Adults');
}

getAdultCompositionSubext() {
    return cy.get(':nth-child(1) > .field-people-row-label > .field-people-row-subtext');
    
}

checkAdultCompositionSubext() {
    this.getAdultCompositionSubext().should('have.text','12 Years and Above');
}

getAdultCompositionNumber() {
    return cy.get('[data-qa="people-adults"]');
}

checkAdultCompositionNumber() {
    this.getAdultCompositionNumber().should('have.text', '2');
}


getChildrenRow() {
    return cy.get(':nth-child(2) > .field-people-row-label > .field-people-row-title');  
}

checkChildrenRow() {
    this.getChildrenRow().should('have.text','Children');

}

getInfantsRow() {
    return cy.get(':nth-child(3) > .field-people-row-label > .field-people-row-title');  
}

checkInfantsRow() {
    this.getInfantsRow().should('have.text','Infants')

}
getDoneButton() {
    return cy.get('[data-qa="base-modal-footer"] > .btn');
}

pressDoneButton() {
    this.getDoneButton().click();
}
getFindButton() {
    return cy.get('[data-qa="search-form-submit-button"]');
} 

pressFindButton() {
    this.getFindButton().should('be.visible').click();
}

 }

export const passenger = new Passenger();