describe("sort", function() {
	
	it("with an empty array", function() {
		expect(sort([])).toBe([]);
	});

	it("with one word", function() {
		expect(sort(["apple"])).toBe(["apple"]);
	});

	it("with multiple words", function() {
		expect(sort(["orange", "apple", "banaana", "grapes"])).toBe(["apple", "banaana", "grapes", "orange"]);
	});
	
	it("with multiple already sorted words", function() {
		expect(sort(["apple", "banaana", "orange"])).toBe(["apple", "banaana", "orange"]);
	});

	it("with multiple words and similar beginning letters", function() {
		expect(sort(["abdulqadir", "abdulghaffar", "abdulrafay"])).toBe(["abdulghaffar", "abdulqadir", "abdulrafay"]);
	});

});