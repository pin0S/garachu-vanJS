const currentQuote = document.querySelector('.quote')

function getQuotes() {
    fetch("https://type.fit/api/quotes/")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
        return randomQuote(data)
    });
}

function randomQuote(data) {
    
    let quote = data[Math.floor(Math.random() * 1643)]
    
    
    let html = `"${quote.text}" - ${quote.author}`
    currentQuote.innerHTML = html

}

getQuotes()

