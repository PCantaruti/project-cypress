/**
Instalar cypress
 - npm install -D cypress // ultima versão do cypress
 - npm install -D cypress@12.5.0

Abrir o cypress
 - npx cypress open

**/
describe("Login", () => {
  it("Acessar site", () => {
    cy.visit("https://dev.sistemadavinci.com/login");
    cy.get("#username").type("77.777.777/7777-77");
    cy.get("#password").type(12345678);

    cy.get(".ant-btn").click();
  });
});
