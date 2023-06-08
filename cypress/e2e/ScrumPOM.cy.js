/// <reference types='cypress' />

import { general } from "../page_objects/general"
import { loginPage } from "../page_objects/loginPage"
import { addBoard } from "../page_objects/addBoard"
import { editBoard} from "../page_objects/editBoard"
import { deleteBoard} from "../page_objects/deleteBoard"


let boardId;
//let organization_id;

describe("Scrum, PO", () => {
  before(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
  })
  
  beforeEach("Visit home page",() => {
    cy.visit("/");
    cy.url().should("contain", "https://vivifyscrum-stage.com/")
    general.headerLoginTitle.should("contain","Log in with your existing account");
  })

    it.only('Login with valid email and password', () => {  //login ide u before!
       cy.intercept("POST","https://api.vivifyscrum-stage.com/api/v2/login", (request)=>{
       }).as("validLogin")
      
      cy.visit("login")
      cy.url().should("contain", "login");
    // cy.loginViaApi("draganaaa@gmail.com", "pokusavam100");
    // loginPage.loginButton.click();
       loginPage.loginUser(Cypress.env('existingUserEmail'), Cypress.env('validPassword'));
       general.headerTitle.should("contain", "My Organizations");
       //cy.wait(3000);

       cy.wait('@validLogin').then((request) => {
       expect(request.response.statusCode).to.eql(200)  
       //cy.log(JSON.stringify(request.response.statusCode))
       })
    })

    // it('Create organization', ()=> {
    //   cy.visit("my-organizations");
    //   cy.get(".vs-c-my-organization--add-new").click();
    //   cy.get("input").type("Moja organizacija");
    //   cy.get("[name='next_btn']").click();
    //   cy.get("[name='next_btn']").click();
    //   //cy.get(".vs-c-modal--features-button > .vs-c-btn").click();

    // })

    it('Add new board', ()=> {
      cy.visit("organizations/233632/boards");
      cy.get(".vs-c-organization-boards__item--add-new").click({ force: true});  //{ force: true}
      cy.get("input[name='name']").type("Proba");
      cy.get("[name='next_btn']").click();
      cy.get("span[name='type_kanban']").click();
      cy.get("[name='next_btn']").click();
      cy.get("[name='next_btn']").click();
      cy.get("[name='next_btn']").click();
      cy.get("[name='next_btn']").click();
      cy.wait(3000);    
    })
 
     it('Edit board', ()=> {
      cy.get('a[href="/boards/${boardId}"]').first().click(); // ${boardId} 
      cy.get('a[href="/boards/href10561/settings"]').click();  
      cy.get("input[name='name']").clear().type("Novo ime")
      cy.get("textarea[name='description']").type("proba");
      cy.get("[class='vs-c-btn vs-c-btn--primary vs-c-btn--spaced vs-u-font-weight-bold vs-c-btn-auth--top-gap']").click();
     })
 
     it('Delete board', ()=> {
         cy.get("button[class='vs-c-btn vs-c-btn--warning vs-c-btn--spaced']").click();
         cy.wait(3000)
     })
  })
    
