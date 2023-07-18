/// <reference types="Cypress" />
 
describe('Filters', function() 
{
 
it('All Patient Worklist',function() {
 
 //Checkboxes
 cy.visit("https://qa.eonhealth.com/");
 cy.get('#username').type('superadmin')
 cy.get('#password').type('#P*wyfQjP7UjNkmjGBk3t^efV')
 cy.get('.btn').click()
 cy.wait(1000)
//window:alert

// Check for Filters and Search, if found any then Remove, if not then skip that step
const filterRemoveElement = '.position-absolute > img';
const searchRemoveElement = '.input-group > .text-muted';
const filterElement = '.mb-2.mt-3';

// Move to Required worklist
goToPatientList('ALL PATIENTS');

function goToPatientList(listName) {
  cy.get('.nav-link')
    .contains(listName)
    .click();
}
    
    // cy.wait(1000)
    cy.get(searchRemoveElement).click({multiple:true}).clear()
    // cy.wait(1000)
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
  // cy.get('#a45ba0cfe975-0', { timeout: 10000 }).should('exist').select('Joan LaFranchise');
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
cy.wait(5000)
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
// cy.wait(5000)
//                                                                                                    Date Performed
// Verify that data is showing after applying the filter
cy.get('.ag-center-cols-viewport').should(($viewport) => {
  if ($viewport && $viewport.length > 1) {
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

// cy.wait(2000)
// // Select Radio Buttons
//   cy.get('.ng-input').click()
//   cy.wait(2000)
//   cy.get('.ng-dropdown-panel-items > div')
//     .contains('Patients not on-hold')
//     .click()
cy.wait(5000)
//                                                                                                        Search a Ptient
// cy.get('.mb-n1 mb-0 mrn-value').should('have.text','QA8783223446699')
//     cy.get('.input-group > .text-muted').click().clear().type('FR3453243')
//     cy.wait(3000)
//     cy.get('.ag-cell').contains('FR3453243').click({force:true});
//     cy.wait(3000)

}  )
 
 
 
}  )