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
    }

    // should proceed?
    if (proceed === true) {
        // check birth date selection
        if (birthDate === "") {
            // do not proceed
            proceed = false;
        }
    }

    // get Akan name
    akanName = getAkanName(gender, birthDate);

    // print name
    console.log("akanName="+akanName);
}

function getAkanName(gender, birthDate) {
    let femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

    // get day of the week
    let dayOfweek = new Date(birthDate).getDay();
    console.log("dayOfweek:" + dayOfweek)

    if (gender === "male") {
        return maleNames[dayOfweek];
    } else if (gender === "female") {
        return femaleNames[dayOfweek];
    }
}