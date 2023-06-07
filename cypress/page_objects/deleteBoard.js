class DeleteBoard{
    get deleteBtn(){
        return cy.get("button[class='vs-c-btn vs-c-btn--warning vs-c-btn--spaced']")
    }
}
export const deleteBoard = new DeleteBoard();