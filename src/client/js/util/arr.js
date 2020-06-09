export default {
  inArray: (value, array) => {
    if (!Array.isArray(array)) return false
    if (array.length === 0) return false
    return array.includes(value)
  },

  compareValues: (key, order='asc') => {
    return function(a, b) {
      if (Object.hasOwnProperty.call(a, key) && Object.hasOwnProperty.call(b, key)) {
        const varA = (typeof a[key] === 'string') ?
          a[key].toUpperCase() : a[key]
        const varB = (typeof b[key] === 'string') ?
          b[key].toUpperCase() : b[key]

        let comparison = 0;
        if (varA > varB) {
          comparison = 1
        } else if (varA < varB) {
          comparison = -1
        }
        return (
          (order == 'desc') ? (comparison * -1) : comparison
        )
      } else {
        if (!Object.hasOwnProperty.call(a, key)) return -1
        if (!Object.hasOwnProperty.call(b, key)) return -1
      }
      return 0
    }
  },

  sumObjItems: (objs, targetKey) => {
    let total = 0
    objs.map((item) => {
      total += item[targetKey]
    })
    return total
  },

  //checkSameObjArrs: (arr1, arr2) => {
  //  const diff = arr1.some(item1 => {
  //    arr2.some(item2 => {
  //      item1.x === item2.x &&
  //      item1.y === item2.y &&
  //      item1.data !== item2.data
  //    })
  //  })
  //  return diff.length === 0
  //},
}
