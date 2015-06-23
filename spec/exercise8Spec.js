var cid = [
	['PAISA', 5]
  	['ONE', 6],
  	['TWO', 7],
  	['FIVE', 5],
  	['TEN', 1],
  	['TWENTY', 2],
  	['ONE HUNDRED', 2],
  	['ONE THOUSAND', 1]
];

describe("drawer", function() {

	it("with price 17.5 and 20.0 cash", function() {
		expect(drawer(17.5, 20.0, cid)).toBe([['TWO', 1], ['PAISA', 1]]);
	});

	it("with change equal to the cash-in-drawer", function() {
		expect(drawer(1299.5, 2599, cid)).toBe("Closed");
	});

	it("with change greater than the amount in the cash-in-drawer", function() {
		expect(drawer(2000.0, 5000.0)).toBe("Insufficient Funds");
	});

	it("with price 100.0 and cash 170.5", function() {
		expect(drawer(100.0, 170.0)).toBe([['TWENTY', 2], ['TEN', 1], ['FIVE', 4], ['PAISA', 1]]);
	});

	it("with price 14.0 and cash 28.5", function() {
		expect(drawer(14.0, 28.5, [['PAISA', 2], ['ONE', 10], ['TWO', 3], ['FIVE', 0], ['TEN', 0], ['ONE HUNDRED', 0], ['ONE THOUSAND', 0]])).toBe([['TWO', 3], ['ONE', 8], ['PAISA', 1]]);
	});

});