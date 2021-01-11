const gratefulForm = document.querySelector('.grateful');
const gratefulList = document.querySelector('.grateful-list');

const currentGratefuls = []
const historicGratefuls = []

function handleSubmit(e) {
    e.preventDefault();
    
    const grateful = e.currentTarget.grateful.value;
    
    //if it is empty don't submit it
    if (!grateful) return;

    var d = new Date();

    const item = {
        grateful,
        id: Date.now(),
        month: d.getMonth(),
        year: d.getFullYear()

    };
    // Push the items into our state
    if (currentGratefuls.length < 3) {
        currentGratefuls.push(item);
        historicGratefuls.push(item);
    } else {
        alert("Save some gratefulness for tomorrow 😀")
    }    
    // Clear the form
    e.target.reset();
    // fire off a custom event that the currentGratefuls have been updated!
    gratefulList.dispatchEvent(new CustomEvent('currentGratefulsUpdated'));
}

function displayGratefuls(e) {
    //check to see if less than 3 current gratefuls
    if (currentGratefuls.length < 4) {
        let html = currentGratefuls.map(
            item => `<li class="grateful-item">
            <span class="itemName">I am grateful for ${item.grateful} 🙏</span>
            </li>`
        )
        .join(''); 

        gratefulList.innerHTML = html
    } else {
        alert("Save some gratefulness for tomorrow 😀")
    }    
}

function mirrorToLocalStorage() {
    localStorage.setItem('historicGratefuls', JSON.stringify(historicGratefuls));
    localStorage.setItem('currentGratefuls', JSON.stringify(currentGratefuls));
}

function restoreGratefuls() {

    const lsGratefuls = JSON.parse(localStorage.getItem('currentGratefuls'));
    const hsGratefuls = JSON.parse(localStorage.getItem('historicGratefuls'));
    
    if (hsGratefuls.length) {
        historicGratefuls.push(...hsGratefuls);
        gratefulList.dispatchEvent(new CustomEvent('currentGratefulsUpdated'))
    }

    try {
        if (lsGratefuls.length) {
            currentGratefuls.push(...lsGratefuls);
            gratefulList.dispatchEvent(new CustomEvent('currentGratefulsUpdated'));
        }
    } catch(error) {
        console.log(error.message)
    }
    
}

gratefulForm.addEventListener('submit', handleSubmit);
gratefulList.addEventListener('currentGratefulsUpdated', displayGratefuls);
gratefulList.addEventListener('currentGratefulsUpdated', mirrorToLocalStorage);

restoreGratefuls();