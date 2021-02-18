const fs = require('fs')
var objectPath = require('object-path')

fs.readFile(
  './src/data/doffin-bach-default-rtdb-F02_2014-export.json',
  'utf8',
  (err, data) => {
    err && console.log(err)

    let cpvNumbers = Object.values(JSON.parse(data)).map((js) => js.cpvnumber)

    let firstTwo = cpvNumbers.map((js) => js.split('').slice(0, 2).join(''))
    let count = {}
    firstTwo.forEach((i) => (count[i] = (count[i] || 0) + 1))

    // first three numbers
    let firstThree = cpvNumbers.map((js) => js.split('').slice(0, 3).join(''))
    let countThree = {}
    firstThree.forEach((i) => (countThree[i] = (countThree[i] || 0) + 1))
    console.log(Object.keys(countThree))

    let arr = {}
    for (const [key, value] of Object.entries(count)) {
      obj = {
        [key]: {
          count: value,
        },
      }
      Object.assign(arr, obj)
    }

    for (const [k, v] of Object.entries(countThree)) {
      if (k.substring(0, 2) == 14) {
        console.log()
        obj = { [k]: { count: v } }
        Object.assign(arr[14], obj)
      }
    }
    fs.writeFile('./src/data/count.json', JSON.stringify(arr), (err) => {
      err && console.log('error', err)
    })
  }
)
