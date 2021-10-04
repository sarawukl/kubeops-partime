let args = process.argv.slice(2);

//node a01.js 21
console.log(fizzBuzz(args[0]));

function fizzBuzz(number) {
  let fizz = ["Fizz"], buzz = ["Buzz"]
  let result = (fizz[number % 3] || "") + (buzz[number % 5] || "")
  return result
}