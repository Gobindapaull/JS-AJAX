function loadData() {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        const container = document.getElementById("demo");
        container.innerHTML = xhr.responseText;
        // Returns all the header information from the server resource
        console.log(this.getAllResponseHeaders());
       // specific header information
        console.log(this.getResponseHeader("content-type"));
    };
   
    xhr.open("GET", "./data/data.txt");
  //  xhr.setRequestHeader("Token","ETH");
    xhr.send();
   // xhr.abort();
}