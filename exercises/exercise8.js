/*
 *  Design a cash register drawer function that accepts purchase price as the first argument, payment as
 *  the second argument, and cash-in-drawer (cid) as the third argument.
 *
 *  cid is a 2d array listing available currency.
 *
 *  Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the
 *  string "Closed" if cash-in-drawer is equal to the change due.
 *
 *  Otherwise, return change in coin and bills, sorted in highest to lowest order.
 */

 function drawer(price, cash, cid) {
   var change;
   return change;
 }


 // Example cash-in-drawer array:
 // [['PAISA', 25], 0.5 rupees is 1 Paisa
 // ['ONE', 10],
 // ['TWO', 15],
 // ['FIVE', 35],
 // ['TEN', 9],
 // ['TWENTY', 8],
 // ['ONE HUNDRED', 5],
 // ['ONE THOUSAND', 2]]
 
 // The currency of the cash in drawer can always assumed to be PKR with denominations in the example above
 
 // Example call
 // drawer(17.5, 20.0, [['PAISA', 25], ['ONE', 11], ['TWO', 15], ['FIVE', 36], ['TEN', 9], ['TWENTY', 8], ['ONE HUNDRED', 5], ['ONE THOUSAND', 2]]);
 // output [['TWO', 2], [PAISA', 1]]
