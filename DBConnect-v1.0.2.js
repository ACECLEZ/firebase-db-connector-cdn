//post data to firebase
function postData(collectionID, docID, fieldID, data) {
    var db = firebase.firestore();
    db.collection(collectionID).doc(docID).set({
        [fieldID]: data
    }, { merge: true })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}


//post nested collection
function postExtendedData(collectionID, docID, interCollectionID, interDocID, fieldID, data) {
    var db = firebase.firestore();
    db.collection(collectionID).doc(docID)
        .collection(interCollectionID).doc(interDocID)
        .set({
            [fieldID]: data
        }, { merge: true })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

//read firebase data
function readData(collectionID, docID, fieldID) {
    var db = firebase.firestore();
    db.collection(collectionID).doc(docID).get()
        .then((doc) => {
            if (doc.exists) {
                var data = doc.data();
                console.log("Data:", data[fieldID]);
                return data[fieldID];
            } else {
                console.log("No such document!");
                return null;
            }
        })
        .catch((error) => {
            console.error("Error getting document: ", error);
        });
}

//update firebase data
function updateData(collectionID, docID, fieldID, data) {
    var db = firebase.firestore();
    db.collection(collectionID).doc(docID).update({
        [fieldID]: data
    })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
}

//delete firebase data
function deleteData(collectionID, docID, fieldID) {
    var db = firebase.firestore();
    let updateObject = {};
    updateObject[fieldID] = firebase.firestore.FieldValue.delete();
    db.collection(collectionID).doc(docID).update(updateObject)
        .then(() => {
            console.log("Field successfully deleted!");
        })
        .catch((error) => {
            console.error("Error deleting field: ", error);
        });
}

//delete firebase collection
function deleteCollection(collectionID, batchSize = 10) {
    var db = firebase.firestore();
    var collectionRef = db.collection(collectionID);
    function deleteQueryBatch(querySnapshot, resolve, reject) {
        var batch = db.batch();
        querySnapshot.forEach((doc) => {
            batch.delete(doc.ref);
        });
        batch.commit().then(() => {
            if (querySnapshot.size === 0) {
                resolve();
                return;
            }
            process.nextTick(() => {
                deleteQueryBatch(
                    collectionRef.limit(batchSize).get(),
                    resolve,
                    reject
                );
            });
        }).catch(reject);
    }
    return new Promise((resolve, reject) => {
        deleteQueryBatch(
            collectionRef.limit(batchSize).get(),
            resolve,
            reject
        );
    });
}

//delete firebase document
function deleteDoc(collectionID, docID) {
    var db = firebase.firestore();

    db.collection(collectionID).doc(docID).delete()
        .then(() => {
            console.log("Document successfully deleted!");
        })
        .catch((error) => {
            console.error("Error removing document: ", error);
        });
}

//delete firebase field
function deleteField(collectionID, docID, fieldID) {
    var db = firebase.firestore();
    let updateObject = {};
    updateObject[fieldID] = firebase.firestore.FieldValue.delete();
    db.collection(collectionID).doc(docID).update(updateObject)
        .then(() => {
            console.log("Field successfully deleted!");
        })
        .catch((error) => {
            console.error("Error deleting field: ", error);
        });
}
