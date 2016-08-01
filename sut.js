   var isPalindrome = function(str) {
       var exp = '',
           i, len = str.length,
           j;
       if (len === 1) {
           return true;
       }
       if (len % 2 === 0 && len > 1) {
           for (i = 0; i < len / 2; i++) {
               exp += '(' + str[i] + ')';
           }
           for (i = len / 2; i > 0; i--) {
               exp += '\\' + i;
           }
       } else {
           for (i = 0; i < parseInt(len - 1) / 2; i++) {
               exp += '(' + str[i] + ')';
           }
           exp += str[i];
           for (i = parseInt(parseInt(len) / 2); i > 0; i--) {
               exp += '\\' + i;
           }
       }
       return new RegExp(exp).test(str);
   };
