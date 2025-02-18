# Firebase Data Access Before Snapshot Load
This repository demonstrates a common error in Firebase: attempting to access data from a document snapshot before the asynchronous operation completes.  This often leads to unexpected behavior or silent failures, making it hard to debug.

The `bug.js` file shows the problematic code. The `bugSolution.js` demonstrates the correct approach using async/await or `.then()` to ensure the data is loaded before access.