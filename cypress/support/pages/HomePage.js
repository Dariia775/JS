class HomePage {

    visit() {
        cy.visit('https://12go.asia/en');
    }
    verifyUrl() {

        cy.url().should ('include', '12go.asia/en');
    }
} export const homePage = new HomePage();

