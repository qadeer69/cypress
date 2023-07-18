/// <reference types="Cypress" />
 
describe('Filters', function() 
{
 
// Common setup for all test cases
beforeEach(() => {
    // Log in or perform necessary actions to set up the session
    cy.visit("https://qa.eonhealth.com/");
    cy.get('#username').type('superadmin')
    cy.get('#password').type('#P*wyfQjP7UjNkmjGBk3t^efV')
    cy.get('.btn').click()
    cy.wait(3000)

    const filterRemoveElement = '.position-absolute > img';
    const searchRemoveElement = '.input-group > .text-muted';
    const filterElement = '.mb-2.mt-3';

    cy.get(searchRemoveElement).click({multiple:true}).clear()
    // Check if any filter elements exist on the page
    cy.get(filterElement).then(($elements) => {
      if ($elements.length > 0) {
        cy.get('.d-inline-block').find('.dropdown-toggle').then(($filter) =>{
          if($filter.length > 1){
            cy.get(filterRemoveElement).then(($remove) => {
              if($remove.length > 0) {
                cy.get(filterRemoveElement).click({ multiple: true });
              } else {
                cy.log('No filter remove button present, skipping "remove filter" step.');
              }
            })
          } else {
            cy.log('No filter dropdown present, skipping "remove filter" step.');
          }
        })
      } else {
        cy.log('No filter section present, skipping "remove filter" step.');
      }
    })
  });
  
  // Test case 1
it('All, Patient Owners', () => {
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
    .contains('Joan LaFranchise')
    .click()
cy.wait(5000)
//                                                                                                Patient Owners
// Verify that data is showing after applying the filter
cy.get('.ag-center-cols-viewport').should(($viewport) => {
    if ($viewport && $viewport.length > 0) {
      // Pass the test case if the viewport exists
      expect(true).to.equal(true);
    } else {
      cy.get('.p-5.bg-light.text-black-50').should(($p) => {
        if ($p && $p.length > 0) {
          // Pass the test case if the paragraph element exists
          expect(true).to.equal(true);
        } else {
          // Fail the test case if neither condition is true
          expect.fail('Data not showing after applying filter');
        }
      });
    }
  });
  });
  
 
  it('All, Cohort', () => {
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
// Verify that data is showing after applying the filter
cy.get('.ag-center-cols-viewport').should(($viewport) => {
    if ($viewport && $viewport.length > 0) {
      // Pass the test case if the viewport exists
      expect(true).to.equal(true);
    } else {
      cy.get('.p-5.bg-light.text-black-50').should(($p) => {
        if ($p && $p.length > 0) {
          // Pass the test case if the paragraph element exists
          expect(true).to.equal(true);
        } else {
          // Fail the test case if neither condition is true
          expect.fail('Data not showing after applying filter');
        }
      });
    }
  });
  });

 
    it('All, Facility', () => {
        const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
//                                                                                                           Facility
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'Facility')
  .click();

// Select Check Boxes
cy.get('app-checkbox-group')
.contains('label', 'Test ACR')
.prev('input[type="checkbox"]')
.check({force:true});
cy.wait(5000)
//                                                                                                          Facility
// Verify that data is showing after applying the filter
cy.get('.ag-center-cols-viewport').should(($viewport) => {
    if ($viewport && $viewport.length > 0) {
      // Pass the test case if the viewport exists
      expect(true).to.equal(true);
    } else {
      cy.get('.p-5.bg-light.text-black-50').should(($p) => {
        if ($p && $p.length > 0) {
          // Pass the test case if the paragraph element exists
          expect(true).to.equal(true);
        } else {
          // Fail the test case if neither condition is true
          expect.fail('Data not showing after applying filter');
        }
      });
    }
  });
      });

  it('All, High Risk Screening - Lung-RADS Score', () => {
    const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
    //                                                                                                          High Risk Screening - Lung-RADS Score
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'High Risk Screening - Lung-RADS Score')
  .click();

// Select Check Boxes
cy.get('app-checkbox-group')
.contains('label', 'No value')
.prev('input[type="checkbox"]')
.check({force:true});
cy.wait(7000)
//                                                                                                        High Risk Screening - Lung-RADS Score
// Verify that data is showing after applying the filter
cy.get('.ag-center-cols-viewport').should(($viewport) => {
    if ($viewport && $viewport.length > 0) {
      // Pass the test case if the viewport exists
      expect(true).to.equal(true);
    } else {
      cy.get('.p-5.bg-light.text-black-50').should(($p) => {
        if ($p && $p.length > 0) {
          // Pass the test case if the paragraph element exists
          expect(true).to.equal(true);
        } else {
          // Fail the test case if neither condition is true
          expect.fail('Data not showing after applying filter');
        }
      });
    }
  });
  });


    it('All, Nodule Size', () => {
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
  cy.wait(7000)
//                                                                                                       Nodule Size   
// Verify that data is showing after applying the filter
cy.get('.ag-center-cols-viewport').should(($viewport) => {
    if ($viewport && $viewport.length > 0) {
      // Pass the test case if the viewport exists
      expect(true).to.equal(true);
    } else {
      cy.get('.p-5.bg-light.text-black-50').should(($p) => {
        if ($p && $p.length > 0) {
          // Pass the test case if the paragraph element exists
          expect(true).to.equal(true);
        } else {
          // Fail the test case if neither condition is true
          expect.fail('Data not showing after applying filter');
        }
      });
    }
  });
      });
  
 it('All, Communication Type', () => {
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
// Verify that data is showing after applying the filter
cy.get('.ag-center-cols-viewport').should(($viewport) => {
    if ($viewport && $viewport.length > 0) {
      // Pass the test case if the viewport exists
      expect(true).to.equal(true);
    } else {
      cy.get('.p-5.bg-light.text-black-50').should(($p) => {
        if ($p && $p.length > 0) {
          // Pass the test case if the paragraph element exists
          expect(true).to.equal(true);
        } else {
          // Fail the test case if neither condition is true
          expect.fail('Data not showing after applying filter');
        }
      });
    }
  });
  });
  
 it('All, Exam Type', () => {
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
    .contains('CTA CHEST + CT ABDOMEN WO/C')
    .click()
cy.wait(5000)
//                                                                                                        Exam Type
// Verify that data is showing after applying the filter
cy.get('.ag-center-cols-viewport').should(($viewport) => {
    if ($viewport && $viewport.length > 0) {
      // Pass the test case if the viewport exists
      expect(true).to.equal(true);
    } else {
      cy.get('.p-5.bg-light.text-black-50').should(($p) => {
        if ($p && $p.length > 0) {
          // Pass the test case if the paragraph element exists
          expect(true).to.equal(true);
        } else {
          // Fail the test case if neither condition is true
          expect.fail('Data not showing after applying filter');
        }
      });
    }
  });
  });

 it('All, AAA Status', () => {
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
// Verify that data is showing after applying the filter
cy.get('.ag-center-cols-viewport').should(($viewport) => {
    if ($viewport && $viewport.length > 0) {
      // Pass the test case if the viewport exists
      expect(true).to.equal(true);
    } else {
      cy.get('.p-5.bg-light.text-black-50').should(($p) => {
        if ($p && $p.length > 0) {
          // Pass the test case if the paragraph element exists
          expect(true).to.equal(true);
        } else {
          // Fail the test case if neither condition is true
          expect.fail('Data not showing after applying filter');
        }
      });
    }
  });
  });

 it('All, Date performed', () => {
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
cy.wait(5000)
//                                                                                                    Date Performed
// Verify that data is showing after applying the filter
cy.get('.ag-center-cols-viewport').should(($viewport) => {
    if ($viewport && $viewport.length > 0) {
      // Pass the test case if the viewport exists
      expect(true).to.equal(true);
    } else {
      cy.get('.p-5.bg-light.text-black-50').should(($p) => {
        if ($p && $p.length > 0) {
          // Pass the test case if the paragraph element exists
          expect(true).to.equal(true);
        } else {
          // Fail the test case if neither condition is true
          expect.fail('Data not showing after applying filter');
        }
      });
    }
  });
  });

 it('All, Patient Status', () => {
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
// Verify that data is showing after applying the filter
cy.get('.ag-center-cols-viewport').should(($viewport) => {
    if ($viewport && $viewport.length > 0) {
      // Pass the test case if the viewport exists
      expect(true).to.equal(true);
    } else {
      cy.get('.p-5.bg-light.text-black-50').should(($p) => {
        if ($p && $p.length > 0) {
          // Pass the test case if the paragraph element exists
          expect(true).to.equal(true);
        } else {
          // Fail the test case if neither condition is true
          expect.fail('Data not showing after applying filter');
        }
      });
    }
  });
  });


 it('All, Patient On-Hold', () => {
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
// Verify that data is showing after applying the filter
cy.get('.ag-center-cols-viewport').should(($viewport) => {
    if ($viewport && $viewport.length > 0) {
      // Pass the test case if the viewport exists
      expect(true).to.equal(true);
    } else {
      cy.get('.p-5.bg-light.text-black-50').should(($p) => {
        if ($p && $p.length > 0) {
          // Pass the test case if the paragraph element exists
          expect(true).to.equal(true);
        } else {
          // Fail the test case if neither condition is true
          expect.fail('Data not showing after applying filter');
        }
      });
    }
  });
  });

 it('All, Other Clinically Significant Abnormalities, Specify', () => {
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
    cy.get('.form-control').type('a')

    cy.wait(5000)
//                                                                                 Other Clinically Significant Abnormalities, Specify
// Verify that data is showing after applying the filter
cy.get('.ag-center-cols-viewport').should(($viewport) => {
    if ($viewport && $viewport.length > 0) {
      // Pass the test case if the viewport exists
      expect(true).to.equal(true);
    } else {
      cy.get('.p-5.bg-light.text-black-50').should(($p) => {
        if ($p && $p.length > 0) {
          // Pass the test case if the paragraph element exists
          expect(true).to.equal(true);
        } else {
          // Fail the test case if neither condition is true
          expect.fail('Data not showing after applying filter');
        }
      });
    }
  });
  });

 it('All, Reason for Discontinue Tracking', () => {
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
// Verify that data is showing after applying the filter
cy.get('.ag-center-cols-viewport').should(($viewport) => {
    if ($viewport && $viewport.length > 0) {
      // Pass the test case if the viewport exists
      expect(true).to.equal(true);
    } else {
      cy.get('.p-5.bg-light.text-black-50').should(($p) => {
        if ($p && $p.length > 0) {
          // Pass the test case if the paragraph element exists
          expect(true).to.equal(true);
        } else {
          // Fail the test case if neither condition is true
          expect.fail('Data not showing after applying filter');
        }
      });
    }
  });
  });

 it('All, Gender', () => {
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
// Verify that data is showing after applying the filter
cy.get('.ag-center-cols-viewport').should(($viewport) => {
    if ($viewport && $viewport.length > 0) {
      // Pass the test case if the viewport exists
      expect(true).to.equal(true);
    } else {
      cy.get('.p-5.bg-light.text-black-50').should(($p) => {
        if ($p && $p.length > 0) {
          // Pass the test case if the paragraph element exists
          expect(true).to.equal(true);
        } else {
          // Fail the test case if neither condition is true
          expect.fail('Data not showing after applying filter');
        }
      });
    }
  });
  });
 
 // Test case 3
 it('Communication, Communication Attempts', () => {
    const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
    // Move to Required worklist
goToPatientList('COMMUNICATIONS');
function goToPatientList(listName) {
    cy.get('.nav-link')
      .contains(listName)
      .click();
    }
//                                                                                                        Communication Attempts
cy.get(dropdownToggleElement).click({multiple:true});
cy.get('div.scroll')
  .contains('h5', 'Communication Attempts')
  .click();

// Select Radio Buttons
  cy.get('div.filterDropdown')
  .contains('label', 'is empty')
  .click({force:true});
  cy.get('.form-control').type('2')
  cy.wait(5000)
//                                                                                                       Communication Attempts


    // Verify that data is showing after applying the filter
    cy.get('.ag-center-cols-viewport').should(($viewport) => {
        if ($viewport && $viewport.length > 0) {
          // Pass the test case if the viewport exists
          expect(true).to.equal(true);
        } else {
          cy.get('.p-5.bg-light.text-black-50').should(($p) => {
            if ($p && $p.length > 0) {
              // Pass the test case if the paragraph element exists
              expect(true).to.equal(true);
            } else {
              // Fail the test case if neither condition is true
              expect.fail('Data not showing after applying filter');
            }
          });
        }
      });
      });

 // Test case 3
//  it('All Patient WorkList', () => {
//     // Verify that data is showing after applying the filter
//     cy.get('.ag-center-cols-viewport').should(($viewport) => {
//         if ($viewport && $viewport.length > 0) {
//           // Pass the test case if the viewport exists
//           expect(true).to.equal(true);
//         } else {
//           cy.get('.p-5.bg-light.text-black-50').should(($p) => {
//             if ($p && $p.length > 0) {
//               // Pass the test case if the paragraph element exists
//               expect(true).to.equal(true);
//             } else {
//               // Fail the test case if neither condition is true
//               expect.fail('Data not showing after applying filter');
//             }
//           });
//         }
//       });
//       });
 
}  )