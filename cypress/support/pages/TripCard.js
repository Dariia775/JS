// class TripCard {

//     getTripCardBlock() {
//         return cy.get ('[data-qa="trip-card"]').first();
//       }
//       checkTripCardBlock() {
//         this.getTripCardBlock().should('be.visible');
//       }

//       assertTripcardContains() {
//         this.getTripCardBlock()
//         .contains('class="trip-content"')
//         .and('class="trip-cta-container"')
//         .should('be.visible');
        
//       }

//       getTripCardContent() {
//         return cy.get('.class="trip-content"').first();
//       }
    
//     //   assertTripcardContent() {
//     //     this.getTripCardBlock()
//     //     .contains('[data-qa="trip-card-labels"]').first()
//     //     .and('[data-qa="trip-card-body"]').first()
//     //     .and('[data-qa="trip-card-footer"]').first()
//     //     .should('be.visible');
//     // } 

//     searchTripCardContent() {
//         this.getTripCardBlock()
//             .find('[data-qa="trip-card-labels"]').should('exist');
//         this.getTripCardBlock()
//             .find('[data-qa="trip-card-body"]').should('exist');
//         this.getTripCardBlock()
//             .find('[data-qa="trip-card-footer"]').should('exist');
//     }





//     checkLabels() {
//       cy.get('[data-qa="trip-card"]').first().should('exist').within(() => {

//       let checkResults = {
//         labelsVisible: false,
//         recommendedFound: false,
//         bestsellerFound: false,
//         errors: []
//       }
  
//       cy.get('[data-qa="trip-card-body"]')
//       .then(() => {
//         cy.get('[data-qa="trip-card-labels"]')
//           .should('exist')
//           .then(($labels) => {
//             if ($labels.is(':visible')) {
//               checkResults.labelsVisible = true
//               cy.log('✅ Labels container is visible')
//             } else {
//               checkResults.errors.push('Labels container not visible')
//               cy.log('❌ Labels container not visible')
//             }
//           })
//           .catch((error) => {
//             checkResults.errors.push('Labels container not found')
//             cy.log('❌ Labels container not found:', error.message)
//           })
//         // Проверяем метку Recommended
//         cy.get('[data-qa="trip-card-label"]')
//           .contains('Recommended')
//           .should('exist')
//           .then(() => {
//             checkResults.recommendedFound = true
//             cy.log('✅ Recommended label found')
//           })
//           .catch((error) => {
//             checkResults.errors.push('Recommended label not found')
//             cy.log('❌ Recommended label not found:', error.message)
//           })
//         // Проверяем метку Bestseller
//         cy.get('[data-qa="trip-card-label"]')
//           .contains('Bestseller')
//           .should('exist')
//           .then(() => {
//             checkResults.bestsellerFound = true
//             cy.log('✅ Bestseller label found')
//           })
//           .catch((error) => {
//             checkResults.errors.push('Bestseller label not found')
//             cy.log('❌ Bestseller label not found:', error.message)
//           })
//           .finally(() => {
//             // Финальный отчет
//             cy.log('=== FINAL RESULTS ===')
//             cy.log(`Labels visible: ${checkResults.labelsVisible}`)
//             cy.log(`Recommended found: ${checkResults.recommendedFound}`)
//             cy.log(`Bestseller found: ${checkResults.bestsellerFound}`)
//             cy.log(`Total errors: ${checkResults.errors.length}`)
//             if (checkResults.errors.length > 0) {
//               cy.log('Errors found:', checkResults.errors.join(', '))
//             }
//           })
//       })
//     })
//   }
// }

// export const tripCard = new TripCard();


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
}
 
export const tripCard = new TripCard();