//add first node function (function invocation in the html file)

let addFirst = () => {
  if (typeof window !== "undefined") {
    console.log("In Browser");
    //insert first value using insert first method
    node.insertFirst(inputValue());
    //show the update into the browser
    createNodeContainer(node.head.data);
    console.log(node);
  } else {
    console.log("In nodeJS");
    console.log(node);
  }
};
