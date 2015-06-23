describe("isPalidrome", function() {

	it("with an empty string", function() {
		expect(isPalindrome("")).toBe(true);
	});

	it("with single word palindrome", function() {
		expect(isPalindrome("racecar")).toBe(true);
	});

	it("with multi word palindrome", function() {
		expect(isPalindrome("was it a car or a cat i saw")).toBe(true);
	});

	it("with multi word palindrome and mix caps", function() {
		expect(isPalindrome("Was it a car or a cat I saw")).toBe(true);
	});

	it("with invalid palindrome", function() {
		expect(isPalindrome("dady")).toBe(false);
	});

});
