// dot access
// "a.b.etc".split(".").reduce((o, i) => o[i], obj);
export const compareMake = key => {
  return (a, b) => {
    const genreA = a[key].toUpperCase();
    const genreB = b[key].toUpperCase();

    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison;
  };
};
/**
 * Sort object properties (only own properties will be sorted).
 * @param {object} obj object to sort properties
 * @param {string|int} sortedBy 1 - sort object properties by specific value.
 * @param {bool} isNumericSort true - sort object properties as numeric value, false - sort as string value.
 * @param {bool} reverse false - reverse sorting.
 * @returns {Array} array of items in [[key,value],[key,value],...] format.
 */
export const sortProperties = (obj, sortedBy, isNumericSort, reverse) => {
  sortedBy = sortedBy || 1; // by default first key
  isNumericSort = isNumericSort || false; // by default text sort
  reverse = reverse || false; // by default no reverse

  var reversed = reverse ? -1 : 1;

  var sortable = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      sortable.push([key, obj[key]]);
    }
  }
  if (isNumericSort)
    sortable.sort(function(a, b) {
      return reversed * (a[1][sortedBy] - b[1][sortedBy]);
    });
  else
    sortable.sort(function(a, b) {
      var x = a[1][sortedBy].toLowerCase(),
        y = b[1][sortedBy].toLowerCase();
      return x < y ? reversed * -1 : x > y ? reversed : 0;
    });
  return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
};
