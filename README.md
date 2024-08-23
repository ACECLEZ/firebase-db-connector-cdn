# firebase-db-connector-cdn

##### Methods

###### Read
- `readData(collectionID, docID, fieldID)`

###### Write
- `postData(collectionID, docID, fieldID, data)`

###### Update
- `updateData(collectionID, docID, fieldID, data)`

###### Delete
- `deleteData(collectionID, docID, fieldID)`
- `deleteField(collectionID, docID, fieldID)`
- `deleteDoc(collectionID, docID)`
- `deleteCollection(collectionID, batchSize = 10)`

##### Update Log
###### v1.0.0
- [+] post data to server `postData(collectionID, docID, fieldID, data)`
- [+] read data in server `readData(collectionID, docID, fieldID)`

###### v1.0.1
- [+] update firebase data `updateData(collectionID, docID, fieldID, data)`
- [+] delete firebase data `deleteData(collectionID, docID, fieldID)`
- [+] delete firebase field `deleteField(collectionID, docID, fieldID)`
- [+] delete firebase document `deleteDoc(collectionID, docID)`
- [+] delete firebase collection `deleteCollection(collectionID, batchSize = 10)`
