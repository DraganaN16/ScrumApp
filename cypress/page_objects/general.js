class General{
    get headerLoginTitle(){
        return cy.get('.vs-c-auth-modal-body__heading')
    }
    get headerTitle(){
        return cy.get('.vs-l-sprint__name > .vs-u-text--uppercase')
    }
}

export const general = new General();