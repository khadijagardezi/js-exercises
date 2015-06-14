describe("filterLongWords", function() {

  it("with an empty array", function() {
    var result = findLongestWord([], 1);
    expect(typeof result).toBe('array');
    expect(result).toBe([]);
  });

  it("with the 2 words bigger than 2", function() {
    expect(findLongestWord(['a', 'as', 'fds', 'asas', 'a', 'as'], 2)).toBe(['fds','asas']);
  });

  it("with no large words", function() {
    expect(findLongestWord(['as', 'asas', 'dswd', 'as', 'a'], 5)).toBe([]);
  });

});
