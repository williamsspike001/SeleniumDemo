import {Others,} from "../fixtures/selectors.js"

describe("Others",function(){
    beforeEach("",function(){
        cy.visit("/")
    })

    it.only("Should be able to complete Drag And Drop",function(){
        cy.get(Others.OthersDropDown).click()
        cy.get(Others.DragAndDrop).click()
        cy.get(Others.Dragging1).drag(Others.DropHere)
        
    

    })

    it("Should be able to complete Dynamic Data Loading",function(){
        cy.get(Others.OthersDropDown).click()
        cy.get(Others.DynamicDataLoading).click()
        cy.get(Others.GetNewUserButton).click()
    })

    it("Should be able to complete Chart Demo", function(){
        cy.get(Others.OthersDropDown).click()
        cy.get(others.DragAndDrop).click()
        
        

        //cy.xpath(Others.ChartDemo).click()
    })
    })