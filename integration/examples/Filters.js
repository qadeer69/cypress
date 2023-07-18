/// <reference types="cypress" />
// import 'cypress-v10-preserve-cookie'
 describe('Test Suite', function(){

    before(() => {
cy.visit("https://qa.eonhealth.com/");
cy.get('#username').type('superadmin')
cy.get('#password').type('#P*wyfQjP7UjNkmjGBk3t^efV')
cy.get('.btn').click()
cy.wait(5000)

      });
        
      beforeEach(() => {
            Cypress.Cookies.preserveOnce('token')
      });
   
 
   
    



 // Test case 1
 it('Communication, Communication Attempts', () => {
    
    // Move to Required worklist
goToPatientList('COMMUNICATIONS');
function goToPatientList(listName) {
    cy.get('.nav-link')
      .contains(listName)
      .click();
    }
    cy.wait(5000)
//                                                                                                        Communication Attempts
const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'Communication Attempts')
  .click();

// Select Radio Buttons
  cy.get('div.filterDropdown')
  .contains('label', 'is empty')
  .click({force:true});
  cy.wait(5000)
//                                                                                                       Communication Attempts


    // // Verify that data is showing after applying the filter
    // cy.get('.ag-center-cols-viewport').should(($viewport) => {
    //     if ($viewport && $viewport.length > 0) {
    //       // Pass the test case if the viewport exists
    //       expect(true).to.equal(true);
    //     } else {
    //       cy.get('.p-5.bg-light.text-black-50').should(($p) => {
    //         if ($p && $p.length > 0) {
    //           // Pass the test case if the paragraph element exists
    //           expect(true).to.equal(true);
    //         } else {
    //           // Fail the test case if neither condition is true
    //           expect.fail('Data not showing after applying filter');
    //         }
    //       });
    //     }
    //   });
      });

// Test case 2
it('All PatientS, Other Clinically Significant Abnormalities', () => {



    //Create Patient
    
    const filterElement = '.mb-2.mt-3';
    
        // Move to Required worklist
        goToPatientList('ALL PATIENTS');
        function goToPatientList(listName) {
            cy.get('.nav-link')
              .contains(listName)
              .click();
            }
            cy.wait(5000)
            // const filterRemoveElement = '.position-absolute > img';
            // const searchRemoveElement = '.input-group > .text-muted';
            // cy.get(searchRemoveElement).click({multiple:true}).clear()
            // cy.get(filterRemoveElement).click({ multiple: true });
    
    //                                                                                         Other Clinically Significant Abnormalities
    const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
    cy.get(dropdownToggleElement).click({multiple:true});
    cy.get('div.scroll')
      .contains('h5', 'Other Clinically Significant Abnormalities, Specify')
      .click({force:true});
      cy.get('.custom-control.custom-radio')
        .contains('label', 'contains')
        .click({force:true});
        // Select the text box and type into it
        cy.get('div.ml-4.mb-2 input.form-control.form-control-sm').type('a')
    
        cy.wait(5000)
    //                                                                                       Other Clinically Significant Abnormalities
        })

 // Test case 3
 it('All PatientS, Cohort', () => {
    
    const filterRemoveElement = '.position-absolute > img';
    const searchRemoveElement = '.input-group > .text-muted';
    cy.get(searchRemoveElement).click({multiple:true}).clear()
    cy.get(filterRemoveElement).click({ multiple: true });

    // Move to Required worklist
    // goToPatientList('ALL PATIENTS');
    // function goToPatientList(listName) {
    //     cy.get('.nav-link')
    //       .contains(listName)
    //       .click();
    //     }
    // cy.wait(5000)

const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
  //                                                                                                          Cohort
  cy.get(dropdownToggleElement).click({multiple:true});                               
  cy.get('div.scroll')
    .contains('h5', 'Cohort')
    .click();

// Select Check Boxes
cy.get('app-checkbox-group')
  .contains('label', 'LCS')
  .prev('input[type="checkbox"]')
  .check({force:true});
  cy.wait(5000)
//                                                                                                           Cohort
      });

 // Test case 4
 it('All PatientS, Patient Owners', () => {
    const filterRemoveElement = '.position-absolute > img';
    const searchRemoveElement = '.input-group > .text-muted';
    cy.get(searchRemoveElement).click({multiple:true}).clear()
    cy.get(filterRemoveElement).click({ multiple: true });
const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
// Select Filter from drop-down                                                                   Patient Owners
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'Patient Owners')
  .click();

// Select Radio Buttons
  cy.get('div.filterDropdown')
  .contains('label', 'Owner')
  .click({force:true});
  cy.get('.ng-input').click()
  cy.wait(2000)
  cy.get('.ng-dropdown-panel-items > div')
    .contains('Mckenzie Smalling')
    .click()
cy.wait(5000)
//                                                                                                Patient Owners
      });

 // Test case 5
 it('All PatientS, Facility', () => {

    const filterRemoveElement = '.position-absolute > img';
const searchRemoveElement = '.input-group > .text-muted';
cy.get(searchRemoveElement).click({multiple:true}).clear()
cy.get(filterRemoveElement).click({ multiple: true });

    const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
//                                                                                                           Facility
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'Facility')
  .click();

// Select Check Boxes
cy.get('app-checkbox-group')
.contains('label', 'Letters-Dummy')
.prev('input[type="checkbox"]')
.check({force:true});
cy.wait(5000)
//                                                                                                          Facility
          });

 // Test case 6
 it('All PatientS, High Risk Screening - Lung-RADS Score', () => {

    const filterRemoveElement = '.position-absolute > img';
const searchRemoveElement = '.input-group > .text-muted';
cy.get(searchRemoveElement).click({multiple:true}).clear()
cy.get(filterRemoveElement).click({ multiple: true });

    const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
//                                                                                                          High Risk Screening - Lung-RADS Score
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'LCS - Lung-RADS Score')
  .click();

// Select Check Boxes
cy.get('app-checkbox-group')
.contains('label', 'No value')
.prev('input[type="checkbox"]')
.check({force:true});
cy.wait(7000)
//                                                                                                        High Risk Screening - Lung-RADS Score
          });

 // Test case 7
 it('All PatientS, Nodule Size', () => {

    const filterRemoveElement = '.position-absolute > img';
const searchRemoveElement = '.input-group > .text-muted';
cy.get(searchRemoveElement).click({multiple:true}).clear()
cy.get(filterRemoveElement).click({ multiple: true });

    const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
//                                                                                                        Nodule Size
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'Nodule Size (mm)')
  .click();

// Select Radio Buttons
  cy.get('div.filterDropdown')
  .contains('label', 'is empty')
  .click({force:true});
  cy.wait(5000)
//                                                                                                       Nodule Size
          });

 // Test case 8
 it('All PatientS, Communication Type', () => {

    const filterRemoveElement = '.position-absolute > img';
const searchRemoveElement = '.input-group > .text-muted';
cy.get(searchRemoveElement).click({multiple:true}).clear()
cy.get(filterRemoveElement).click({ multiple: true });

    const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
//                                                                                                    Communication Type
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'Communication Type')
  .click();

// Select Radio Buttons
  cy.get('div.filterDropdown')
  .contains('label', 'Letter Sent')
  .click({force:true});
  cy.wait(5000)
//                                                                                                   Communication Type
          });
 

 // Test case 9
 it('All PatientS, Exam Type', () => {

    const filterRemoveElement = '.position-absolute > img';
const searchRemoveElement = '.input-group > .text-muted';
cy.get(searchRemoveElement).click({multiple:true}).clear()
cy.get(filterRemoveElement).click({ multiple: true });

    const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
//                                                                                                        Exam Type
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'Exam Type')
  .click();
cy.wait(2000)
// Select Radio Buttons
  cy.get('.ng-input').click()
  cy.wait(2000)
  cy.get('.ng-dropdown-panel-items > div')
    .contains('LDCT follow-up')
    .click()
cy.wait(5000)
//                                                                                                        Exam Type
          });

 // Test case 10
 it('All PatientS, AAA Status', () => {

    const filterRemoveElement = '.position-absolute > img';
const searchRemoveElement = '.input-group > .text-muted';
cy.get(searchRemoveElement).click({multiple:true}).clear()
cy.get(filterRemoveElement).click({ multiple: true });

    const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
//                                                                                                        AAA Status
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'AAA Status')
  .click();

// Select Check Boxes
cy.get('app-checkbox-group')
.contains('label', 'Potential aneurysm')
.prev('input[type="checkbox"]')
.check({force:true});
cy.wait(5000)
//                                                                                                        AAA Status
          });

 // Test case 11
 it('All PatientS, Date performed', () => {

    const filterRemoveElement = '.position-absolute > img';
const searchRemoveElement = '.input-group > .text-muted';
cy.get(searchRemoveElement).click({multiple:true}).clear()
cy.get(filterRemoveElement).click({ multiple: true });

    const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
//                                                                                                     Date performed
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'Date Performed')
  .click();

// Select Radio Buttons
  cy.get('div.filterDropdown')
  .contains('label', 'is between')
  .click({force:true});
  cy.get('.input.form-control').first().click().type('2023-05-16');
  cy.get('.input.form-control').last().click().type('2023-05-17');
cy.wait(6000)
//                                                                                                    Date Performed
          });

 // Test case 12
 it('All PatientS, Patient Status', () => {

    const filterRemoveElement = '.position-absolute > img';
const searchRemoveElement = '.input-group > .text-muted';
cy.get(searchRemoveElement).click({multiple:true}).clear()
cy.get(filterRemoveElement).click({ multiple: true });

    const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
//                                                                                                        Patient Status
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'Patient Status')
  .click();
cy.wait(2000)
// Select Radio Buttons
  // cy.get('.ng-input').click()
  // cy.wait(2000)
  cy.get('.custom-control.custom-radio')
    .contains('Inactive')
    .click()
cy.wait(7000)
//                                                                                                        Patient Status
          });

 // Test case 13
 it('All PatientS, Patient On-Hold', () => {

    const filterRemoveElement = '.position-absolute > img';
const searchRemoveElement = '.input-group > .text-muted';
cy.get(searchRemoveElement).click({multiple:true}).clear()
cy.get(filterRemoveElement).click({ multiple: true });

    const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
//                                                                                                        Patient On-Hold
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'Patients On-Hold')
  .click();
cy.wait(2000)
// Select Radio Buttons
  // cy.get('.ng-input').click()
  // cy.wait(2000)
  cy.get('.custom-control.custom-radio')
    .contains('Patients not on-hold')
    .click()
cy.wait(5000)
//                                                                                                        Patient On-Hold
          });

 // Test case 14
 it('All PatientS, Other Clinically Significant Abnormalities, Specify', () => {

    const filterRemoveElement = '.position-absolute > img';
const searchRemoveElement = '.input-group > .text-muted';
cy.get(searchRemoveElement).click({multiple:true}).clear()
cy.get(filterRemoveElement).click({ multiple: true });

    const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
//                                                                                 Other Clinically Significant Abnormalities, Specify
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'Other Clinically Significant Abnormalities, Specify')
  .click();
  cy.get('.custom-control.custom-radio')
    .contains('contains')
  // cy.get('.form-control')
  //   .click().type('a')
    // Select the text box and type into it
cy.get('input.form-control').type('a');

    cy.wait(5000)
//                                                                                 Other Clinically Significant Abnormalities, Specify
          });

 // Test case 15
 it('All PatientS, Reason for Discontinue Tracking', () => {

    const filterRemoveElement = '.position-absolute > img';
const searchRemoveElement = '.input-group > .text-muted';
cy.get(searchRemoveElement).click({multiple:true}).clear()
cy.get(filterRemoveElement).click({ multiple: true });

    const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
//                                                                                 Reason for Discontinue Tracking
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'Reason for Discontinue Tracking')
  .click();
cy.wait(2000)
// Select Radio Buttons
  // cy.get('.ng-input').click()
  // cy.wait(2000)
  cy.get('.custom-control.custom-radio')
    .contains('Cancer diagnosis')
    .click()
cy.wait(5000)
//                                                                               Reason for Discontinue Tracking
          });

 // Test case 16
 it('All PatientS, Sex', () => {

    const filterRemoveElement = '.position-absolute > img';
const searchRemoveElement = '.input-group > .text-muted';
cy.get(searchRemoveElement).click({multiple:true}).clear()
cy.get(filterRemoveElement).click({ multiple: true });

    const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
//                                                                               Sex
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'Sex')
  .click();

// Select Check Boxes
cy.get('app-checkbox-group')
.contains('label', 'Female')
.prev('input[type="checkbox"]')
.check({force:true});
cy.wait(7000)
//                                                                               Sex
          });    

 // Test case 17
//  it('Communication, Communication Attempts', () => {

//     const filterRemoveElement = '.position-absolute > img';
// const searchRemoveElement = '.input-group > .text-muted';
// cy.get(searchRemoveElement).click({multiple:true}).clear()
// cy.get(filterRemoveElement).click({ multiple: true });

//     const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
// //                                                                               Sex
// cy.get(dropdownToggleElement).click({multiple:true});
// cy.get('div.scroll')
//   .contains('h5', 'Sex')
//   .click();

// // Select Check Boxes
// cy.get('app-checkbox-group')
// .contains('label', 'Female')
// .prev('input[type="checkbox"]')
// .check({force:true});
// cy.wait(7000)
// //                                                                               Sex
//           });  

})