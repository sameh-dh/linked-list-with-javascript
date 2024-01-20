# linked-list-with-javascript


## Step 1 : Create node class 😒

```js
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
```

## Step 2 : Create LinekdList class and insert first NODE 😒

```js
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert First Node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
}
```

## Extra task : Show the first node in your browser

## Extra task : Stop being lazy and go organise your files before it's too late 😜
