describe("My First Test", () => {
  it("Visit my app!", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("route to all data").click().should("contain", "French press corda 3x12");
  });
});
