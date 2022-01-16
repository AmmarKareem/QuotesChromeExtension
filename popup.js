let score = 0;
let questions = [];


	loadQuote();


function loadQuote(){

  let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let responseObject = JSON.parse(xhttp.responseText);
      let randomNumber = Math.floor(Math.random() * 1645)+1;
			let quote = responseObject[randomNumber]
      
			renderQuote(quote);
		}
	};

	xhttp.open("GET", "https://type.fit/api/quotes", true);
	xhttp.send();
}

function renderQuote(quote){
	let text = quote.text;
  let author = quote.author;
  if (quote.author==null){
    author="Anonymous";
  }


	
	document.getElementById("text").innerHTML = text;
  document.getElementById("author").innerHTML = author;
    
    
    

}
