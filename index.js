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

let node;
node = new LinkedList();

//add first node function (function invocation in the html file)

let inputValue = () => {
  if (typeof window !== "undefined") {
    console.log("In Browser");
    //get the input value
    var data = document.getElementById("dataInput").value;
    console.log(data);
    //add the input value into your global node using LinkedList Class Method
    node.insertFirst(data);
    //get the div where we want to insert our new node in order to show it in the browser
    let currentDiv = document.getElementById("node-container");

    //create node first
        //node container process
    const nodeContainer = document.createElement("div");
    nodeContainer.classList.add("node-container");
        //node value content process
    const nodeValue = document.createElement("p");
    const nodeValueContent = document.createTextNode(data);
    nodeValue.appendChild(nodeValueContent)
          //next node process
    const nextNode = document.createElement("div");
    nextNode.classList.add("next-node");
    
       //now let's concat them together
       nodeContainer.appendChild(nodeValue);
       nodeContainer.appendChild(nextNode)


    //then use appendChild to add the content
    let content = `<div class="node-container">
    <p>${data}</p>
    <div class="next-node"><p>null</p></div>`;
    console.log(currentDiv);

    currentDiv.appendChild(nodeContainer);
    console.log(node);
  } else {
    console.log("In nodeJS");
    console.log(node);
  }
};
