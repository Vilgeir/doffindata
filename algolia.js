const functions = require('firebase-functions')
const algoliasearch = require('algoliasearch')

const APP_ID = functions.config().algolia.app
const ADMIN_KEY = functions.config().algolia.key

const client = algoliasearch(APP_ID, ADMIN_KEY)
const index = client.initIndex('tendre')

exports.addToIndex = functions.firestore
  .document('F02_2014/{F02_2014Id}')
  .onCreate((snapshot) => {
    const data = snapshot.data()
    const objectID = snapshot.id
    return index.saveObject({ ...data, objectID })
  })

// index
// .saveObjects(data, { autoGenerateObjectIDIfNotExist: true })
// .then(({ dataIDs }) => {
//   console.log(dataIDs);
// });

// const data = require("./cpvmain.json");
// index.addObjects(data);
