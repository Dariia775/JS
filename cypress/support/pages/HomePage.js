class HomePage {

    visit() {
        cy.visit('https://12go.asia/en');
    }
    verifyUrl() {

        cy.url().should ('include', '12go.asia/en');
    }
    maximizeWindow() {
        cy.viewport('macbook-15'); 
        cy.window().then((win) => {
          win.resizeTo(win.screen.availWidth, win.screen.availHeight);
        });
      }
} export const homePage = new HomePage();

