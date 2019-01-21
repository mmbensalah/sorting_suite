function bubbleSort(array){
  var swap;
  var x = array
  do {
      swap = false;
      for (var i=0; i < x.length-1; i++) {
          if (x[i] > x[i+1])  {
            [x[i], x[i+1]] = [x[i+1], x[i]];
            swap = true;
          }
      }
  } while (swap);
  return x
}

module.exports = bubbleSort
