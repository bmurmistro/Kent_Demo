import Button from "@clayui/button";

describe("<Button />", () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: "Cypress Component Tests",
      testName: Cypress.currentTest.title,
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it("should render", () => {
    cy.mount(<Button>Clay Button</Button>);

    cy.eyesCheckWindow();
  });
});
