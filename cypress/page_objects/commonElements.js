class CommonElemnts{
    get organizationTitle(){
        return cy.get("h2[css='1']")
    }
}
export const commonElements = new CommonElemnts();