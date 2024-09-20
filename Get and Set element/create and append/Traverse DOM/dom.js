// console.log("Helllo DOM");

function logListItems() {
    let listItems = document.querySelectorAll("#myList li");
        listItems.forEach(function(item) {   //Used advanced techinique "FOr Each"
      console.log(item.textContent);
    });
  }
