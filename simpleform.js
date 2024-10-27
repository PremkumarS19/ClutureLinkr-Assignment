let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let messageEl = document.getElementById("message");
let messageErrEl = document.getElementById("messageErr");

let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let myFormEl = document.getElementById("myForm");
let formErrorMessageEl = document.getElementById("formErrorMessage");
let formSuccessMessageEl = document.getElementById("formSuccessMessage");

let formData = {
    name: "",
    email: "",
    gender: "Male",
    message: "",
};

// Function to validate individual fields
function errorCheck(fieldEl, errorEl, errorMessage) {
    if (fieldEl.value.trim() === "") {
        errorEl.textContent = errorMessage;
        return false;
    } else {
        errorEl.textContent = "";
        return true;
    }
}

// Event listeners for real-time validation
nameEl.addEventListener("input", function(event) {
    formData.name = event.target.value;
    errorCheck(nameEl, nameErrMsgEl, "Please Enter Your Name");
});

emailEl.addEventListener("input", function(event) {
    formData.email = event.target.value;
    errorCheck(emailEl, emailErrMsgEl, "Please Enter Your Email");
});

messageEl.addEventListener("input", function(event) {
    formData.message = event.target.value;
    errorCheck(messageEl, messageErrEl, "Please Enter The Message");
});

// Gender selection events
genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

// Form submission handling
myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear previous messages
    formErrorMessageEl.textContent = "";
    formSuccessMessageEl.textContent = "";

    let isNameChecked = errorCheck(nameEl, nameErrMsgEl, "Please Enter Your Name");
    let isEmailChecked = errorCheck(emailEl, emailErrMsgEl, "Please Enter Your Email");
    let isMessageChecked = errorCheck(messageEl, messageErrEl, "Please Enter The Message");

    if (isNameChecked && isEmailChecked && isMessageChecked) {
        formSuccessMessageEl.textContent = "Form successfully submitted!";
        nameEl.value = "";
        emailEl.value = "";
        messageEl.value = "";
        formData.name = "";
        formData.email = "";
        formData.message = "";
        formData.gender = "Male";
        nameErrMsgEl.textContent = "";
        emailErrMsgEl.textContent = "";
        messageErrEl.textContent = "";
    } else {
        formErrorMessageEl.textContent = "Please fill in all required fields.";
        formSuccessMessageEl.textContent = ""; 
    }
});
