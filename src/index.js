exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
      let minNumber = array[0];
      for (let i = 1; i < array.length; i++){
        if (array[i] < minNumber){
          minNumber = array[i];
        } 
      }
      return minNumber;
    }
}

exports.max = function max (array) {
 if (array === undefined || array.length === 0) {
    return 0;
  } else {
      let maxNumber = array[0];
      for (let i = 1; i < array.length; i++) {
        if (array[i] > maxNumber) {
          maxNumber = array[i];
        }
      }
      return maxNumber;
    }
}

exports.avg = function avg (array) {
  let sum = 0;
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
      let count = array.length;
      for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
      }
      let average = sum / count;
      return average;
    }
}
