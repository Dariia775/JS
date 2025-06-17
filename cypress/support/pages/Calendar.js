class DatePicker {

    getFormattedDate(daysFromToday) {
        const date = new Date();
        date.setDate(date.getDate() + daysFromToday);
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      }
      checkActiveDateMatches(daysFromToday) {
        const expectedDate = this.getFormattedDate(daysFromToday);
       
        cy.log(`✅ Очікувана дата: ${expectedDate}`);
       
        cy.get('button.search-results-dates-date.active .search-results-dates-date-text', { timeout: 10000 })
          .invoke('text')
          .then((actualDate) => {
            cy.log(`📅 Активна дата на сторінці: ${actualDate.trim()}`);
            expect(actualDate.trim()).to.eq(expectedDate);
          });

      } 
}

export const picker = new DatePicker()