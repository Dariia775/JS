import { tripCard } from "../support/pages/TripCard";
import { homePage } from "../support/pages/HomePage";
import { cookies } from "../support/pages/Cookies";
import { passenger } from "../support/pages/Passengers";
import { transportationTabs } from "../support/pages/TransportationTabs";

describe('Trip Card Block', () => {
    
    // beforeEach(() => {
    //     homePage.visit();
    //     cookies.assertCookiesButtonAllowAll();
    //     passenger.pressFindButton();

    });
    it('Trip Card Composition', () => {
        homePage.visit();
        cookies.assertCookiesButtonAllowAll();
        passenger.pressFindButton();
        transportationTabs.checkTransportationTabsBlock();
        transportationTabs.checkTransportationTabsBlockContains();
        transportationTabs.checkTransportationTabsActive();
        transportationTabs.assertAtLeastOneTabVisible();
        tripCard.checkTripCardBlock();
        //tripCard.assertTripcardContent();
        tripCard.searchTripCardContent();
        tripCard.checkLabels();
        tripCard.pressBookButton();
        

    });


    
        

    