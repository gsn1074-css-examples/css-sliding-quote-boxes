var currentQuote = 0;

function updateQuote() {

	var nodes = document.querySelectorAll("[data-player] > *");

	for(var i = 0; i < nodes.length; i++) {

			if(i == currentQuote) {
    
                nodes[i].setAttribute("data-status","visible");
    
            } else {
    
                nodes[i].setAttribute("data-status","");
    
            }
	}
    
	if(currentQuote < nodes.length - 1) { 
        
        currentQuote++;

    } else {
        
        currentQuote = 0;
    
    }
}

window.addEventListener("load", function() {

	updateQuote();
	setInterval(updateQuote, 6000);

});