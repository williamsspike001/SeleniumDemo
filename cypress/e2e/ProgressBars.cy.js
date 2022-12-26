import {ProgressBars,} from "../fixtures/selectors.js"

describe("ProgressBars",function(){
    beforeEach("",function(){
        cy.visit("/")
    })

    it("Should be able to complete JQuery Download",function(){
      cy.get(ProgressBars.ProgressBarsDropDown).click()
      cy.get(ProgressBars.JqueryDownload).click()
      cy.get(ProgressBars.DownloadButton).click()
      cy.get(ProgressBars.CloseButton).click()
    })
    
    it("Should be able to complete Bootstrap Progress Bar",function(){
      cy.get(ProgressBars.ProgressBarsDropDown).click()
      cy.get(ProgressBars.BootstrapProgressBar).click()
      cy.get(ProgressBars.DownloadProgressBarButton).click()
    })
    
    it("Should be able to complete Drag & Drop Sliders",function(){
      cy.get(ProgressBars.ProgressBarsDropDown).click() 
      cy.get(ProgressBars.DragAndDropSliders).click()
    })
})