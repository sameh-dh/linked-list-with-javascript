let node;
node = new LinkedList();

//input value
let inputValue = () => {
  if (typeof window !== "undefined") {
    console.log("In Browser");
    //get the input value
    var data = document.getElementById("dataInput").value;
    return data;
  } else {
    console.log("In nodeJS");
    console.log(node);
  }
};

//create node container
let createNodeContainer = (data) => {
  //get the div where we want to insert our new node in order to show it in the browser
  let currentDiv = document.getElementById("node-container");

  //node container process
  const nodeContainer = document.createElement("div");
  nodeContainer.classList.add("node-container");
  //node value content process
  const nodeValue = document.createElement("p");
  const nodeValueContent = document.createTextNode(data);
  nodeValue.appendChild(nodeValueContent);
  //next node process
  const nextNode = document.createElement("div");
  nextNode.classList.add("next-node");
  // arrow node process
  const arrowNode = document.createElement("div");
  arrowNode.classList.add("arrow");

  const nextNodeodeValue = document.createElement("p");
  const nextNodeodeContent = document.createTextNode("null");
  nextNodeodeValue.appendChild(nextNodeodeContent);
  if (node.size === 1) {
    nextNode.appendChild(nextNodeodeValue);
  }
  //now let's concat them together
  nodeContainer.appendChild(nodeValue);
  nodeContainer.appendChild(nextNode);

  //then use appendChild to add the content
  currentDiv.appendChild(nodeContainer);
  currentDiv.insertBefore(nodeContainer, currentDiv.firstChild);
  
  if (node.size > 1 && node.size=== 2) {
    console.log(node.size);
    // currentDiv.append(arrowNode);
    currentDiv.insertBefore(arrowNode.cloneNode(true), currentDiv.lastElementChild);
    // currentDiv.insertBefore(arrowNode, currentDiv.firstElementChild);
  }
  if (node.size > 1 ) {
    console.log(node.size);
    // currentDiv.append(arrowNode);
    // currentDiv.insertBefore(arrowNode, currentDiv.lastElementChild);
    currentDiv.insertBefore(arrowNode.cloneNode(true), currentDiv.firstElementChild);
  }
};
