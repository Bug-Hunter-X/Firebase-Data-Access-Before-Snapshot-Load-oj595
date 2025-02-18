To fix this, always ensure that you access the data within the `.then()` block of the promise or use `async/await`:

```javascript
// Using .then()
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  if (doc.exists) {
    console.log(doc.data().myField); // Access data after it's loaded
  } else {
    console.log('No such document!');
  }
});

// Using async/await
async function getData() {
  const docRef = db.collection('myCollection').doc('myDoc');
  const doc = await docRef.get();
  if (doc.exists) {
    console.log(doc.data().myField);
  } else {
    console.log('No such document!');
  }
}
getData();
```

Using `async/await` often improves code readability and makes handling asynchronous operations cleaner.