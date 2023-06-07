class LoginPage{
    get emailInputField(){
        return cy.get("input[type='email']");
    }
    get passwordInputField(){
        return cy.get("input[type='password']");
    }
    get loginButton(){
        return cy.get("button[type='submit']");
    }

    loginUser(email, password){  //f-ja login radi celu akciju
        this.emailInputField.type(email);
        this.passwordInputField.type(password);
        this.loginButton.click();
    }
}

export const loginPage = new LoginPage();