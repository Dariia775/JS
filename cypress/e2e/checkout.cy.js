
import { homePage } from "../support/pages/HomePage";
import { cookies } from "../support/pages/Cookies";
import { tripCard } from "../support/pages/TripCard";
import { checkout } from "../support/pages/Checkout";
import {checkoutData} from "../fixtures/checkoutData.json"


describe('Checkout Process', () => {

    const { phone, email } = checkoutData;
    
    beforeEach(() => {
        homePage.visit();
        cookies.assertCookiesButtonAllowAll();

    });
    it('Checkout', () => {
        
        tripCard.pressBookButton();
        checkout.pressNextStepItinerary();
        checkout.checkContactDetailsMobile(phone);
        checkout.checkContactDetailsEmail(email);
        

    });
})


    
        

    