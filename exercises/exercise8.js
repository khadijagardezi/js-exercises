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
 *  In case of multiple solutions, return the one containing the highest value of coin/bill
 */

 function drawer(price, cash, cid) {
   var change;
   return change;
 }


 // Example cash-in-drawer array:
 // ['ONE RUPEE', 10],
 // ['TWO RUPEES', 15],
 // ['FIVE RUPEES', 35],
 // ['TEN RUPEES', 9],
 // ['TWENTY RUPEES', 8],
 // ['ONE HUNDRED RUPEES', 5],
 // ['ONE THOUSAND RUPEES', 2]]
 
 // The currency of the cash in drawer can always assumed to be PKR with denominations in the example above
 
 // Example call
 // drawer(17, 20, [['ONE RUPEE', 11], ['TWO RUPEES', 15], ['FIVE RUPEES', 36], ['TEN RUPEES', 9], ['TWENTY RUPEES', 8], ['ONE HUNDRED RUPEES', 5], ['ONE THOUSAND RUPEES', 2]]);
 // output [['TWO RUPEES', 1], [ONE RUPEE', 1]]
