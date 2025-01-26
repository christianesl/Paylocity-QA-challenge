import DashBoardPage from '../pages/DashboardPage.js'
import LoginPage from '../pages/LoginPage.js'

describe('Suite to test adding a new employee to payroll', function (){

    beforeEach(function () {
        const loginPage = new LoginPage();
        cy.visit('https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login')
        loginPage.getUsernameTextField().should('be.visible').type('TestUser716')
        loginPage.getPasswordTextField().should('be.visible').type('g|_Ehpt9#Qkx')
        loginPage.getLogInBtn().should('be.visible').click()
        
    })

    it('Test - Add a new employee', function(){
        const mainPage = new DashBoardPage();
        const FirstEmployeeName = 'christian'
        const LastEmployeeName = 'saldana'

        mainPage.getAddEmployeeBtn().should('be.visible').click();

        // pop up form
        mainPage.getFirstNameTxt().should('be.visible').type(FirstEmployeeName);
        mainPage.getLastNameTxt().should('be.visible').type(LastEmployeeName);
        mainPage.getDependentsTxt().should('be.visible').type('0');
        mainPage.getAddBtn().should('be.visible').click();

        // validations
        cy.contains(FirstEmployeeName)
        cy.contains(LastEmployeeName)

    })
})