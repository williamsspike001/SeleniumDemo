import {DataPickers, DatePickers} from "../fixtures/selectors.js"

describe("DataPickers",function(){
    beforeEach("",function(){
        cy.visit("/")
    })

    it("Should be able to complete Boot Strap Date Picker",function(){
       cy.get(DatePickers.DatePickersDropDown).click()
       cy.get(DatePickers.BootStrapDatePicker).click()
       cy.get(DatePickers.SelectDate).click()
       cy.get(DatePickers.SelectDate1).click()
       cy.get(DatePickers.SelectDateRange).click()
       cy.get(DatePickers.SelectDate21).click()
       cy.get(DatePickers.SelectDateRange2).click()
       cy.get(DatePickers.SelectDate30).click()
    })

    it("Should be able to complete Jquery Date Pickers",function(){
       cy.get(DatePickers.DatePickersDropDown).click()
       cy.get(DatePickers.JqueryDatePicker).click()
       //cy.xpath(DataPickers.JqDFrom).click()
       //cy.get(DataPickers.JqueryDateTo).click()





})
    })  