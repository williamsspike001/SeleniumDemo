import {inputForms} from "../fixtures/selectors.js"

describe("inputForms",function(){
    beforeEach("",function(){
        cy.visit("/")
    })

    it("Should be able to complete Simple Form Demo",function(){
       cy.get(inputForms.InputFormsDropdown).click()
       cy.get(inputForms.SimpleFormDemo).click()
       cy.get(inputForms.SingleInputMessageField).click()
       cy.get(inputForms.SingleInputMessageField).type('Hello')
       cy.get(inputForms.ShowMessageButton).click()
       cy.get(inputForms.EnterValueFieldA).click()
       cy.get(inputForms.EnterValueFieldA).type('80')
       cy.get(inputForms.EnterValueFieldB).click()
       cy.get(inputForms.EnterValueFieldB).type('20')
       cy.get(inputForms.GetTotalButton).click()
    })
    it("Should be able to complete checkbox Demo",function(){
       cy.get(inputForms.InputFormsDropdown).click()
       cy.get(inputForms.CheckBoxDemo).click()
       cy.get(inputForms.SingleCheckBoxDemo).click()
       cy.get(inputForms.MultipleCheckBoxDemoOption1).click()
       cy.get(inputForms.MultipleCheckBoxDemoOption1).uncheck()
       cy.get(inputForms.MultipleCheckBoxDemoOption2).click()
       cy.get(inputForms.MultipleCheckBoxDemoOption2).uncheck()
       cy.get(inputForms.MultipleCheckBoxDemoOption3).click()
       cy.get(inputForms.MultipleCheckBoxDemoOption3).uncheck()
       cy.get(inputForms.MultipleCheckBoxDemoOption4).click()
       cy.get(inputForms.MultipleCheckBoxDemoOption4).uncheck()
       cy.get(inputForms.CheckAllButton).click()
       cy.get(inputForms.CheckAllButton).click()
    })
    it("Should be able to complete Radio Buttons Demo",function(){
       cy.get(inputForms.InputFormsDropdown).click()
       cy.get(inputForms.RadioButtonsDemo).click()
       cy.get(inputForms.RadioButtonDemoMale).click()
       cy.get(inputForms.RadioButtonDemoFemale).click()
       cy.get(inputForms.GetCheckedValueButton).click()
       cy.get(inputForms.GroupButtonRadioDemoMale).click()
       cy.get(inputForms.GroupButtonRadioDemoFemale).click()
       cy.get(inputForms.AgeGroup0To5).click()
       cy.get(inputForms.AgeGroup5To15).click()
       cy.get(inputForms.AgeGroup15To50).click()
       cy.get(inputForms.GetValuesButton).click()
    })
    it("Should be able to complete Select DropDown List",function(){
       cy.get(inputForms.InputFormsDropdown).click()
       cy.get(inputForms.SelectDropDownList).click()
       cy.get(inputForms.SelectListDemoDropDown).select('Tuesday')
       cy.get(inputForms.MultipleSelectListDemo).click()
       cy.get(inputForms.FirstSelectedButton).click()
       cy.get(inputForms.GetAllSelectedButton).click()
    })
    it("Should be able to complete InputForms Submit",function(){
       cy.get(inputForms.InputFormsDropdown).click()
       cy.get(inputForms.InputFormsSubmit).click()
       cy.get(inputForms.InputFormFirstNameField).click()
       cy.get(inputForms.InputFormFirstNameField).type('SpikeyTechy')
       cy.get(inputForms.InputFormLastNameField).click()
       cy.get(inputForms.InputFormLastNameField).type('Blessing')
       cy.get(inputForms.InputFormEmailAddressField).click()
       cy.get(inputForms.InputFormEmailAddressField).type('ExpensiveSpikeyTech@yopmail.com')
       cy.get(inputForms.InputFormPhoneNumberField).click()
       cy.get(inputForms.InputFormPhoneNumberField).type('2348166731776')
       cy.get(inputForms.InputFormHomeAddressField).click()
       cy.get(inputForms.InputFormHomeAddressField).type('No,5 ajibade street georgia')
       cy.get(inputForms.InputFormCityField).click()
       cy.get(inputForms.InputFormCityField).type('Lagos')
       cy.get(inputForms.InputFormStateField).select('Colorado')
       cy.get(inputForms.InputFormZipCodeField).click()
       cy.get(inputForms.InputFormZipCodeField).type('23401')
       cy.get(inputForms.InputFormWebsiteOrDomain).click()
       cy.get(inputForms.InputFormWebsiteOrDomain).type('http://demo.seleniumeasy.com/input-form-demo.html')
       cy.get(inputForms.InputFormYes).click()
       cy.get(inputForms.InputFormNo).click()
       cy.get(inputForms.InputFormProjectDescription).click()
       cy.get(inputForms.InputFormProjectDescription).type('GreatJobWe')
       cy.get(inputForms.InputFormSendButton).click()
    })
    it("Should be able to complete AjaxForm Submit",function(){
       cy.get(inputForms.InputFormsDropdown).click()
       cy.get(inputForms.AjaxFormSubmit).click()
       cy.get(inputForms.AjaxFormNameField).click()
       cy.get(inputForms.AjaxFormNameField).type('SeniorTester')
       cy.get(inputForms.AjaxCommentSection).click()
       cy.get(inputForms.AjaxCommentSection).type('Great')
       cy.get(inputForms.AjaxSubmitButton).click()
    })
    it("Should be able to complete Jquery Select DropDown",function(){
       cy.get(inputForms.InputFormsDropdown).click()
       cy.get(inputForms.JquerySelectDropDown).click()
       cy.get(inputForms.SelectCountryDropDown).click()
       cy.get(inputForms.SelectCountryDenmark).click()
       cy.get(inputForms.SelectState).click()
       //cy.get(inputForms.SelectArizona).select('Arizona')
       cy.get(inputForms.DisabledValue).click()
       cy.get(inputForms.DisabledValue2).click()
       cy.get(inputForms.DropDownCategory).select('Java')




    })

    
})

    

     