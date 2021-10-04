let args = process.argv.slice(2);

//node a04.js 5
console.log(fibonacci(args[0]));

function fibonacci(number) {
  if (number > 1) {
    return fibonacci(number - 1) + fibonacci(number - 2)
  } else {
    return number;
  }
}