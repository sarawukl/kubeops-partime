let args = process.argv.slice(2);

//node a03.js '{"A": 20, "B": 15, "C": 10}'
console.log(splitTheBill(JSON.parse(args[0])));

function splitTheBill(group) {
  let average = Object.values(group).reduce((a, b) => a + b, 0) / Object.values(group).length;
  let name = Object.keys(group);
  let diff = Object.values(group).map((a, b) => (a - average));
  return Object.assign(...name.map((n, i) => ({ [n]: parseFloat((diff[i]).toFixed(2)) })));
}

