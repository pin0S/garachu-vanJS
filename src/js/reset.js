function clearDailyData(tomorrow) {

    let now = new Date()

    if (now.getDay == tomorrow.getDay()) {
        window.localStorage.removeItem('currentGratefuls');
        window.localStorage.removeItem('todaysQuote');

        today = new Date();
        let tomorrowLS = new Date();
        tomorrowLS.setDate(today.getDate() + 1);

        addTomorrowToLS(tomorrowLS)
        console.log('data refreshed')
    }
}

function addTomorrowToLS(tomorrow) {
    localStorage.setItem("tomorrow", JSON.stringify(tomorrow));
}

try {
    if (!JSON.parse(localStorage.getItem('tomorrow'))) {
        let today = new Date();
        let tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        localStorage.setItem("tomorrow", JSON.stringify(tomorrow));
        clearDailyData(tomorrow)
    } else {
        clearDailyData(JSON.parse(localStorage.getItem('tomorrow')))
    } 
} catch(e) {
    console.log(e.message)
}









