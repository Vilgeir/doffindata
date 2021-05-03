const functions = require("firebase-functions");
const algoliasearch = require("algoliasearch");

const APP_ID = functions.config().algolia.app;
const ADMIN_KEY = functions.config().algolia.key;

const client = algoliasearch(APP_ID, ADMIN_KEY);
const index = client.initIndex("tendre");

exports.addToIndex = functions.firestore
  .document("tendre/{tendreId}")
  .onCreate((snapshot) => {
    const data = snapshot.data();
    const objectID = snapshot.id;
    return index.saveObject({ ...data, objectID });
  });

exports.updateIndex = functions.firestore
  .document("tendre/{tendreId}")
  .onUpdate((change) => {
    const newData = change.after.data();
    const objectID = change.after.id;
    return index.saveObject({ ...newData, objectID });
  });

// exports.updateIndex = functions.firestore
//   .document("anbud/{anbudId}")
//   .onUpdate((snapshot) => {
//     const data = snapshot.data();
//     const objectID = snapshot.id;
//     return index.saveObject({ ...data, objectID });
//   });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// exports.test = functions.https.onRequest(async (req, res) => {
//     const snap = await admin.database().ref('/formattedData/F02_2014/{id}/cpvmain').once('value')
//     res.send(snap)
// })

// .onUpdate((snapshot) => {
//     console.log(snapshot.val())

// })
