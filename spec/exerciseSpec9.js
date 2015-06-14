/*
expect(telephoneCheck("555-555-5555")).to.be.a("boolean");
assert.deepEqual(telephoneCheck("1 555-555-5555"), true);
assert.deepEqual(telephoneCheck("1 (555) 555-5555"), true);
assert.deepEqual(telephoneCheck("5555555555"), true);
assert.deepEqual(telephoneCheck("555-555-5555"), true);
assert.deepEqual(telephoneCheck("(555)555-5555"), true);
assert.deepEqual(telephoneCheck("1(555)555-5555"), true);
assert.deepEqual(telephoneCheck("1 555 555 5555"), true);
assert.deepEqual(telephoneCheck("555-555-5555"), true);
assert.deepEqual(telephoneCheck("1 456 789 4444"), true);
assert.deepEqual(telephoneCheck("123**&!!asdf#"), false);expected true to deeply equal false
assert.deepEqual(telephoneCheck("55555555"), false);expected true to deeply equal false
assert.deepEqual(telephoneCheck("(6505552368)"), false);expected true to deeply equal false
assert.deepEqual(telephoneCheck("2 (757) 622-7382"), false);expected true to deeply equal false
assert.deepEqual(telephoneCheck("0 (757) 622-7382"), false);expected true to deeply equal false
assert.deepEqual(telephoneCheck("-1 (757) 622-7382"), false);expected true to deeply equal false
assert.deepEqual(telephoneCheck("2 757 622-7382"), false);expected true to deeply equal false
assert.deepEqual(telephoneCheck("10 (757) 622-7382"), false);expected true to deeply equal false
assert.deepEqual(telephoneCheck("27576227382"), false);expected true to deeply equal false
assert.deepEqual(telephoneCheck("(275)76227382"), false);expected true to deeply equal false
assert.deepEqual(telephoneCheck("2(757)6227382"), false);expected true to deeply equal false
assert.deepEqual(telephoneCheck("2(757)622-7382"), false);expected true to deeply equal false
*/
