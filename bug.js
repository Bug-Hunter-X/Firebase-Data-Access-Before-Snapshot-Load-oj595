The Firebase SDK may throw an error if you attempt to access a property of a document snapshot before the snapshot has fully loaded.  This commonly happens when asynchronously reading data, and trying to access the data before the promise resolves. For example:

```javascript
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  console.log(doc.data().myField); // Error if data is not yet loaded
});
```
This might not always throw a clear error, leading to unexpected behavior or silent failures.