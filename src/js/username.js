//placeholder for username
const nameForm = document.querySelector('.name-display');
const usernameInput = document.querySelector('#username');
const nameChange = document.querySelector('.name-change');
const greetingName = document.querySelector('.greeting-name');

let username = "";

function handleSubmit(e) {
    e.preventDefault();
    console.log('username is in')
    const name = e.currentTarget.username.value;

    // if the usersname is blank don't submit
    if (!name) {
        console.log('didn\'t log')
        return;
    } else {
        username = name;
        // remove the name-display class
        hideNameModule()
    }

    localStorage.setItem("username", username);
    nameChange.dispatchEvent(new CustomEvent('nameEntered'));    

    
}

function displayName(e) {
    console.log('Name is displayed')
    nameChange.textContent = username; 
    greetingName.textContent = username;
}

function hideNameModule() {
    nameForm.classList.add("hide");
}

function showInstuctions() {
    let instructions = document.querySelector('.instructions')
    instructions.classList.remove('hide')

    if (localStorage.getItem('instructions')) { 
        instructions.classList.add('hide')
        nameChange.dispatchEvent(new CustomEvent('instructionsShown'))
    } else {
        document.addEventListener('keyup', event => {
            if (event.code === 'Space') {
                instructions.classList.add('hide')
                nameChange.dispatchEvent(new CustomEvent('instructionsShown'))
            }
            localStorage.setItem('instructions', true)
        })
    }
}



function clearHiddenElements() {
    document.querySelector('.settings-container').classList.remove('hide');
    document.querySelector('.weather-container').classList.remove('hide');
    document.querySelector('.grateful-container').classList.remove('hide');
    document.querySelector('.quotes').classList.remove('hide');
}

function restoreName() {
    const usernameLS = localStorage.getItem('username');

    if (usernameLS) {
        console.log('username is in')
        username = usernameLS;
        nameChange.dispatchEvent(new CustomEvent('nameEntered'))
        hideNameModule()

    }
}

nameForm.addEventListener('submit', handleSubmit);
nameChange.addEventListener('nameEntered', displayName);
nameChange.addEventListener('nameEntered', showInstuctions);
nameChange.addEventListener('instructionsShown', clearHiddenElements);

restoreName()