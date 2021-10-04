let args = process.argv.slice(2);

//node a05.js adda
console.log(isPalindrome(args[0]));

function isPalindrome(string) {
  string = string.toLowerCase();
  let reverseString = string.split('').reverse().join('').toLowerCase();
  return string === reverseString;
}