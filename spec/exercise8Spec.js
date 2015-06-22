/*

expect(drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]])).to.be.a('array');expected undefined to be an array
expect(drawer(19.50, 20.00, [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]])).to.be.a('string');expected undefined to be a string
expect(drawer(19.50, 20.00, [['PENNY', 0.50], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]])).to.be.a('string');expected undefined to be a string
assert.deepEqual(drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]), [['QUARTER', 0.50]], 'return correct change');return correct change: expected undefined to deeply equal [ [ 'QUARTER', 0.5 ] ]
assert.deepEqual(drawer(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]), [['TWENTY', 60.00], ['TEN', 20.00], ['FIVE', 15], ['ONE', 1], ['QUARTER', 0.50], ['DIME', 0.20], ['PENNY', 0.04] ], 'return correct change with multiple coins and bills');return correct change with multiple coins and bills: expected undefined to deeply equal [ Array(7) ]
assert.deepEqual(drawer(19.50, 20.00, [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]), 'Insufficient Funds', 'insufficient funds');insufficient funds: expected undefined to deeply equal 'Insufficient Funds'
assert.deepEqual(drawer(19.50, 20.00, [['PENNY', 0.50], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]), "Closed", 'cash-in-drawer equals change');cash-in-drawer equals change: expected undefined to deeply equal 'Closed'
*/

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
	it("", function() {
		expect(drawer(17.5, 20.0, cid)).toBe([['TWO', 1], ['PAISA', 1]]);
	});
	it("", function() {
		expect(drawer(1299.5, 1299.5, cid)).toBe("Closed");
	});
	it("", function() {
		expect(drawer(2000.0, 5000.0)).toBe("Insufficient Funds");
	});
	it("", function() {
		expect(drawer(100.0, 170.0)).toBe([['TWENTY', 2], ['TEN', 1], ['FIVE', 4]]);
	});
	it("", function() {
		expect(drawer()).toBe();
	});
	it("", function() {
		expect(drawer()).toBe();
	});
});
