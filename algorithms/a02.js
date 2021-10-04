let args = process.argv.slice(2);

//node a02.js 4 10
console.log(distribute(args[0], args[1]))

function distribute(nodes, workload) {
  let result = [];
  let workloads_array = [...Array(workload - 0).keys()];
  let modNode = workload % nodes == 0 ? nodes : workload % nodes;
  for (let i = 0; i < nodes; i++) {
    i < modNode ? result[i] = workloads_array.splice(0, Math.ceil(workload / nodes)) : result[i] = workloads_array.splice(0, Math.floor(workload / nodes))
  }
  return result;
}
