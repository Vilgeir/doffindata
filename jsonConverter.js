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
    // console.log(Object.keys(countFive))

    // first six numbers
    let firstSix = cpvNumbers.map(
      (js) => js.split('').slice(0, 6).join('') + '00'
    )
    let countSix = {}
    firstSix.forEach((i) => (countSix[i] = (countSix[i] || 0) + 1))
    // console.log(Object.keys(countSix))

    // first seven numbers
    let firstSeven = cpvNumbers.map(
      (js) => js.split('').slice(0, 7).join('') + '0'
    )
    let countSeven = {}
    firstSeven.forEach((i) => (countSeven[i] = (countSeven[i] || 0) + 1))
    // console.log(Object.keys(countSeven))

    // all eight numbers
    let firstEight = cpvNumbers.map((js) => js.split('').slice(0, 8).join(''))
    let countEight = {}
    firstEight.forEach((i) => (countEight[i] = (countEight[i] || 0) + 1))
    // console.log(Object.keys(countEight))

    // for (const [key, value] of Object.entries(count)) {
    //   obj = {
    //     [key]: {
    //       count: value,
    //     },
    //   }
    //   Object.assign(arr, obj)
    // }

    fs.readFile('./src/data/cpv.json', 'utf8', (err, cpvname) => {
      err && console.log(err)
      let cpvName = JSON.parse(cpvname)
      // let cpvN = Object.entries(JSON.parse(cpvname))

      let arr = []
      for (let [key, value] of Object.entries(count)) {
        obj = {
          code: key,
          name: cpvName[key],
          count: value,
          children: [],
        }
        arr.push(obj)
        // Object.assign(arr, obj)
      }

      // console.log(arr[0].code === '14000000')
      // console.log(arr.map((a) => a.name))
      // arr.push(arr[0].code === '14000000', { hello: 'world' })
      // let testArr = Object.assign({}, arr)
      // console.log(arr)
      // for (const [k, v] of Object.entries(countThree)) {
      //   obj = { [k]: { count: v } }
      //   Object.assign(arr[k.substring(0, 2) + '000000'], obj)
      // }
      for (const [k, v] of Object.entries(countThree)) {
        obj = {
          code: k,
          name: cpvName[k],
          count: v,
          children: [],
        }

        arr.map((i) => {
          i.code === k.substring(0, 2) + '000000' && i.children.push(obj)
        })

        // arr.push(
        //   newArr.map((a) => a === [k.substring(0, 2) + '000000']),
        //   obj
        // )
        // Object.assign(arr[k.substring(0, 2) + '000000'], obj)
      }

      for (const [k, v] of Object.entries(countFour)) {
        obj = {
          code: k,
          name: cpvName[k],
          count: v,
          children: [],
        }

        arr.map((i) => {
          i.children.map(
            (item) =>
              // i.code === k.substring(0, 2) + '000000' &&
              item.code === k.substring(0, 3) + '00000' &&
              item.children.push(obj)
          )
        })
        // Object.assign(
        //   arr[ke.substring(0, 2) + '000000'][ke.substring(0, 3) + '00000'],
        //   obj
        // )
      }
      for (const [k, v] of Object.entries(countFive)) {
        obj = {
          code: k,
          name: cpvName[k],
          count: v,
          children: [],
        }

        arr.map((i) => {
          i.children.map((item) =>
            item.children.map(
              (it) =>
                it.code === k.substring(0, 4) + '0000' && it.children.push(obj)
            )
          )
        })

        // obj = { [k]: { count: v } }
        // Object.assign(
        //   arr[k.substring(0, 2) + '000000'][k.substring(0, 3) + '00000'][
        //     k.substring(0, 4) + '0000'
        //   ],
        //   obj
        // )
      }

      for (const [k, v] of Object.entries(countSix)) {
        obj = {
          code: k,
          name: cpvName[k],
          count: v,
          children: [],
        }

        arr.map((i) => {
          i.children.map((item) =>
            item.children.map((it) =>
              it.children.map(
                (ite) =>
                  ite.code === k.substring(0, 5) + '000' &&
                  ite.children.push(obj)
              )
            )
          )
        })
      }
      // for (const [k, v] of Object.entries(countSix)) {
      //   obj = { [k]: { count: v } }
      //   Object.assign(
      //     arr[k.substring(0, 2) + '000000'][k.substring(0, 3) + '00000'][
      //       k.substring(0, 4) + '0000'
      //     ][k.substring(0, 5) + '000'],
      //     obj
      //   )
      // }
      // for (const [k, v] of Object.entries(countSeven)) {
      //   obj = { [k]: { count: v } }
      //   Object.assign(
      //     arr[k.substring(0, 2) + '000000'][k.substring(0, 3) + '00000'][
      //       k.substring(0, 4) + '0000'
      //     ][k.substring(0, 5) + '000'][k.substring(0, 6) + '00'],
      //     obj
      //   )
      // }

      for (const [k, v] of Object.entries(countSeven)) {
        obj = {
          code: k,
          name: cpvName[k],
          count: v,
          children: [],
        }

        arr.map((i) => {
          i.children.map((item) =>
            item.children.map((it) =>
              it.children.map((ite) =>
                ite.children.map(
                  (itemseven) =>
                    itemseven.code === k.substring(0, 6) + '00' &&
                    itemseven.children.push(obj)
                )
              )
            )
          )
        })
      }
      // for (const [k, v] of Object.entries(countEight)) {
      //   obj = { [k]: { count: v } }
      //   Object.assign(
      //     arr[k.substring(0, 2) + '000000'][k.substring(0, 3) + '00000'][
      //       k.substring(0, 4) + '0000'
      //     ][k.substring(0, 5) + '000'][k.substring(0, 6) + '00'][
      //       k.substring(0, 7) + '0'
      //     ],
      //     obj
      //   )
      // }

      for (const [k, v] of Object.entries(countEight)) {
        obj = {
          code: k,
          name: cpvName[k],
          count: v,
        }

        arr.map((i) => {
          i.children.map((item) =>
            item.children.map((it) =>
              it.children.map((ite) =>
                ite.children.map((itemseven) =>
                  itemseven.children.map(
                    (itemeight) =>
                      itemeight.code === k.substring(0, 7) + '0' &&
                      itemeight.children.push(obj)
                  )
                )
              )
            )
          )
        })
      }

      // let newObject = Object.values(arr)[0]
      fs.writeFile('./src/data/count.jsx', JSON.stringify(arr), (err) => {
        err && console.log('error', err)
      })
    })
  }
)
