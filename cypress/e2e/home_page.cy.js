import { homePage } from "../support/pages/HomePage";
describe('Open website', () => {
    it('Should open website and verify Url', () => {
    homePage.visit();
    homePage.verifyUrl();
});
});