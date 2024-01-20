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
let createNodeContainer = (data,type) => {
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

  // const nextNodeodeValue = document.createElement("p");
  // const nextNodeodeContent = document.createTextNode("null");
  // nextNodeodeValue.appendChild(nextNodeodeContent);

  // if (node.size === 1) {
  //   nextNode.appendChild(nextNodeodeValue);
  // }

  //now let's concat them together
  nodeContainer.appendChild(nodeValue);
  nodeContainer.appendChild(nextNode);

 
if (type === "First") {
  createNodeContainerFirst(currentDiv, nodeContainer , arrowNode)
}
};

