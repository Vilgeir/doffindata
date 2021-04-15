const axios = require('axios')
const { parse } = require('node-html-parser')
const fs = require('fs')

let arr = []
fs.readFile('src/data/doffin-form2.json', 'utf8', (err, data) => {
  err && console.log(err)

  JSON.parse(data).map((i, index) => {
    i.url_dokumentasjon.substring(8, 17) === 'permalink' &&
      axios
        .get(i.url_dokumentasjon)
        .then((res) => {
          const dom = parse(res.data)
          let files = dom.querySelector('#fileslist').querySelectorAll('a')

          let docs = {
            title: i.tittel,
            docs: files.map((node) => ({
              name: node.text,
              url: node.getAttribute('href'),
            })),
          }
          // console.log(docs)

          // arr.push(docs)
          // console.log(arr)
          // fs.appendFile(
          //   'src/data/documents.json',
          //   JSON.stringify(docs),
          //   (err) => {
          //     err && console.log('error', err)
          //   }
          // )
          arr.push(docs)
          fs.writeFile('src/data/docs.json', JSON.stringify(arr), (err) => {
            err && console.log('error', err)
          })
          // export default getFiles
        })
        .catch((err) => {
          // console.log(i.url_dokumentasjon)
          console.log(err.response.data)
        })
    // }

    // ? axios

    // : console.log('NOPE')
    //   console.log(i.url_dokumentasjon)
    //   )
  })

  // arr &&
})
// }

// getFiles('https://permalink.mercell.com/141274239.aspx')
