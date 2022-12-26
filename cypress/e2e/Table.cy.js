import {Tables} from "../fixtures/selectors.js"

describe("Tables",function(){
    beforeEach("",function(){
        cy.visit("/")
    })

    it("Should be able to complete Table Pagination",function(){
       cy.get(Tables.TablesDropDown).click()
       cy.get(Tables.TablePagination).click()
       cy.get(Tables.Pagination2).click()
       cy.get(Tables.Pagination3).click()
       cy.get(Tables.Pagination1).click()
       cy.get(Tables.NextPaginationIcon).click()
       cy.get(Tables.PreviousPaginationIcon).click()
    })

    it("Should be able to complete Table Data Search",function(){
       cy.get(Tables.TablesDropDown).click()
       cy.get(Tables.TableDataSearch).click()
       cy.get(Tables.TaskSearchField).click()
       cy.get(Tables.TaskSearchField).type('Wireframes')
       cy.get(Tables.FilterBotton).click()
       cy.get(Tables.ListedUserField).type('5')
       cy.get(Tables.ListedUserField).clear('5')
       cy.get(Tables.UserNameField).click()
       cy.get(Tables.UserNameField).type('jacobs')
       cy.get(Tables.UserNameField).clear('jacobs')
       cy.get(Tables.FirstNameField).click()
       cy.get(Tables.FirstNameField).type('Daniel')
       cy.get(Tables.FirstNameField).clear('Daniel')
       cy.get(Tables.LastNameField).click()
       cy.get(Tables.LastNameField).type('Karano')
       cy.get(Tables.LastNameField).clear('Karano')
    })

    it("Should be able to complete Table Filter",function(){
       cy.get(Tables.TablesDropDown).click()
       cy.get(Tables.TableFilter).click()
       cy.get(Tables.SuccessButton).click()
       cy.get(Tables.WarningButton).click()
       cy.get(Tables.DangerButton).click()
       cy.get(Tables.Allbutton).click()
       cy.get(Tables.UncheckRed).click()
       cy.get(Tables.CheckGreen1).click()
       cy.get(Tables.CheckOrange).click()
       cy.get(Tables.CheckRed).click()
       cy.get(Tables.CheckGreen2).click()
       cy.get(Tables.CheckOrange2).click()
       //cy.get(Tables.CheckGreen1).uncheck()
       //cy.get(Tables.CheckOrange).uncheck()
       //cy.get(Tables.CheckRed).uncheck()
       //cy.get(Tables.CheckGreen2).uncheck()
       //cy.get(Tables.CheckOrange2).uncheck()
    })

    it("Should be able to complete Table Sort&Search",function(){
       cy.get(Tables.TablesDropDown).click()
       cy.get(Tables.TableSortAndSearch).click()
       cy.xpath(Tables.EntriesDropDown).select('25')
       cy.get(Tables.SearchField).click()
       cy.get(Tables.SearchField).type('Singapore')
       cy.get(Tables.SearchField).clear('Singapore')
       cy.get(Tables.NameHeading).click()
       cy.xpath(Tables.PositionHeading).click()
       cy.xpath(Tables.OfficeHeading).click()
       cy.xpath(Tables.AgeHeading).click()
       cy.xpath(Tables.StartDate).click()
       cy.xpath(Tables.Salary).click()
       cy.get(Tables.NextPaginationButton).click()
       cy.get(Tables.PreviousPaginationButton).click()
    })

    it("Should be able to complete Table Data Download",function(){
       cy.get(Tables.TablesDropDown).click()
       cy.get(Tables.TablesDataDownload).click()
       cy.get(Tables.DataSearchField).click()
       cy.get(Tables.DataSearchField).type('Airi Satou')
       cy.get(Tables.CopyButton).click()
       cy.get(Tables.ClearMessage1).click()
       cy.get(Tables.CsvButton).click()
       cy.get(Tables.ClearMessage).click()
       cy.get(Tables.ExcelButton).click()
       cy.get(Tables.PdfButton).click()
       cy.get(Tables.PrintButton).click()
       cy.get(Tables.DataSearchField).clear('Airi Satou')
       cy.get(Tables.NextButton).click()
       cy.get(Tables.NextButton).click()
       cy.get(Tables.NextButton).click()
       cy.get(Tables.PreviousButton).click()
       cy.get(Tables.PreviousButton).click()
       cy.get(Tables.PreviousButton).click()




    })

    })




    
