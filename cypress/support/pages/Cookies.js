class Cookies {
    getCookiesBlock () {
        return cy.get('#CybotCookiebotDialogFooter > .CybotCookiebotScrollArea');

    }
    cookiesBlockVisible () {
        this.getCookiesBlock().should('be.visible')
        .and('contain.text','Разрешить');
    }
    getCookiesButton(){
        return cy.get('CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll');
    }

    checkCookiesButton (){
        this.getCookiesButton().should('be.visible')
        .and('contain.text','Разрешить все');
    }
    getCookiesButtonAllowAll() {
        return cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll');

        
    }
    assertCookiesButtonAllowAll() {
        this.getCookiesButtonAllowAll().should('be.visible').click();

    }
    
}

export const cookies = new Cookies()