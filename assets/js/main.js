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

}