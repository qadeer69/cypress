/// <reference types="cypress" />

 describe('Test Suite', function(){


 it('login',function() {

cy.visit("https://qa.eonhealth.com/");
cy.get('#username').type('qadeer')
cy.get('#password').type('M#)2@{N8N$j1')
cy.get('.btn').click()
cy.wait(4000);
// Check for Filters and Search, if found any then Remove, if not then skip that step
const filterRemoveElement = '.position-absolute > img';
const searchRemoveElement = '.input-group > .text-muted';
const filterElement = '.mb-2.mt-3';
    
    cy.wait(1000)
    cy.get(searchRemoveElement).click().clear()
    cy.wait(1000)
    // Check if any filter elements exist on the page
    cy.get(filterElement).then(($elements) => {
      if ($elements.length > 0) {
        cy.get('.d-inline-block').find('.dropdown-toggle').then(($filter) =>{
          if($filter.length > 2){
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

    goToPatientList('ALL PATIENT');

    function goToPatientList(listName) {
      cy.get('.nav-link')
        .contains(listName)
        .click();
    }

    
    
       
        // cy.get('.d-inline-block > .dropdown-toggle').find(filterRemoveElement).then(($dropdownElements) => {
        //   if ($dropdownElements.length > 0) {
        //     cy.get(filterRemoveElement).click({ multiple: true });
        //   } else {
        //     cy.log('No filter dropdown present, skipping "remove filter" step.');
        //   }
        // });
    //   } else {
    //     cy.log('No filter section present, skipping "remove filter" step.');
    //   }
    // });
    
    
    
    
    
    // try {
    //     cy.get(filterRemoveElement, { timeout: 0 }).click({ multiple: true });
    //     cy.log('Filters removed successfully.');
    //   } catch (error) {
    //     cy.log('No filters applied, skipping "remove filter" step.');
    //   }


//Cohort Filter Variables                                                                 Cohort
const dropdownToggleElement = '.mb-2 > .d-inline-block > .dropdown-toggle';
const filterOptionElement = '.scroll > :nth-child(1)';
const lcsCheckboxElement = '#cohortId-checkbox-5';
const lungCheckboxElement = '#cohortId-checkbox-6';
const CACCheckboxElement = '#cohortId-checkbox-3';


// Click on the dropdown toggle to open the dropdown menu
cy.get(dropdownToggleElement).click({multiple:true});

// Select the desired option from the dropdown menu
cy.contains(filterOptionElement, 'Cohort').click();

// Check the desired checkboxes in the filter
const cohortcheckboxes = [CACCheckboxElement];
cohortcheckboxes.forEach((checkbox) => {
  cy.get(checkbox).click({ force: true });
});
// cy.contains('.custom-control.custom-checkbox', 'AAA)').find('input[type="checkbox"]').check({force:true});
cy.wait(3000);
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

// Wait for the web page to update                                                    cohort
cy.wait(1000);    



// Facility Filter Variables                                                           Facility
// const facilityCheckboxElement1 = '#facilityId-checkbox-0';
// const facilityCheckboxElement2 = '#facilityId-checkbox-1';
// const facilityCheckboxElement3 = '#facilityId-checkbox-2';
// const cohortOptionElement = '.scroll > :nth-child(2)';
// cy.get(dropdownToggleElement).click({multiple:true});
// cy.contains(cohortOptionElement, 'Facility').click();

// const facilitycheckboxes = [facilityCheckboxElement1, facilityCheckboxElement2, facilityCheckboxElement3];
// facilitycheckboxes.forEach((checkbox) => {
//   cy.get(checkbox).click({ force: true });
// });
// // Wait for the web page to update                                                    Facility
// cy.wait(1000);                                                                        


// Patient Owner Filter Variables                                                             Patient Owner
// const patientownerRadioButton1 = '#patientOwners-radio-1';
// const patientownerOptionElement = '.scroll > :nth-child(3)';

// cy.get(dropdownToggleElement).click({multiple:true});
// cy.contains(patientownerOptionElement, 'Patient Owner').click();
// cy.get(patientownerRadioButton1).click({force:true})
// // Wait for the web page to update                                                         Patient Owner
// cy.wait(1000);  

// Lung Nodule Filter Variables                                                             Lung Nodule
// const lungnoduleRadioButton1 = ('[id="is greater than-templateFinding.352"]');
// const lungnoduleOptionElement = '.scroll > :nth-child(9)';
// const textBoxElement = '.ml-4.mb-2';

// cy.get(dropdownToggleElement).click({multiple:true});
// cy.contains(lungnoduleOptionElement, 'Lung - Nodule Size (mm)').click();
// cy.get(lungnoduleRadioButton1).click({force:true})
// // Wait for the web page to update                                                            Lung Nodule
// cy.wait(1000);  
// cy.get(textBoxElement).type('99')


// // Ordering Practitioner NPI Filter Variables                                                    Ordering Practitioner NPI
// const OrderingPractitionerNPITextBox = '.pt-2.filterDropdown';
// const OrderingPractitionerNPIOptionElement = '.scroll > :nth-child(29)';
// const selectOrderingPractitionerNPI = '.ng-dropdown-panel-items.scroll-host > div > .ng-option.ng-option-marked';
// // const selectOrderingPractitionerNPI = '#a8e406684e9f-0';

// cy.get(dropdownToggleElement).click({multiple:true});
// cy.contains(OrderingPractitionerNPIOptionElement, 'Ordering Practitioner NPI').click();
// cy.get(OrderingPractitionerNPITextBox).click() // or .type('qadeer')
// // Wait for the web page to update                                                                Ordering Practitioner NPI
// cy.wait(1000);  

// cy.get(selectOrderingPractitionerNPI).click({force:true})



// Date Performed Filter Variables                                                    Date Performed
// const DatePerformedRadioButton = ('[id="is before-examData.23"]');
// const DatePerformedOptionElement = '.scroll > :nth-child(18)';
// const selectDatePerformed = '.input.form-control';

// cy.get(dropdownToggleElement).click({multiple:true});
// cy.contains(DatePerformedOptionElement, 'Date Performed').click();
// cy.get(DatePerformedRadioButton).click({force:true})
// // Wait for the web page to update                                                                Date Performed
// cy.wait(1000);  

// cy.get(selectDatePerformed).click().type('2023-03-15')

// cy.wait(6000)
// cy.get(filterRemoveElement).click({ multiple: true });

//Lung-Rads Score Filter Variables                                                             Lung-Rads Score
// const lungradsRadioButton1 = '#examData.926-checkbox-0';
// const lungradsOptionElement = '.scroll > :nth-child(25)';

// cy.get(dropdownToggleElement).click({multiple:true});
// cy.contains(lungradsOptionElement, 'Lung-RADS Score').click();
// cy.wait(2000);

// cy.contains('.custom-control.custom-checkbox', '0 - recalls (incomplete screen)').find('input[type="checkbox"]').check({force:true});

// Wait for the web page to update                                                         Lung-Rads Score
// cy.wait(1000);  







// Wait for the filter to be applied and check that the expected results are displayed
// cy.get('.filtered-results').should('contain', 'Option 1');
// cy.get('.filtered-results').should('contain', 'Option 2');

    


    // cy.get('.filter-input').type('Option 1'); // type in the text to filter options
    // cy.get('.filter-list').contains('Option 1').click(); // select the desired option from the filtered list
    



//     cy.get('.add-btn').click()
//     cy.wait(1000)
//     cy.get('#cohortId').select('LCS')
//     cy.get('input[placeholder="Select Exam Type"]').click()
//     cy.get('button.dropdown-item').contains('Low Dose CT').click({force:true})
//     //First Name, MRN, Last Name
//     cy.get('input[placeholder="Enter First Name"]').click().type('Muaz')
//     cy.get('input[placeholder="Enter Last Name"]').click().type('Khan')
//     cy.get('input[placeholder="Enter URN"]').click().type('8687348')
//     cy.get('input[placeholder="Enter MRN"]').click().type('MUA249849')
    
//     //Date Performed
//     // cy.get(':nth-child(6) > .d-block > :nth-child(2) > .row > .col > app-date-picker.ng-pristine > .input-group > .ng-pristine').click().type('01-02-2023')
//     cy.get('input[placeholder="Select Date Performed"]').click().type('2023-03-15')
//     //Date of Birth
//     cy.get('.ng-invalid > .input-group > .ng-untouched').click().type('1972-03-15')
    
//     //SEX
//     cy.get('#5').select(1)
//     // // // cy.get('input[placeholder="Select Sex"]').click()
//     // // // cy.get('.dropdown-menu.show').contains('Male').click({force:true})
//     // //Select Facility & SEX
//     // cy.get('input[placeholder="Select Sex"]').click()
//     // cy.get('.dropdown-menu.show').contains('Male').click({force:true})
//     // cy.wait(500)
//     cy.get('input[placeholder="Select Facility"]').click()
//     cy.get('.dropdown-menu.show').contains('facility1').click({force:true})

//     //Save Button
//     cy.get('app-spinner > span').click()
    
//     cy.wait(10000)

// // Back to patients list
    

//     cy.get(':nth-child(2) > .route-link').click()

// // Clear Search before searching patient


//     // cy.get('.mb-n1 mb-0 mrn-value').should('have.text','QA8783223446699')
//     cy.get('.input-group > .text-muted').click().clear().type('MUA249849')
//     cy.wait(10000)
//     // cy.get('div[col-id="patientData.2"]').each($el => {
//     //     cy.log($el.text())
//     //       expect($el.text()).equal('AT1234')
//     //   })
//     cy.get('.ag-cell').contains('MUA249849').click({force:true});
//     cy.wait(5000)
    
// //CREATING A FOLLOWUP Performed Exam


//         cy.get('.d-flex > .badge').should('be.visible').click({force:true})
//         cy.wait(5000)
//         cy.get('input[placeholder="Select Exam Type"]').click()
//         cy.get('button.dropdown-item').contains('Bronchoscopy').click({force:true})
//         cy.get(6000)
//         cy.get('input[placeholder="Select Date Performed"]').click().type('2023-03-21')
//         cy.get('.col-12 > .btn').click()
//         cy.wait(7000)
//         cy.get('.close > .mt-n3').click()
//         cy.wait(1000)
    
//     //CREATING A FOLLOWUP Expected Exam
    

//         cy.get('.d-flex > .badge').should('be.visible').click({force:true})
//         cy.wait(5000)
//         cy.get('input[placeholder="Select Exam Type"]').click()
//         cy.get('button.dropdown-item').contains('LDCT follow-up').click({force:true})
//         cy.get(6000)
//         cy.get('input[placeholder="Select Date Expected"]').click().type('2023-04-15')
//         cy.get('.col-12 > .btn').click()
//         cy.wait(7000)
//         cy.get(':nth-child(2) > .route-link').click()
//         cy.wait(1000)
//         cy.get('.close > .mt-n3').click()
//         cy.wait(1000)
    
//     //CREATING A FOLLOWUP Scheduled Exam
    

//         cy.get('.d-flex > .badge').should('be.visible').click({force:true})
//         cy.wait(5000)
//         cy.get('input[placeholder="Select Exam Type"]').click()
//         cy.get('button.dropdown-item').contains('Needle biopsy').click({force:true})
//         cy.get(6000)
//         cy.get('input[placeholder="Select Date Expected"]').click().type('2023-05-15')
//         cy.get('.col-12 > .btn').click()
//         cy.wait(7000)
//         // cy.get(':nth-child(2) > .route-link').click()
//         // cy.wait(1000)
//         cy.get('.close > .mt-n3').click()
//         cy.wait(1000)
//       //Filters  

//       cy.get('#ngb-nav-39 > .cell').click()
//       cy.get('.mb-2 > .d-inline-block > .dropdown-toggle').click()
    })
    
    //CREATING A FOLLOWUP EXAM Expected
    
    // cy.get('p[contains(text(),'INCOMPLETE')]').click({force:true})
//     cy.get('.nav').find('.py-0-nav-link').each(($el, index, $list) => {
//         const listtext=$el.find('.flex-column.align-items-center.d-table-cell.align-middle.py-3.cell').text()
//         if(listtext.includes('UPCOMING'))
//         {
//             cy.wrap($el).click()
//         }
//     }
// )
    //CREATING A FOLLOWUP EXAM 
    // cy.get('.d-flex > .badge').should('be.visible').click({force:true})
    // cy.wait(5000)
    // cy.get('input[placeholder="Select Exam Type"]').click()
    // cy.get('button.dropdown-item').contains('Bronchoscopy').click({force:true})
    // cy.get(6000)
    // cy.get('input[placeholder="Select Date Scheduled"]').click().type('2023-05-15')
    // cy.get('.col-12 > .btn').click()
    // cy.wait(7000)


// it('Test case',function() {
//     // cy.get('.input-group').type('QA8783223344').click()
// cy.get('.text-muted').click().clear().type('QA123')
//  cy.wait(5000)
// //  cy.get('div[col-id="patientData.2"]').contains('QQA8783223344').click()
// //  cy.get('[comp-id="27"]').click()
// cy.get('.ag-row-hover > .ag-column-hover').click()
// })
})