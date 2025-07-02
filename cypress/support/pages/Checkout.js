class Checkout {
    getNextStepItinerary() {
        return cy.get('[data-qa="checkout-next-step-button"]');
    }

    pressNextStepItinerary() {
        this.getNextStepItinerary().click();
    }

    getContactDetailsMobile() {
        return cy.get('[data-qa="phone-with-code-input"]');  
    }

    checkContactDetailsMobile(phone) {
        this.getContactDetailsMobile().clear().type(phone)
        .should('have.value', phone);
        return this;
    }

    getContactDetailsEmail() {
        return cy.get('[data-qa="base-input-wrapper"]');  
    }

    checkContactDetailsEmail(email) {
        this.getContactDetailsMobile().clear().type(email)
        .should('have.value', email);
        return this;
    }
}
export const checkout = new Checkout()