# linked-list-with-javascript

# Linked list 

```js
//in case you want to run and test your index js file 
do:
npm install -g nodemon
then:
nodemon index.js
then: 
"try to console log sometiong and it will appear in your terminal " 

```
## Step 1 : Create node class 😒

```js
  class Node {
    constructor (data, next = null ) {
        this.data = data ; 
        this.next = next ; 
    }
    }
```