class TripCard {
  getTripCardBlock() {
    return cy.get('[data-qa="trip-card"]').first();
  }
 
  checkTripCardBlock() {
    this.getTripCardBlock().should('be.visible');
  }
 
  assertTripcardContains() {
    this.getTripCardBlock()
      .find('.trip-content')
      .should('be.visible');
 
    this.getTripCardBlock()
      .find('.trip-cta-container')
      .should('be.visible');
  }
 
  getTripCardContent() {
    return this.getTripCardBlock().find('.trip-content').first();
  }
 
  searchTripCardContent() {
    this.getTripCardBlock().within(() => {
      cy.get('[data-qa="trip-card-labels"]').should('exist');
      cy.get('[data-qa="trip-card-body"]').should('exist');
      cy.get('[data-qa="trip-card-footer"]').should('exist');
    });
  }
 
  checkLabels() {
    this.getTripCardBlock().within(() => {
      cy.get('[data-qa="trip-card-labels"]')
        .should('be.visible')
        .then(() => cy.log('✅ Labels container is visible'));
 
      cy.get('[data-qa="trip-card-label"]')
        .contains('Recommended')
        .should('exist')
        .then(() => cy.log('✅ Recommended label found'));
 
      cy.get('[data-qa="trip-card-label"]')
        .contains('Bestseller')
        .should('exist')
        .then(() => cy.log('✅ Bestseller label found'));
    });
  }
  getTripCardPrice() {
    return this.getTripCardBlock().find('.trip-price').first();
  }
  checkTripCardPrice() {
    this.getTripCardPrice().should('be.visible');
  }
  assertTripCardPriceContains() {
    this.getTripCardPrice()
      .contains('from')
      .should('be.visible');
    this.getTripCardPrice()
      .contains('THB')
      .should('be.visible');
  }
  assertTripCardPriceValue() {
    this.getTripCardPrice().invoke('text').then((text) => {
      const price = parseFloat(text.replace(/[^0-9.]/g, ''));
      expect(price).to.be.greaterThan(0);
      cy.log(`✅ Price value is valid: ${price}`);
    });
  }
  assertTripCardPrice() {
    this.checkTripCardPrice();
    this.assertTripCardPriceContains();
    this.assertTripCardPriceValue();
  }

  getBookButton() {
    return cy.get('[data-qa="trip-base-button"]').first();
  }

  pressBookButton() {
    this.getBookButton().click();
  }
}
 
export const tripCard = new TripCard();