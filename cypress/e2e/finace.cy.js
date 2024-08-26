describe("Transações", () => {
  // hooks -> trecho de cod para executar antes ou despois de cada/todos os testes
  // before / beforeEach
  // after / afterEach

  beforeEach(() => {
    cy.visit("https://dev-finance.netlify.app/");
  });
  it("Cadastrar entrada", () => {
    criarTransacao("Freela", 250);
    criarTransacao("Venda de item", 300);

    // cy.get("tbody tr td.description").should("have.text", "Freela");
    // seleciona o campo que deve conter o texto freela
  });
  it("Cadastrar saida", () => {
    criarTransacao("Cinema", -40);
    criarTransacao("Estacionamento", -30);
  });

  it("Excluir transação", () => {
    criarTransacao("Freela", 100);
    criarTransacao("Estacionamento", -30);
    criarTransacao("Cinema", -40);

    // cy.contains(".description", "Freela").parent().find("img").click();
    cy.contains(".description", "Freela").siblings().children("img").click();

    cy.get("tbody tr").should("have.length", 2); // validação
  });
});

function criarTransacao(desc, value) {
  cy.contains("Nova Transação").click();
  cy.get("#description").type(desc);
  cy.get("#amount").type(value);
  cy.get("#date").type("2024-06-25");

  cy.contains("button", "Salvar").click();
}
