class TripCard {

    getTripCardBlock() {
        return cy.get ('[data-qa="trip-card"]').first();
      }
      checkTripCardBlock() {
        this.getTripCardBlock().should('be.visible');
      }

      assertTripcardContains() {
        this.getTripCardBlock()
        .contains('class="trip-content"')
        .and('class="trip-cta-container"')
        .should('be.visible');
        
      }

      getTripCardContent() {
        return cy.get('.class="trip-content"').first();
      }
    
    //   assertTripcardContent() {
    //     this.getTripCardBlock()
    //     .contains('[data-qa="trip-card-labels"]').first()
    //     .and('[data-qa="trip-card-body"]').first()
    //     .and('[data-qa="trip-card-footer"]').first()
    //     .should('be.visible');
    // } 

    searchTripCardContent() {
        this.getTripCardBlock()
            .find('[data-qa="trip-card-labels"]').should('exist');
        this.getTripCardBlock()
            .find('[data-qa="trip-card-body"]').should('exist');
        this.getTripCardBlock()
            .find('[data-qa="trip-card-footer"]').should('exist');
    }





    checkLabels() {
      cy.get('[data-qa="trip-card"]').first().should('exist').within(() => {

      let checkResults = {
        labelsVisible: false,
        recommendedFound: false,
        bestsellerFound: false,
        errors: []
      }
  
      cy.get('[data-qa="trip-card-body"]')
      .then(() => {
        cy.get('[data-qa="trip-card-labels"]')
          .should('exist')
          .then(($labels) => {
            if ($labels.is(':visible')) {
              checkResults.labelsVisible = true
              cy.log('✅ Labels container is visible')
            } else {
              checkResults.errors.push('Labels container not visible')
              cy.log('❌ Labels container not visible')
            }
          })
          .catch((error) => {
            checkResults.errors.push('Labels container not found')
            cy.log('❌ Labels container not found:', error.message)
          })
        // Проверяем метку Recommended
        cy.get('[data-qa="trip-card-label"]')
          .contains('Recommended')
          .should('exist')
          .then(() => {
            checkResults.recommendedFound = true
            cy.log('✅ Recommended label found')
          })
          .catch((error) => {
            checkResults.errors.push('Recommended label not found')
            cy.log('❌ Recommended label not found:', error.message)
          })
        // Проверяем метку Bestseller
        cy.get('[data-qa="trip-card-label"]')
          .contains('Bestseller')
          .should('exist')
          .then(() => {
            checkResults.bestsellerFound = true
            cy.log('✅ Bestseller label found')
          })
          .catch((error) => {
            checkResults.errors.push('Bestseller label not found')
            cy.log('❌ Bestseller label not found:', error.message)
          })
          .finally(() => {
            // Финальный отчет
            cy.log('=== FINAL RESULTS ===')
            cy.log(`Labels visible: ${checkResults.labelsVisible}`)
            cy.log(`Recommended found: ${checkResults.recommendedFound}`)
            cy.log(`Bestseller found: ${checkResults.bestsellerFound}`)
            cy.log(`Total errors: ${checkResults.errors.length}`)
            if (checkResults.errors.length > 0) {
              cy.log('Errors found:', checkResults.errors.join(', '))
            }
          })
      })
    })
  }
}

export const tripCard = new TripCard();