// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var uname = document.getElementById('username');
    var fname = document.getElementById('fullname');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var passw = document.getElementById('password');
    var passw2 = document.getElementById('password2');
    var region = document.getElementById('region');
    var gender = document.getElementById('gender');


    // Defining error variables with a default value
    var unameErr = fnameErr = emailErr = phoneErr = regionErr = genderErr = passwErr = passw2Err = true;

    // Validate name
    if (uname == "") {
        printError("unameErr", "Please enter your username");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(uname) === false) {
            printError("unameErr", "Please enter a valid username");
        } else {
            printError("unameErr", "");
            unameErr = false;
        }
    }
    if (fname == "") {
        printError("fnameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(fname) === false) {
            printError("fnameErr", "Please enter a valid name");
        } else {
            printError("fnameErr", "");
            fnameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (phone == "") {
        printError("phoneErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(phone) === false) {
            printError("phoneErr", "Please enter a valid 9 digit mobile number");
        } else {
            printError("phoneErr", "");
            mobileErr = false;
        }
    }

    // validate password
    if (passw == "") {
        printError("passwErr", "Please Enter password");
    } else {
        printError("passwErr", "");
        passwErr = false;
    }
    // validate password2
    if (passw2 == "") {
        printError("passw2Err", "Please Confirm password");
    } else {
        printError("passw2Err", "");
        passw2Err = false;
    }

    // Validate region
    if (region == "Select") {
        printError("regionErr", "Please select your region");
    } else {
        printError("regionErr", "");
        countryErr = false;
    }

    // Validate gender
    if (gender == "Select") {
        printError("genderErr", "Please select gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    // Prevent the form from being submitted if there are any errors
    if ((unameErr || fname || emailErr || regionErr || genderErr || phoneErr || passwErr || passw2Err) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + fname + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + phone + "\n" +
            "Region: " + region + "\n" +
            "Gender: " + gender + "\n";
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};

