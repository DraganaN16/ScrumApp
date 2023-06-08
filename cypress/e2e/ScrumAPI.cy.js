/// <reference types='cypress' />


describe("loginViaApi", () => {
 it('login', ()=> {
    cy.request({
        url: 'https://api.vivifyscrum-stage.com/api/v2/login',
        method: 'POST',
        body: {
            email: "draganaaa@gmail.com", 
            password: "pokusavam100"
        
        }
    }).its('body').then((response) => {

        expect(response.token).to.be.a('string');
       
        window.localStorage.setItem('token', response.token)
    })

    
    })
})