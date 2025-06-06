class Cookies {
    get dialog() {
        return cy.get('#CybotCookiebotDialog');
      }
      
    getCookiesBlock () {
        return cy.get('#CybotCookiebotDialogFooter > .CybotCookiebotScrollArea');

    }
    cookiesBlockVisible () {
        this.getCookiesBlock().should('be.visible')
        .and('contain.text','Разрешить');
    }
    getCookiesButton(){
        return cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll');
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
    maximizeWindow() {
    cy.viewport('macbook-15'); 
    cy.window().then((win) => {
      win.resizeTo(win.screen.availWidth, win.screen.availHeight);
    });
  }
}

export const cookies = new Cookies()