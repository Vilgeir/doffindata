const fs = require('fs')
var objectPath = require('object-path')

fs.readFile(
  './src/data/doffin-bach-default-rtdb-F02_2014-export.json',
  'utf8',
  (err, data) => {
    err && console.log(err)
    let regex = /[0-9]/g
    let threeMonths = Object.values(JSON.parse(data)).map((js) =>
      js.kunngjoringsdato.substring(0, 8) === '2020-09-'
        ? js.cpvnumber
        : js.kunngjoringsdato.substring(0, 8) === '2020-10-'
        ? js.cpvnumber
        : js.kunngjoringsdato.substring(0, 8) === '2020-11-' && js.cpvnumber
    )

    let mainCateogies = [
      'IT',
      'Bygg og anlegg',
      'Helse',
      'Varer og utstyr',
      'Tjenester',
      'Elektronisk utstyr',
      'Transport',
      'Kontor',
      'Olje og kjemikalier',
      'Offentlige ytelser',
    ]

    itArray = ['48', '51', '72']
    byggArray = ['14', '16', '42', '43', '44', '45', '71', '77']
    helseArray = ['33', '85', '92']
    varerArray = ['03', '15', '18', '19', '35', '37', '41']
    tjenesterArray = ['50', '55', '66', '70', '73', '79', '80', '90']
    elektrArray = ['31', '32']
    transportArray = ['34', '60', '63', '64']
    kontorArray = ['22', '30', '39']
    oljeArray = ['24', '76', '09', '38']
    offentligeArray = ['65', '75', '98']

    // js.dato == '2020-09-' + regex ? js.cpvnumber : ''

    let cpvNumbers = threeMonths.filter(Boolean)

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

    // console.log(countEight)
    // fs.readFile('./src/data/cpv.json', 'utf8', (err, cpvname) => {
    fs.readFile('./src/data/newjson.json', 'utf8', (err, cpvname) => {
      err && console.log(err)
      let cpvName = JSON.parse(cpvname)
      let arr = []
      // console.log(cpvName)
      mainCateogies.map((i) => {
        obj = {
          main: i,
          children: [],
        }
        arr.push(obj)
      })
      let cpvCodeandName = cpvName.map((i) => [i.id, i.label.substring(9)])

      for (let [key, value] of Object.entries(count)) {
        obj = {
          code: key,
          name: cpvCodeandName
            .map((i) => i[0] == key && i[1])
            .filter((it) => it !== false)
            .join(''),
          countWithoutChildren: countEight[key],
          countWithChildren: value,
          children: [],
        }

        arr.map(
          (i) =>
            i.main === 'IT' &&
            itArray.includes(key.substring(0, 2)) &&
            i.children.push(obj)
        )
        arr.map(
          (i) =>
            i.main === 'Bygg og anlegg' &&
            byggArray.includes(key.substring(0, 2)) &&
            i.children.push(obj)
        )
        arr.map(
          (i) =>
            i.main === 'Helse' &&
            helseArray.includes(key.substring(0, 2)) &&
            i.children.push(obj)
        )
        arr.map(
          (i) =>
            i.main === 'Varer og utstyr' &&
            varerArray.includes(key.substring(0, 2)) &&
            i.children.push(obj)
        )
        arr.map(
          (i) =>
            i.main === 'Tjenester' &&
            tjenesterArray.includes(key.substring(0, 2)) &&
            i.children.push(obj)
        )
        arr.map(
          (i) =>
            i.main === 'Elektronisk utstyr' &&
            elektrArray.includes(key.substring(0, 2)) &&
            i.children.push(obj)
        )
        arr.map(
          (i) =>
            i.main === 'Transport' &&
            transportArray.includes(key.substring(0, 2)) &&
            i.children.push(obj)
        )
        arr.map(
          (i) =>
            i.main === 'Kontor' &&
            kontorArray.includes(key.substring(0, 2)) &&
            i.children.push(obj)
        )
        arr.map(
          (i) =>
            i.main === 'Olje og kjemikalier' &&
            oljeArray.includes(key.substring(0, 2)) &&
            i.children.push(obj)
        )

        arr.map(
          (i) =>
            i.main === 'Offentlige ytelser' &&
            offentligeArray.includes(key.substring(0, 2)) &&
            i.children.push(obj)
        )
      }

      for (const [k, v] of Object.entries(countThree)) {
        obj = {
          code: k,
          name: cpvCodeandName
            .map((i) => i[0] == k && i[1])
            .filter((it) => it !== false)
            .join(''),
          countWithoutChildren: countEight[k],
          countWithChildren: v,
          children: [],
        }

        arr.map((item) => {
          item.children.map(
            (i) =>
              i.code === k.substring(0, 2) + '000000' &&
              i.code !== k &&
              i.children.push(obj)
          )
        })
      }

      for (const [k, v] of Object.entries(countFour)) {
        obj = {
          code: k,
          name: cpvCodeandName
            .map((i) => i[0] == k && i[1])
            .filter((it) => it !== false)
            .join(''),
          countWithoutChildren: countEight[k],
          countWithChildren: v,
          children: [],
        }

        arr.map((i) => {
          i.children.map((it) =>
            it.children.map(
              (item) =>
                item.code === k.substring(0, 3) + '00000' &&
                item.code !== k &&
                item.children.push(obj)
            )
          )
        })
      }
      for (const [k, v] of Object.entries(countFive)) {
        obj = {
          code: k,
          name: cpvCodeandName
            .map((i) => i[0] == k && i[1])
            .filter((it) => it !== false)
            .join(''),
          countWithoutChildren: countEight[k],
          countWithChildren: v,
          children: [],
        }

        arr.map((i) => {
          i.children.map((item) =>
            item.children.map((ite) =>
              ite.children.map(
                (it) =>
                  it.code === k.substring(0, 4) + '0000' &&
                  it.code !== k &&
                  it.children.push(obj)
              )
            )
          )
        })
      }

      for (const [k, v] of Object.entries(countSix)) {
        obj = {
          code: k,
          name: cpvCodeandName
            .map((i) => i[0] == k && i[1])
            .filter((it) => it !== false)
            .join(''),
          countWithoutChildren: countEight[k],
          countWithChildren: v,
          children: [],
        }

        arr.map((i) => {
          i.children.map((item) =>
            item.children.map((it) =>
              it.children.map((items) =>
                items.children.map(
                  (ite) =>
                    ite.code === k.substring(0, 5) + '000' &&
                    ite.code !== k &&
                    ite.children.push(obj)
                )
              )
            )
          )
        })
      }

      for (const [k, v] of Object.entries(countSeven)) {
        obj = {
          code: k,
          name: cpvCodeandName
            .map((i) => i[0] == k && i[1])
            .filter((it) => it !== false)
            .join(''),
          countWithoutChildren: countEight[k],
          countWithChildren: v,
          children: [],
        }

        arr.map((i) => {
          i.children.map((item) =>
            item.children.map((it) =>
              it.children.map((ite) =>
                ite.children.map((items) =>
                  items.children.map(
                    (itemseven) =>
                      itemseven.code === k.substring(0, 6) + '00' &&
                      itemseven.code !== k &&
                      itemseven.children.push(obj)
                  )
                )
              )
            )
          )
        })
      }

      for (const [k, v] of Object.entries(countEight)) {
        obj = {
          code: k,
          name: cpvCodeandName
            .map((i) => i[0] == k && i[1])
            .filter((it) => it !== false)
            .join(''),
          count: v,
        }

        arr.map((i) => {
          i.children.map((item) =>
            item.children.map((it) =>
              it.children.map((ite) =>
                ite.children.map((itemseven) =>
                  itemseven.children.map((items) =>
                    items.children.map(
                      (itemeight) =>
                        itemeight.code === k.substring(0, 7) + '0' &&
                        itemeight.code !== k &&
                        itemeight.children.push(obj)
                    )
                  )
                )
              )
            )
          )
        })
      }
      console.log(arr.map((i) => i.children))
      fs.writeFile(
        './src/data/withNorwegianNames.jsx',
        JSON.stringify(arr),
        (err) => {
          err && console.log('error', err)
        }
      )
    })
  }
)
