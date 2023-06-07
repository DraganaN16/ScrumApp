class EditBoard{
    get lastBoard(){
        return cy.get('a[href="/boards/href10561"]').first()
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
}
export const editBoard = new EditBoard();