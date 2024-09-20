function createAndAppendDiv() {
    let newDiv = document.createElement("div");
    
    newDiv.textContent = "Hello World";
    
    document.body.appendChild(newDiv);
  }