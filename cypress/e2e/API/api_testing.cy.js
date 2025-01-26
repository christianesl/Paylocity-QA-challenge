// cypress/e2e/example.cy.js
describe('API testing', () => {
  const token = 'VGVzdFVzZXI3MTY6Z3xfRWhwdDkjUWt4';

    it('Test Get Employee List', () => {
      cy.request({
        method: 'GET',
        url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees',
        headers: {
          Authorization: `Basic ${token}`,
        },
      }).then(response => {
          expect(response.status).to.eql(200);
          expect(response.body).to.be.an('array');
          expect(response.body.length).to.be.greaterThan(0);          
      });
    });

    it('Test Add Employee', () => {
      const newEmployee = {
        firstName: 'New',
        lastName: 'Employee',
        dependants: 2,
      };

      cy.request({
        method: 'POST',
        url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees',
        headers: {
          Authorization: `Basic ${token}`,
        },
        body: newEmployee,
      }).then(response => {
          expect(response.status).to.eql(200);                              
      });
    });

    it.only('Test Get Employee', () => {
      const employeeId = 21343124231;

      cy.request({
        method: 'GET',
        url: `https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees/${employeeId}`,
        headers: {
          Authorization: `Basic ${token}`,
        },
        failOnStatusCode: false,
      }).then(response => {
          expect(response.status).to.eql(404);                              
      });
    });

  });