// https://docs.cypress.io/api/introduction/api.html

describe("Homepage test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Roman numerals");
  }),
  it("check input required",() => {
    cy.visit("/");
    cy.get("form button").click();
    cy.get(".show-result").should("not.exist")
  }),
  it("check 0 generate error",() => {
    cy.visit("/");
    cy.get("form input").click().type('0');
    cy.get("form button").click();
    cy.contains(".error", "Roman numerals do not include the number 0 🤔");
  }),
  it("check api works",() => {
    cy.visit("/");
    cy.get("form input").click().type('10');
    cy.get("form button").click();
    cy.contains(".show-result", "X");
  }),
  it("check max form input",() => {
    cy.visit("/");
    cy.get("form input").click().type('10000');
    cy.get("form button").click();
    cy.get(".show-result").should("not.exist")
  })
});

