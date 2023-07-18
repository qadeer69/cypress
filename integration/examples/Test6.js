describe('Centralization Testing access', () => {
    it('Cm-Testing', () => {
        cy.visit('centralization-testing.eonhealth.com')
        cy.get('#username').type('umer.waseem@eonhealth.com')
        cy.get('#password').type('umerwaseem')
        cy.get('#login').click()
        //cy.get('.btn-group > :nth-child(1)').click() // FORLCS 
        cy.wait(3000)
        //cy.get('.ag-row-last > [aria-colindex="1"]').click()
        
       // cy.get('[row-index="1"] > [aria-colindex="1"]').click()  //FOR UNIVERSITY OF CO SELECTION
       // cy.get('.btn-group > :nth-child(1)').click()
       // cy.wait(2000)

     /*                              ****5DAYS UPCOMING BREAST LPNT***
       
    cy.get('.col-sm-5 > .ng-select > .ng-select-container > .ng-clear-wrapper').click()
    cy.get('.col-sm-5 > .ng-select > .ng-select-container > .ng-arrow-wrapper').click()
    cy.get('#item-1').click({force:true})
    cy.wait(6000)
    //cy.get('#ag-input-id-47').check({force:true})
    cy.wait(4000)
    cy.get('.mr-2').click()
    cy.get('#automate-button > span').click()


    //*************30DAYS UPCOMING************************ */

    /*cy.get('.col-sm-5 > .ng-select > .ng-select-container > .ng-clear-wrapper').click()
    cy.get('.col-sm-5 > .ng-select > .ng-select-container > .ng-arrow-wrapper').click()
    cy.get('#item-3').click({force:true})
    cy.wait(6000)
    cy.get('#ag-input-id-47').check({force:true})
    cy.wait(4000)
    cy.get('.mr-2').click()
    cy.get('#automate-button > span').click()



    //*********************15DAYS UPCOMING **CALL VERIFICATION SCRIPT */
    /*cy.get('.col-sm-5 > .ng-select > .ng-select-container > .ng-clear-wrapper').click()
    cy.get('.col-sm-5 > .ng-select > .ng-select-container > .ng-arrow-wrapper').click()
    cy.get('#item-2').click({force:true})
    cy.get('.mr-2').click()
    cy.wait(1000)
    cy.wait(2000)
    cy.get('.ag-body-horizontal-scroll-viewport').scrollTo('center') //FOR SCROLLING TO CENTER 
    //cy.get('#customSwitch10').check({force:true})   ****** BY ELEMENT ID *********
    cy.xpath('/html/body/app-root/div/div/app-communication/div/div/div/app-communication-list/div[2]/app-data-grid/ag-grid-angular/div/div[1]/div/div[3]/div[2]/div/div/div/div[2]/div/span/app-data-grid-check-box/div/input').check({force:true}) //IF BOTH CALLS ARE TO BE PERFORMED ONE IS CATERED BY ELEMENT ID THE OTHER ONE IS CATERED BY XPATH.
    cy.get('#call_type').select(1)
    cy.get('#call_outcome').select(2)
    cy.get('#note').type('Test Note')
    cy.get('.btn-primary').click()
    */
  

    //  *****************************60daysOverdue (SCHEDULED)*****************************
    /*cy.get('.col-sm-5 > .ng-select > .ng-select-container > .ng-clear-wrapper').click()
    cy.get('.col-sm-5 > .ng-select > .ng-select-container > .ng-arrow-wrapper').click()
    cy.get('#item-7').click({force:true})
    cy.get('.mr-2').click()
    cy.wait(1000)
    cy.get('#ag-input-id-53').check({force:true})
    cy.wait(4000)
    cy.get('.mr-2').click()
    cy.get('#automate-button > span').click() */

       //******************5 DAYS LCS UPCOMING FOR UCH LOGIC */

       /* cy.get('.col-sm-5 > ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true})  ///******* USING TO REMOVE UI GLITCH********** */
       //cy.get('.col-sm-4 > ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true}) ///******REMOVING UI GLITCH */


       //cy.get('.col-sm-5 > .ng-select-bottom > .ng-select-container > .ng-clear-wrapper').click()
       //cy.get('.col-sm-5 > .ng-select > .ng-select-container > .ng-arrow-wrapper').click()

       //cy.get('#item-1').click({force:true})
       //cy.wait(6000)
       //cy.get('.btn-group > :nth-child(1)').click()
       //cy.get('.col-sm-5 > .ng-select-bottom > .ng-select-container > .ng-clear-wrapper').click()
       //cy.get('.col-sm-5 > .ng-select > .ng-select-container > .ng-arrow-wrapper').click()
       //cy.get('#item-1').click({force:true})
       //cy.wait(2000)
       //cy.get('#ag-input-id-113').check({force:true})
      // cy.wait(4000)
       //cy.get('#automate-button > span').click()

       //***********************30 DAYS UPCOMING FOR THYROID CM SURVEILANCE */
      // cy.get('.btn-group > :nth-child(5)').click()
       //cy.get('[row-index="1"] > [aria-colindex="1"]').click()
       //cy.wait(12000)
       //cy.get('#ag-450-input').check()
       //cy.get('#automate-button').click()


       //******************14 days Upcoming For Thyroid CM Surveillance */
      // cy.get('.btn-group > :nth-child(5)').click()
      // cy.get('[row-index="1"] > [aria-colindex="1"]').click()
      // cy.wait(12000)
       //cy.get(':nth-child(13) > .ng-value-icon').click()
       //cy.get(':nth-child(12) > .ng-value-icon').click()
       //cy.get(':nth-child(11) > .ng-value-icon').click()
       //cy.get(':nth-child(10) > .ng-value-icon').click()
       //cy.get(':nth-child(9) > .ng-value-icon').click()
       //cy.get(':nth-child(8) > .ng-value-icon').click()
       //cy.get(':nth-child(7) > .ng-value-icon').click()
      // cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(6) > .ng-value-icon').click()
      // cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(4) > .ng-value-icon').click()
      // cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(3) > .ng-value-icon').click()
      // cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(2) > .ng-value-icon').click()
       //cy.get('.ag-body-horizontal-scroll-viewport').scrollTo('center')
      // cy.wait(2000)
      // cy.get('#customSwitch12').check() //This id varies according to the position of the patient appearing on CM 

       //cy.get('#call_type').select(1)
       //cy.get('#call_outcome').select(2)
       //cy.get('#note').type('Test Note')
      // cy.get('.btn-primary').click()

       //************************************14 days  upcoming for thyroid without PCP so call first and then letter sending */
      // cy.get('.btn-group > :nth-child(5)').click()
      //cy.get('[row-index="1"] > [aria-colindex="1"]').click()
      // cy.wait(12000)
      // cy.get(':nth-child(13) > .ng-value-icon').click()
      // cy.get(':nth-child(12) > .ng-value-icon').click()
      // cy.get(':nth-child(11) > .ng-value-icon').click()
      // cy.get(':nth-child(10) > .ng-value-icon').click()
      // cy.get(':nth-child(9) > .ng-value-icon').click()
      //cy.get(':nth-child(8) > .ng-value-icon').click()
       //cy.get(':nth-child(7) > .ng-value-icon').click()
       //cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(6) > .ng-value-icon').click()
       //cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(4) > .ng-value-icon').click()
       //cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(3) > .ng-value-icon').click()
       //cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(2) > .ng-value-icon').click()
       //cy.get('.ag-body-horizontal-scroll-viewport').scrollTo('center')
       //cy.wait(2000)
       //cy.get('#customSwitch13').check() //This id varies according to the position of the patient appearing on CM 
       //cy.get('#call_type').select(1)
       //cy.get('#call_outcome').select(2)
       //cy.get('#note').type('Test Note')
       //cy.get('.btn-primary').click()
       //cy.xpath('/html/body/app-root/div/div/app-communication/div/div/div/app-communication-list/div[2]/app-data-grid/ag-grid-angular/div/div[1]/div[2]/div[1]/div[2]/div/div/div[6]/div[2]/div[2]/input').check({force:true})
       //cy.get('#ag-480-input').click()
       //cy.get('#automate-button').click()



       //************************** 14 days patient not scheduled call then Shceduled letter ******************
      /* cy.get('.btn-group > :nth-child(5)').click()
      cy.get('[row-index="1"] > [aria-colindex="1"]').click()
       cy.wait(12000)
       cy.get(':nth-child(13) > .ng-value-icon').click()
       cy.get(':nth-child(12) > .ng-value-icon').click()
       cy.get(':nth-child(11) > .ng-value-icon').click()
       cy.get(':nth-child(10) > .ng-value-icon').click()
       cy.get(':nth-child(9) > .ng-value-icon').click()
      cy.get(':nth-child(8) > .ng-value-icon').click()
       cy.get(':nth-child(7) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(6) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(4) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(3) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(2) > .ng-value-icon').click()
       cy.get('.ag-body-horizontal-scroll-viewport').scrollTo('center')
       cy.wait(2000)
       cy.get('#customSwitch16').check() //This id varies according to the position of the patient appearing on CM 
       cy.get('#call_type').select(1)
       cy.get('#call_outcome').select(2)
       cy.get('#note').type('Test Note')
       cy.get('.btn-primary').click()*/
       


/*cy.get('.btn-group > :nth-child(5)').click()
      cy.get('[row-index="1"] > [aria-colindex="1"]').click()
       cy.wait(12000)
       cy.get(':nth-child(13) > .ng-value-icon').click()
       cy.get(':nth-child(12) > .ng-value-icon').click()
       cy.get(':nth-child(11) > .ng-value-icon').click()
       cy.get(':nth-child(10) > .ng-value-icon').click()
       cy.get(':nth-child(9) > .ng-value-icon').click()
      cy.get(':nth-child(8) > .ng-value-icon').click()
       cy.get(':nth-child(7) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(6) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(4) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(3) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(2) > .ng-value-icon').click()
       cy.get('#ag-490-input').should('be.visible').check()
//cy.get('#ag-490-input').check({force:true})
       cy.wait(4000)
       cy.get('#automate-button').click()
       //cy.get('#ag-490-input').check({force:true})
       //cy.get('#automate-button').click()
       */

 ///****************************************20DAYS OVERDUE EXPECTED WITHOUT PROVIDER ********* */
 /*cy.get('.btn-group > :nth-child(5)').click()
      cy.get('[row-index="1"] > [aria-colindex="1"]').click()
       cy.wait(12000)
       cy.get(':nth-child(13) > .ng-value-icon').click()
       cy.get(':nth-child(12) > .ng-value-icon').click()
       cy.get(':nth-child(11) > .ng-value-icon').click()
       cy.get(':nth-child(10) > .ng-value-icon').click()
       cy.get(':nth-child(9) > .ng-value-icon').click()
       cy.get(':nth-child(8) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(6) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(4) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(3) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(2) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(2) > .ng-value-icon').click()
       cy.wait(2000)
       cy.get('#ag-490-input').check()
       cy.wait(2000)
       cy.get('#automate-button').click()
       cy.wait(3000)
       cy.get('.ag-body-horizontal-scroll-viewport').scrollTo('center')
       cy.wait(2000)
       cy.get('#customSwitch12').check()
       cy.get('#call_type').select(2)
       cy.get('#call_outcome').select(2)
       cy.get('#note').type('Test Note')
       cy.get('.btn-primary').click()
       cy.wait(1000)
*/

// Move to Required Cohort
goToSiteCohort('Thyroid');

function goToSiteCohort(listName) {
  cy.get('.btn-group')
    .contains(listName)
    .click();
}



// cy.get('.btn-group > :nth-child(5)').click()
      cy.get('[row-index="1"] > [aria-colindex="1"]').click()
       cy.wait(14000)
       cy.get(':nth-child(13) > .ng-value-icon').click()
       cy.get(':nth-child(12) > .ng-value-icon').click()
       cy.get(':nth-child(11) > .ng-value-icon').click()
       cy.get(':nth-child(10) > .ng-value-icon').click()
       cy.get(':nth-child(8) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(6) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(4) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(3) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(2) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(2) > .ng-value-icon').click()
       cy.get('.col-sm-5 > .ng-select-multiple > .ng-select-container > .ng-value-container > :nth-child(2) > .ng-value-icon').click()
       cy.wait(2000)
       //cy.get('.ag-body-horizontal-scroll-viewport').scrollTo('center')
       cy.wait(2000)
       //cy.get('#customSwitch13').click()
      // cy.get('#call_type').select(2)
       //cy.get('#call_outcome').select(2)
       //cy.get('#note').type('Test Note')
       //cy.get('.btn-primary').click()
      // cy.wait(4000)
      // cy.xpath('/html/body/app-root/div/div/app-communication/div/div/div/app-communication-list/div[2]/app-data-grid/ag-grid-angular/div/div[1]/div[2]/div[1]/div[2]/div/div/div[1]/div[2]/div[2]/input').check({force:true})
    //   cy.get('#ag-365-input').check()
    // var checkbox = document.querySelector('input[type="checkbox"][aria-label="Press Space to toggle all rows selection (checked)"]');
    // cy.get('.ag-header > .ag-header-cell > .ag-labeled')
    // .prev('input[type="checkbox"]')
    // .check({force:true});
    cy.get('.ag-checkbox-input')
    cy.get('input[type="checkbox"]').check({multiple: true, force: true});

//     var checkbox = document.querySelector(".ag-checkbox-input");
// checkbox.checked = true; // or false to uncheck the checkbox


    // .check({force:true});

       cy.wait(2000)
       cy.get('#automate-button').click()
       cy.wait(4000)
      })
})