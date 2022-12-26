import {AlertsAndModals,} from "../fixtures/selectors.js"

describe("AlertsAndModals",function(){
    beforeEach("",function(){
        cy.visit("/")
    })

    it("Should be able to complete BootStrap Alert",function(){
      cy.get(AlertsAndModals.AlertsAndModalsDropDown).click()
      cy.get(AlertsAndModals.BootStrapAlert).click()
      cy.get(AlertsAndModals.AutoCloseAbleSuccessButton).click()
      cy.get(AlertsAndModals.NormalSuccessButton).click()
      cy.get(AlertsAndModals.CancelIcon).click()
      cy.get(AlertsAndModals.AutoCloseAbleWarningButton).click()
      cy.get(AlertsAndModals.NormalWwarningButton).click()
      cy.get(AlertsAndModals.CancelIcon2).click()
      cy.get(AlertsAndModals.AutoCloseAbleDangerButton).click()
      cy.get(AlertsAndModals.NormalDangerButton).click()
      cy.get(AlertsAndModals.CancelIcon3).click()
      cy.get(AlertsAndModals.AutoCloseAbleInfoButton).click()
      cy.get(AlertsAndModals.NormalInfoButton).click()
      cy.get(AlertsAndModals.CancelIcon4).click()
    })

    it("Should be able to complete BootStrap Modals",function(){
      cy.get(AlertsAndModals.AlertsAndModalsDropDown).click()
      cy.get(AlertsAndModals.BootStrapModals).click()
      cy.xpath(AlertsAndModals.LaunchModalButton).click()
      cy.xpath(AlertsAndModals.SaveChangesButton).click()
      cy.xpath(AlertsAndModals.LaunchModalButton2).click()
      cy.xpath(AlertsAndModals.LaunchModalButton02).click()
      cy.xpath(AlertsAndModals.SaveChangesButton2).click()
    })

    it("Should be able to complete Window Popup Modal",function(){
      cy.get(AlertsAndModals.AlertsAndModalsDropDown).click()
      cy.get(AlertsAndModals.WindowPopUpModal).click()
      cy.xpath(AlertsAndModals.FollowOnTwitterButton).click()
      cy.xpath(AlertsAndModals.LikeOnFacebookButton).click()
      cy.xpath(AlertsAndModals.FollowTwitterAndFacebook).click()
      cy.xpath(AlertsAndModals.FollowAllButton).click()
    })

    it("Should be able to complete Progress Bar Modal",function(){
      cy.get(AlertsAndModals.AlertsAndModalsDropDown).click()
      cy.get(AlertsAndModals.ProgressBarModal).click()
      cy.get(AlertsAndModals.ShowDialogueButton1).click()
      cy.get(AlertsAndModals.ShowDialogueButton2).click()
      cy.get(AlertsAndModals.ShowDialogueButton3).click()
    })

    it("Should be able to complete Javascrip Alert",function(){
      cy.get(AlertsAndModals.AlertsAndModalsDropDown).click()
      cy.get(AlertsAndModals.JavaScriptAlert).click()
      cy.get(AlertsAndModals.ClickMeButton1).click()
      cy.get(AlertsAndModals.ClickMeButton2).click()
      cy.get(AlertsAndModals.ClickForPromptBox).click()
    })

    it("Should be able to complete File Download",function(){
      cy.get(AlertsAndModals.AlertsAndModalsDropDown).click()
      cy.get(AlertsAndModals.FileDownload).click()
      cy.get(AlertsAndModals.TextBox).click()
      cy.get(AlertsAndModals.TextBox).type('Great Automating')
      cy.get(AlertsAndModals.GenerateFileButton).click()
      cy.get(AlertsAndModals.DownloadLink).click()

    })
      

    })

