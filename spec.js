describe('testing my isPalindrome("str") function', function() {
    it('when string is empty, it should return a false', function() {
        expect(isPalindrome('')).toBe(false);
    });
    it('when string is one character long, it should return true', function() {
        expect(isPalindrome('3')).toBe(true);
    });
    it('when string length is even and IS a palindrome, it should return true', function() {
        expect(isPalindrome('1221')).toBe(true);
    });
    it('when string length is even and IS NOT a palindrome, it should return false', function() {
        expect(isPalindrome('1223')).toBe(false);
    });
    it('when string length is odd and IS a palindrome, it should return true', function() {
        expect(isPalindrome('12421')).toBe(true);
    });
    it('when string length is odd and IS NOT a palindrome, it should return false', function() {
        expect(isPalindrome('12423')).toBe(false);
    });
});
