const fs = require('fs')
var objectPath = require('object-path')

fs.readFile(
  './src/data/doffin-bach-default-rtdb-F02_2014-export.json',
  'utf8',
  (err, data) => {
    err && console.log(err)

    let cpvNumbers = Object.values(JSON.parse(data)).map((js) => js.cpvnumber)

    let firstTwo = cpvNumbers.map(
      (js) => js.split('').slice(0, 2).join('') + '000000'
    )
    let count = {} 
    firstTwo.forEach((i) => (count[i] = (count[i] || 0) + 1))

    // first three numbers
    let firstThree = cpvNumbers.map(
      (js) => js.split('').slice(0, 3).join('') + '00000'
    )
    let countThree = {}
    firstThree.forEach((i) => (countThree[i] = (countThree[i] || 0) + 1))

    // first four numbers
    let firstFour = cpvNumbers.map(
      (js) => js.split('').slice(0, 4).join('') + '0000'
    )
    let countFour = {}
    firstFour.forEach((i) => (countFour[i] = (countFour[i] || 0) + 1))

    // first five numbers
    let firstFive = cpvNumbers.map(
      (js) => js.split('').slice(0, 5).join('') + '000'
    )
    let countFive = {}
    firstFive.forEach((i) => (countFive[i] = (countFive[i] || 0) + 1))
    console.log(Object.keys(countFive))

    // first six numbers
    let firstSix = cpvNumbers.map(
      (js) => js.split('').slice(0, 6).join('') + '00'
    )
    let countSix = {}
    firstSix.forEach((i) => (countSix[i] = (countSix[i] || 0) + 1))
    console.log(Object.keys(countSix))

    // first seven numbers
    let firstSeven = cpvNumbers.map(
      (js) => js.split('').slice(0, 7).join('') + '0'
    )
    let countSeven = {}
    firstSeven.forEach((i) => (countSeven[i] = (countSeven[i] || 0) + 1))
    console.log(Object.keys(countSeven))

    // all eight numbers
    let firstEight = cpvNumbers.map((js) => js.split('').slice(0, 8).join(''))
    let countEight = {}
    firstEight.forEach((i) => (countEight[i] = (countEight[i] || 0) + 1))
    console.log(Object.keys(countEight))

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
      obj = { [k]: { count: v } }
      Object.assign(arr[k.substring(0, 2) + '000000'], obj)
    }

    for (const [ke, va] of Object.entries(countFour)) {
      obj = { [ke]: { count: va } }
      Object.assign(
        arr[ke.substring(0, 2) + '000000'][ke.substring(0, 3) + '00000'],
        obj
      )
    }
    for (const [k, v] of Object.entries(countFive)) {
      obj = { [k]: { count: v } }
      Object.assign(
        arr[k.substring(0, 2) + '000000'][k.substring(0, 3) + '00000'][
          k.substring(0, 4) + '0000'
        ],
        obj
      )
    }
    for (const [k, v] of Object.entries(countSix)) {
      obj = { [k]: { count: v } }
      Object.assign(
        arr[k.substring(0, 2) + '000000'][k.substring(0, 3) + '00000'][
          k.substring(0, 4) + '0000'
        ][k.substring(0, 5) + '000'],
        obj
      )
    }
    for (const [k, v] of Object.entries(countSeven)) {
      obj = { [k]: { count: v } }
      Object.assign(
        arr[k.substring(0, 2) + '000000'][k.substring(0, 3) + '00000'][
          k.substring(0, 4) + '0000'
        ][k.substring(0, 5) + '000'][k.substring(0, 6) + '00'],
        obj
      )
    }
    for (const [k, v] of Object.entries(countEight)) {
      obj = { [k]: { count: v } }
      Object.assign(
        arr[k.substring(0, 2) + '000000'][k.substring(0, 3) + '00000'][
          k.substring(0, 4) + '0000'
        ][k.substring(0, 5) + '000'][k.substring(0, 6) + '00'][
          k.substring(0, 7) + '0'
        ],
        obj
      )
    }

    fs.writeFile('./src/data/count.json', JSON.stringify([arr]), (err) => {
      err && console.log('error', err)
    })
  }
)
