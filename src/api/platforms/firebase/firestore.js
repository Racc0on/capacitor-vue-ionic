import firestore from "@/firebase";

export default {
  getCollection(collectionId) {
    return new Promise((resolve, reject) => {
      let docRef = firestore.collection(collectionId);
      docRef
        .get()
        .then(function(querySnapshot) {
          let documents = [];
          querySnapshot.forEach(function(doc) {
            let document = {
              id: doc.id,
              data: doc.data()
            };
            documents.push(document);
          });
          resolve(documents);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  queryCollection(collectionId, filter) {
    return new Promise((resolve, reject) => {
      let collectionRef = firestore.collection(collectionId);
      collectionRef
        .where(filter.fieldToFilter, filter.comparison, filter.value)
        .get()
        .then(function(querySnapshot) {
          let documents = [];
          querySnapshot.forEach(function(doc) {
            let document = {
              id: doc.id,
              data: doc.data()
            };
            documents.push(document);
          });
          resolve(documents);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  getDocument(collectionId, documentId) {
    return new Promise((resolve, reject) => {
      let docRef = firestore.collection(collectionId).doc(documentId);

      // fetch data from firestore
      docRef
        .get()
        .then(function(doc) {
          if (doc.exists) {
            // console.log("Document data:", doc.data());
            resolve(doc.data());
          } else {
            // doc.data() will be undefined in this case
            // eslint-disable-next-line
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          reject(error);
          // eslint-disable-next-line
          console.log("Error getting document:", error);
        });
    });
  },

  removeDocument(collectionId, documentId) {
    return new Promise((resolve, reject) => {
      firestore
        .collection(collectionId)
        .doc(documentId)
        .delete()
        .then(() => {
          // eslint-disable-next-line
          console.log("Document successfully deleted!");
          resolve();
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error("Error removing document: ", error);
          reject(error);
        });
    });
  },

  removeDocuments(collectionId, documentIds) {
    // eslint-disable-next-line
    console.log("here" + documentIds);
    return new Promise((resolve, reject) => {
      let batch = firestore.batch();

      documentIds.forEach(element => {
        let ref = firestore.collection(collectionId).doc(element);
        batch.delete(ref);
      });

      batch
        .commit()
        .then(() => {
          // eslint-disable-next-line
          console.log("Documents successfully deleted!");
          resolve();
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error("Error removing document: ", error);
          reject(error);
        });
    });
  },

  addDocument(collectionId, payload) {
    return new Promise((resolve, reject) => {
      let docRef = firestore.collection(collectionId);
      docRef
        .add(payload.data)
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  },

  setDocument(collectionId, payload) {
    return new Promise((resolve, reject) => {
      let docRef = firestore.collection(collectionId).doc(payload.id);
      docRef
        .set(payload.data)
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
  },

  updateDocument(collectionId, payload) {
    return new Promise((resolve, reject) => {
      let docRef = firestore.collection(collectionId).doc(payload.id);
      docRef
        .update(payload.data)
        .then(() => resolve())
        .catch(err => reject(err));
    });
  }
};
