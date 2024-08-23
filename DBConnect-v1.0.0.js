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
