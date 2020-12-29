const gratefulForm = document.querySelector('.grateful');
const gratefulList = document.querySelector('.grateful-list');

let currentGratefuls = []

function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted!');
    const grateful = e.currentTarget.grateful.value;

    if (!grateful) return;

    const item = {
        grateful,
        id: Date.now(),
        complete: false,
    };
    // Push the items into our state
    currentGratefuls.push(item);
    
    // Clear the form
    e.target.reset();
    // fire off a custom event that will tell anyone else who cares that the items have been updated!
    displayGratefuls(e)
}

function displayGratefuls(e) {
    //check to see if less than 3 current gratefuls
    if (currentGratefuls.length < 4) {
        let html = currentGratefuls.map(
            item => `<li class="grateful-item">
            <span class="itemName">${item.grateful}</span>
            </li>`
        )
        .join(''); 

        gratefulList.innerHTML = html
    } else {
        alert("Save some gratefulness for tomorrow 😀")
    }    
}

gratefulForm.addEventListener('submit', handleSubmit);