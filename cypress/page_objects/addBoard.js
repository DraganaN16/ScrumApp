class AddBoard{
    get addBoardBtn(){
        return cy.get(".vs-c-organization-boards__item--add-new")
    }
    get nameInput(){
        return cy.get("input[name='name']")
    }
    get nextBtn(){
        return cy.get("[name='next_btn']")
    }
    get kanbanBtn(){
        return cy.get("span[name='type_kanban']")
    }
    get next2Btn(){
        return cy.get("[name='next_btn']")
    }
    get next3Btn(){
        return cy.get("[name='next_btn']")
    }
    get next4Btn(){
        return cy.get("[name='next_btn']")
    }
    get finishBtn(){
        return cy.get("[name='next_btn']")
    }
    
    addNewBoard(name = Cypress.env('boardName')) {
        this.addBoardBtn.click()
        this.nameInput.type(name)
        this.nextBtn.click()
        this.kanbanBtn.click()
        this.next2Btn.click()
        this.next3Btn.click()
        this.next4Btn.click()
        this.finishBtn.click()        
    } 

}
export const addBoard = new AddBoard();