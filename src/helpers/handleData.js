import { db } from '../firebaseConfig'

export const getData = async (collection, where, value, state) => {
  await db
    .collection(collection)
    .where(where, '==', value)
    .limit(10)
    .get()
    .then((querySnapshot) => {
      const arr = []
      querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data() })
      })

      state(arr)
    })
}

export const getProcurement = async (collection, document, state) => {
  try {
    const doc = await db.collection(collection).doc(document).get()
    if (doc.exists) {
      const arr = []
      arr.push({ ...doc.data() })
      state(arr[0])
    } else {
      console.log('No such document!')
    }
  } catch (error) {
    console.log('Error getting document:', error)
  }
}
