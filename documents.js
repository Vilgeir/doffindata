const axios = require('axios')
const { parse } = require('node-html-parser')
const fs = require('fs')
const firebase = require('firebase')
const firestore = require('firebase/firestore')
import firebaseConfig from './firebaseConfig'

const fb =
  firebase.apps.length > 0
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig)

const db = fb.firestore()

const getData = async (nameCollection) => {
  await db
    .collection(nameCollection)
    .get()
    .then((querySnapshot) =>
      querySnapshot.forEach((doc) => {
        data = { ...doc.data(), id: doc.id }
        writeData(data)
      })
    )
}

const writeData = (data) => {
  console.log(data)
  data.url_dokumentasjon.substring(8, 17) === 'permalink' &&
    axios.get(data.url_dokumentasjon).then((res) => {
      const dom = parse(res.data)
      let files = dom.querySelector('#fileslist').querySelectorAll('a')

      let docs = {
        form: data.form,
        kunngjoringsdato: data.kunngjoringsdato,
        tilleggsCPV: data.tilleggsCPV,
        sted: data.sted,
        epost: data.epost,
        nettside: data.nettside,
        url_deltakelse: data.url_deltakelse,
        cpvnumber: data.cpvnumber,
        url_dokumentasjon: data.url_dokumentasjon,
        oppdragsgiver: data.oppdragsgiver,
        cpv: data.cpv,
        cpvmain: data.cpvmain,
        tilbudsfrist: data.tilbudsfrist,
        tittel: data.tittel,
        orgnr: data.orgnr,
        beskrivelse: data.beskrivelse,
        adresse: data.adresse,
        id: data.id,
        documents: files.map((node) => ({
          name: node.text,
          url: node.getAttribute('href'),
        })),
      }

      writeToFirestore(data, docs)
    })
}

const writeToFirestore = async (data, docs) => {
  console.log(docs.id)

  let documents = db.collection('F02_2014').doc(docs.id)
  try {
    await documents.update(docs)
    console.log('Document successfully written!')
  } catch (error) {
    console.error('Error writing document: ', error)
  }
}
let data
// getData('F02_2014', data)
