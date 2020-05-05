// declarations

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const userIDPattern = /^[0-9]{10,10}$/;
const namePattern = /^[a-zA-Z]{2,}$/;

//validation upon submit

form.addEventListener('submit', e => {
    e.preventDefault();

    // validation
    const userID = form.userID.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;

    if(!userIDPattern.test(userID)){
        feedback.innerHTML += "user ID must be 10 digits<br>";
    };
    if(!namePattern.test(firstName)){
        feedback.innerHTML += "first name must be at least 2 letters only<br>";
    };
    if(!namePattern.test(lastName)){
        feedback.innerHTML += "last name must be at least 2 letters only<br>";
    };
});

// live feedback

form.userID.addEventListener('keyup', e => {        // userID
    if(userIDPattern.test(e.target.value)){
        form.userID.setAttribute('class', 'success');
    } else {
        form.userID.setAttribute('class', 'error');
    }
});

form.firstName.addEventListener('keyup', e => {     // firstName
    if(namePattern.test(e.target.value)){
        form.firstName.setAttribute('class', 'success');
    } else {
        form.firstName.setAttribute('class', 'error');
    }
});

form.lastName.addEventListener('keyup', e => {      // lastName
    if(namePattern.test(e.target.value)){
        form.lastName.setAttribute('class', 'success');
    } else {
        form.lastName.setAttribute('class', 'error');
    }
});
