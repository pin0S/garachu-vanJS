//placeholder for username
const nameForm = document.querySelector('.name-display')
const usernameInput = document.querySelector('#username')
const nameChange = document.querySelector('.name-change')

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

    localStorage.setItem("username", JSON.stringify(username));
    nameChange.dispatchEvent(new CustomEvent('nameEntered'));    

    
}

function displayName(e) {
    console.log('Name is displayed')
    nameChange.textContent = username; 
}

function hideNameModule() {
    nameForm.classList.add("hide");
}

function clearHiddenElements() {
    document.querySelector('.settings-container').classList.remove('hide');
    document.querySelector('.weather-container').classList.remove('hide');
    document.querySelector('.grateful-container').classList.remove('hide');
    document.querySelector('.quotes').classList.remove('hide');
}

function restoreName() {
    const usernameLS = JSON.parse(localStorage.getItem('username'));

    if (usernameLS.length) {
        username = usernameLS;
        nameChange.dispatchEvent(new CustomEvent('nameEntered'))
        hideNameModule()
    }
}

nameForm.addEventListener('submit', handleSubmit);
nameChange.addEventListener('nameEntered', displayName);
nameChange.addEventListener('nameEntered', clearHiddenElements);

restoreName()