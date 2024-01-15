# linked-list-with-javascript

# Linked list 

```js
//in case you want to run and test your index js file 
do:
npm install -g nodemon
then:
nodemon index.js
then: 
"try to console log sometiong inside index.js file and it will appear in your terminal " 

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
## Step 1 : Create LinekdList class and insert first NODE 😒
```js
  class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert First Node
  insertFirst(data) {
    this.head = new Node(data , this.head);
    this.size ++;
  }
}
```