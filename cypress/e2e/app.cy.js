describe("App", ()=>{
    beforeEach(()=>{
      cy.visit("http://localhost:3000/");
    });
  
    it("Should display the titlle", ()=>{
      cy.get("h1").contains("Mi super Test Cypress");
    });

    it("Should display about", ()=>{
    
      cy.get('[href="/about"]');
      });
  });


