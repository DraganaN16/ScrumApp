class EditBoard{
    get lastBoard(){
        return cy.get('a[href="/boards/href10561"]').first() ///${boardId} 
    }
    get settingsBtn(){
        return cy.get('a[href="/boards/href10561/settings"]')
    }
    get inputName(){
        return cy.get("input[name='name']")
    }
    get descriptionName(){
        return cy.get("textarea[name='description']")
    }
    get submitBtn(){
        return cy.get("[class='vs-c-btn vs-c-btn--primary vs-c-btn--spaced vs-u-font-weight-bold vs-c-btn-auth--top-gap']")
    }

    editingBoard(boardId, editedName = Cypress.env('editedBoardName'), description = Cypress.env('boardDescription')){
        this.lastBoard(boardId).click();
        this.settingsBtn(boardId).click();
        this.inputName.clear().type(editedName);
        this.descriptionName.type(description);
        this.settingsBtn().click();
    }
}
export const editBoard = new EditBoard();