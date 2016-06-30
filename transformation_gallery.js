describe("Search transformation gallery", function() {

		browser.get("https://transformationgallery.withgoogle.com/");

		it("Click on Search icon", function() {
			//click on search icon
			element(by.className('grid-view-controller')).all(by.tagName('button')).get(2).click();
		});


		it("search for something", function(){
			//enter some text into imput box
			element(by.model('searchQuery')).sendKeys('job');

			//activate enter key
			browser.actions().sendKeys(protractor.Key.ENTER).perform();
		});

		it("choose a value from search results", function() {
			//select first record from serach result
			element(by.className('cards-grid')).all(by.tagName('a')).get(0).click();
			
		});

		it("check page navigation", function(){
			expect(browser.getCurrentUrl()).toContain('cards/5945723749138432');
		});

});
