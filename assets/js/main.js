function submitForm() {
    // variables
    let gender = "";
    let akanName = ";"
    let proceed = true;

    // get radio button state
    var genderMale = document.getElementById("genderMale").checked;
    var genderFemale = document.getElementById("genderFemale").checked;

    // get birth date
    var birthDate = document.getElementById("birthDate").value;

    // check gender selection
    if (genderMale === true) {
        gender = "male";
    } else if (genderFemale === true) {
        gender = "female";
    } else {
        // do not proceed
        proceed = false;
        // display error message
        document.getElementById("errorMessage").innerHTML = "Please select Gender to proceed!";
    }

    // should proceed?
    if (proceed === true) {
        // check birth date selection
        if (birthDate === "") {
            // do not proceed
            proceed = false;
            // display error message
            document.getElementById("errorMessage").innerHTML = "Please select Birth date to proceed!";
        }
    }

    // should proceed?
    if (proceed === true) {
        // get Akan name
        akanName = getAkanName(gender, birthDate);

        // check possible error
        if (akanName === "-1") {
            // display error message
            document.getElementById("errorMessage").innerHTML = "Error Getting Akan Name for supplied birth date!";
        } else {
            // display error message
            document.getElementById("akanConfirmation").innerHTML = "Congratulations, your Akan name is <b>" + akanName + "</b>";
        }
    }
}

function getAkanName(gender, birthDate) {
    let femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

    // get day of the week
    let dayOfweek = new Date(birthDate).getDay();
    console.log("dayOfweek:" + dayOfweek)

    if (isNaN(dayOfweek)) {
        return "-1";
    } else if (gender === "male") {
        return maleNames[dayOfweek];
    } else if (gender === "female") {
        return femaleNames[dayOfweek];
    }
}