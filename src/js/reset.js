function clearDailyData(tomorrow) {

    let now = new Date()

    if (now.getDay == tomorrow.getDay()) {
        window.localStorage.removeItem('currentGratefuls');
        window.localStorage.removeItem('todaysQuote');

        updateTomorrowLS(setDates())
        
        // reload the page so changes take effect
        location.reload();
    }
}

function updateTomorrowLS(tomorrow) {
    localStorage.setItem("tomorrow", JSON.stringify(tomorrow));
}

try {
    if (!JSON.parse(localStorage.getItem('tomorrow'))) {
        localStorage.setItem("tomorrow", JSON.stringify(setDates()));
        clearDailyData(tomorrow)
    } else {
        clearDailyData(JSON.parse(localStorage.getItem(setDates())))
    } 
} catch(e) {
    console.log(e.message)
}

function setDates() {
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    return tomorrow
}








