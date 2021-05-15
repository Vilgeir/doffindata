const axios = require('axios')
const { parse } = require('node-html-parser')
const fs = require('fs')
const firebase = require('firebase/app')
const firestore = require('firebase/firestore')
// const firebaseConfig = require('./firebaseConfig')

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
  let docs
  data.url_dokumentasjon.substring(8, 17) === 'permalink'
    ? axios.get(data.url_dokumentasjon).then((res) => {
        const dom = parse(res.data)
        let files = dom.querySelector('#fileslist').querySelectorAll('a')

        docs = {
          form: data.form,
          kunngjoringsdato: data.kunngjoringsdato,
          tilleggsCPV: data.tilleggsCPV,
          postkode: data.postkode,
          sporsmalsfrist: data.sporsmalsfrist,
          sted: data.sted,
          epost: data.epost,
          url_deltakelse: data.url_deltakelse,
          cpvnumber: data.cpvnumber,
          cpvnumbermain: data.cpvnumber.substring(0, 2) + '000000',
          cpvnumbersub: data.cpvnumber.substring(0, 3) + '00000',
          cpvnumbersubsub: data.cpvnumber.substring(0, 4) + '0000',
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
          // documents: data.documents ? data.documents : null,
          telefon: data.telefon,
          tildelingskriterier: data.tildelingskriterier,
          kontaktperson: data.kontaktperson,
          land: data.land,
          url_kjoperprofil: data.url_kjoperprofil,
          url_oppdragsgiver: data.url_oppdragsgiver,
          documents: files.map((node) => ({
            name: node.text,
            url: node.getAttribute('href'),
          })),
          pris: data.pris,
        }
        // console.log(docs)
        writeToFirestore(data, docs)
      })
    : (docs = {
        form: data.form,
        kunngjoringsdato: data.kunngjoringsdato,
        tilleggsCPV: data.tilleggsCPV,
        postkode: data.postkode,
        sporsmalsfrist: data.sporsmalsfrist,
        sted: data.sted,
        epost: data.epost,
        url_deltakelse: data.url_deltakelse,
        cpvnumber: data.cpvnumber,
        cpvnumbermain: data.cpvnumber.substring(0, 2) + '000000',
        cpvnumbersub: data.cpvnumber.substring(0, 3) + '00000',
        cpvnumbersubsub: data.cpvnumber.substring(0, 4) + '0000',
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
        // documents: data.documents ? data.documents : null,
        telefon: data.telefon,
        tildelingskriterier: data.tildelingskriterier,
        kontaktperson: data.kontaktperson,
        land: data.land,
        url_kjoperprofil: data.url_kjoperprofil,
        url_oppdragsgiver: data.url_oppdragsgiver,
        documents: null,
        pris: data.pris,
      })

  writeToFirestore(data, docs)
  // console.log(docs)
}

// const writeToFirestore = async (data, docs) => {
//   let documents = db.collection('test').doc(docs.id)
//   try {
//     await documents.set(docs)
//     console.log('Document successfully written!')
//   } catch (error) {
//     console.error('Error writing document: ', error)
//   }
// }

const writeToFirestore = async (data, docs) => {
  db.collection('tendre')
    .doc(docs.id)
    .set(docs)
    .then(() => {
      console.log('Document successfully written!')
    })
    .catch((error) => {
      console.error('Error writing document: ', error)
    })
}
let data
getData('anbud', data)
