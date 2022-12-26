import {ListBox,} from "../fixtures/selectors.js"

describe("ListBox",function(){
    beforeEach("",function(){
        cy.visit("/")
    })

    it("Should be able to complete Boot Strap ListBox",function(){
      cy.get(ListBox.ListBoxDropDown).click()
      cy.get(ListBox.BootStrapListBox).click()
      cy.xpath(ListBox.BootSearchField).click()
      cy.xpath(ListBox.BootSearchField).type('Morbi leo risus')
      cy.xpath(ListBox.BootSearchField).clear('Morbi leo risus')
      cy.xpath(ListBox.SelectAllButton).click()
      cy.get(ListBox.PaginationLeft).click()
      cy.get(ListBox.PaginationRight).click()
      cy.xpath(ListBox.BootSearchField2).click()
      cy.xpath(ListBox.BootSearchField2).type('Dapibus ac facilisis in')
      cy.xpath(ListBox.SelectAllButton2).click()
    })

    it("Should be able to complete Jquery List Box",function(){
        cy.get(ListBox.ListBoxDropDown).click()
        cy.get(ListBox.JqueryListBox).click()
        cy.get(ListBox.IsisName).click()
        cy.get(ListBox.AddButton).click()
        cy.get(ListBox.AddAllButton).click()
        cy.get(ListBox.RemoveButton).click()
        cy.get(ListBox.RemoveAllButton).click()
    })

    it("Should be able to complete Data List Filter",function(){
        cy.get(ListBox.ListBoxDropDown).click()
        cy.get(ListBox.DataListFilter).click()
        cy.get(ListBox.DataListSearchField).click()
        cy.get(ListBox.DataListSearchField).type('Brian Hoyies')

    })
})



