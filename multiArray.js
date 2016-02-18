// take this [3, 4, [5, 6, [7, 8], 9], [10, 11]]
// make [3, 4, 5, 6, 7, 8, 9, 10, 11]


var multi = [3, 4, [5, 6, [7, 8], 9], [10, 11]];

function flatten(array) {
  var flat = [] // this is the result

  function slice(array) {
    array.forEach (function(item) {
      if (Array.isArray(item)) {
        slice(item)
      } else {
        flat.push(item)
      }
    })
  }
  slice(array)
  return flat
}

console.log(flatten(multi))
