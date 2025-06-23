class TransportationTabs {

    getTransportationTabsBlock() {
        return cy.get('.class="transportation-tabs"')
    }

    checkTransportationTabsBlock() {
        this.checkTransportationTabsBlock().should('be.visible');
    }
}

export const transportationTabs = new TransportationTabs()