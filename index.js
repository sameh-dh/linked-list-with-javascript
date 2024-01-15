

let inputValue = () =>{
  if (typeof window !== "undefined") {
    console.log("In Browser");
    var data = document.getElementById("dataInput").value;
    console.log(data);
    let node = new LinkedList()
    node.insertFirst(data)
    console.log(node)
  }
  else {
    console.log("In nodeJS");
  }
}


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
    this.head = new Node(data , this.head);
    this.size ++;
  }
}
