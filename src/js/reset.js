let nextMidnight = new Date();
nextMidnight.setHours(24,0,0,0);

let now = new Date();
let remainingTimeInSeconds = (nextMidnight.getTime() - now.getTime())
console.log(`Midnight: ${nextMidnight}, Current: ${now}, Diff: ${remainingTimeInSeconds}`)


function clearDailyData() {
    
    window.localStorage.removeItem('currentGratefuls');
    window.localStorage.removeItem('todaysQuote');
    
    console.log('data is refreshed')
}

setInterval(clearDailyData, remainingTimeInSeconds);







