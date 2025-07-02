class TransportationTabs {

    getTransportationTabsBlock() {
        return cy.get('[class="transportation-tabs"]')
    }

    checkTransportationTabsBlock() {
        this.getTransportationTabsBlock().should('be.visible');
    }

    checkTransportationTabsBlockContains() {
        this.getTransportationTabsBlock()
        .find('[class="pill active tab tab-item"]')
        .contains('All')

        this.getTransportationTabsBlock()
        .find('[data-qa="transportation-tabs-tab"]')
        .should('be.visible')
        .contains('Trains')

        this.getTransportationTabsBlock()
        .find('[data-qa="transportation-tabs-tab"]')
        .should('be.visible')
        .contains('Buses')

        this.getTransportationTabsBlock()
        .find('[data-qa="transportation-tabs-tab"]')
        .should('be.visible')
        .contains('Flights')

        this.getTransportationTabsBlock()
        .find('[data-qa="transportation-tabs-tab"]')
        .should('be.visible')
        .contains('Taxis');

    }
    
      assertAtLeastOneTabVisible() {
        this.getTransportationTabsBlock()
          .should('have.length.greaterThan', 0);
      }


    getTransportationTabsActive() {
        return cy.get('.tabs > .active');
    }

    checkTransportationTabsActive() {
        this.getTransportationTabsActive().should('be.visible')
        .and('exist')
        .contains('All')
    }

    
}



export const transportationTabs = new TransportationTabs()