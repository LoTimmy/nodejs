function* fibonacci() {
  var fn1 = 0;
  var fn2 = 1;
  while (true) {
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    yield current;
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // truncate the sequence at 1000
/*
  if (n >= 1000) {
    break;
  }
*/
}

