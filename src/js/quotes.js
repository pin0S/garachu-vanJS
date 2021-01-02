const currentQuote = document.querySelector('.quote')

let todaysQuote = {};

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
    
    if (Object.keys(todaysQuote).length === 0 && todaysQuote.constructor === Object) {
        todaysQuote = (data[Math.floor(Math.random() * 1643)]);
        currentQuote.dispatchEvent(new CustomEvent('todaysQuoteUpdated'));
    }   
}

function displayQuote() {
    let html = `"${todaysQuote.text}" - ${todaysQuote.author}`
    currentQuote.innerHTML = html
}

function mirrorToLocalStorage() {
    localStorage.setItem('todaysQuote', JSON.stringify(todaysQuote));
}

function restoreQuote() {
    const lsQuote = JSON.parse(localStorage.getItem('todaysQuote'));
    
    if (lsQuote != null) {
        todaysQuote = lsQuote;
        displayQuote(lsQuote)
    } else {
        getQuotes();
    }
}

currentQuote.addEventListener('todaysQuoteUpdated', mirrorToLocalStorage);
currentQuote.addEventListener('todaysQuoteUpdated', displayQuote);

restoreQuote();

