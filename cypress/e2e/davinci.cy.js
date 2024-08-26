/**
Instalar cypress
 - npm install -D cypress // ultima versão do cypress
 - npm install -D cypress@12.5.0

Abrir o cypress
 - npx cypress open

 - npx cypress run // gera video de teste
 - npx cypress run --config viewportHeight=1000,viewportWidth=600
**/
describe("Login", () => {
  it("Acessar site", () => {
    cy.visit("https://dev.sistemadavinci.com/login");
    cy.get("#username").type("77.777.777/7777-77");
    cy.get("#password").type(12345678);

    cy.get(".ant-btn").click();

    cy.contains("td.ant-table-cell", "Abacaxi Banana e maçã LTDA", {
      timeout: 8000,
    }).should("exist");

    /**  cy.get("td.ant-table-cell.column-actions")
      .find('a[title="Visualizar"]')
      .click();  */

    cy.contains("td.ant-table-cell", "Abacaxi Banana e maçã LTDA")
      .parents("tr")
      .find('a[title="Visualizar"]') // Encontra o link "Visualizar"
      .click();
  });
});
