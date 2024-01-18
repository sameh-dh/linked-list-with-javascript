 class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
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

  
