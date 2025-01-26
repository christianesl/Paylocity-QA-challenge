class DashBoardPage {

    // main dashboard
    getAddEmployeeBtn = () => {return cy.get('button[type="button"].btn.btn-primary')}


    // add employee
    getFirstNameTxt = () => {return cy.get('[name="firstName"]')};
    getLastNameTxt = () => {return cy.get('[name="lastName"]')};
    getDependentsTxt = () => {return cy.get('[name="dependants"]')};
    getAddBtn = () => {return cy.get('button[type="button"].btn.btn-primary')};

}

export default DashBoardPage