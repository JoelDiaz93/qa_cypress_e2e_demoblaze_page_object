class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAlert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }

  assertAllert(alertMessage) {
    this.assertAlert(alertMessage);
  }
}

export default PageObject;
