function clearDailyData(tomorrow) {

    let now = new Date()

    tomorrow = new Date(tomorrow)

    if (now.getDay() >= tomorrow.getDay()) {
    
        window.localStorage.removeItem('currentGratefuls');
        window.localStorage.removeItem('todaysQuote');

        updateTomorrowLS(setDates())
        
        // reload the page so changes take effect
        location.reload();
    }
}

function updateTomorrowLS(tomorrow) {
    localStorage.setItem("tomorrow", tomorrow);
}

function setDates() {
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    console.log(`Set Date: ${tomorrow.getDay()}`)

    return tomorrow
}

try {
    if (!(localStorage.getItem('tomorrow'))) {
        console.log('tommorrow does not exist')
        localStorage.setItem("tomorrow", setDates());
        clearDailyData(localStorage.getItem("tomorrow"));
    } else {
        console.log('tommorrow exists')
        clearDailyData(localStorage.getItem("tomorrow"));
    } 
} catch(e) {
    console.log(e.message)
}









