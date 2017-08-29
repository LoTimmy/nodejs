'use strict';

function fibonacci(num){
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return fibonacci(num-1) + fibonacci(num-2);
}

if (require.main === module) {
  var usageMessage = "Usage: node " + __filename + " num";
  if (!process.argv.slice(2).length) {
    console.log(usageMessage); 
    process.exit(-1);
  }

  var num = Number(process.argv[2]);
  console.log(fibonacci(num));
}
