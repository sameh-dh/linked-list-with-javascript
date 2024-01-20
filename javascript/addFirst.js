//add first node function (function invocation in the html file)

let addFirst = () => {
    //insert first value using insert first method
        
    node.insertFirst(inputValue()); //LinekdList.js file and index.js file 
    //show the update into the browser
        
    createNodeContainer(node.head.data,"First"); //index.js file
    console.log(node);
 
};

//(function invocation inside index.js)
 let createNodeContainerFirst = (currentDiv ,nodeContainer ,arrowNode) => {
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
 }


//girls from november