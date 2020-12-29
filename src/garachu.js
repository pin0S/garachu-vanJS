const gratefulForm = document.querySelector('.grateful');
const gratefulList = document.querySelector('.grateful-list');

let gratefuls = []

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
    gratefuls.push(item);
    console.log(`There are now ${gratefuls.length} in your state`);
    // Clear the form
    e.target.reset();
    // fire off a custom event that will tell anyone else who cares that the items have been updated!
    displayGratefuls(e)
}

function displayGratefuls(e) {
    console.log(e)

}

gratefulForm.addEventListener('submit', handleSubmit);