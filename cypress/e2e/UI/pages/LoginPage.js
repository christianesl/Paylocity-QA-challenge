class LoginPage{

    getUsernameTextField = () => {return cy.get('[name="Username"]')}
    getPasswordTextField = () => {return cy.get('[name="Password"]')}
    getLogInBtn = () => {return cy.get('button[type="submit"].btn.btn-primary')}
}

export default LoginPage