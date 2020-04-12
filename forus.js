$(function() {
    $("#username_error_message").hide();
    $("#phone_error_message").hide();
    $("#email_error_message").hide();
    $("#password_error_message").hide();
    $("#password2_error_message").hide();
    $("#term_error_message").hide()
    var error_username = false;
    var error_phone = false;
    var error_email = false;
    var error_password = false;
    var error_password2 = false;
    var error_term = false;
    $("#username").focusout(function() {
        check_username();
    });
    $("#email").focusout(function() {
        check_email();
    });
    $("#phone").focusout(function() {
        check_phone();
    });
    $("#password").focusout(function() {
        check_password();
    });
    $("#password2").focusout(function() {
        check_password2();
    });
    $("#term").focusout(function() {
        check_term()
    });

    function check_term() {
        if ($("#term").is(':checked')) {
            $("#term_error_message").hide();
        } else {
            $("#term_error_message").html("Please accept our terms and conditions");
            $("#term_error_message").show();
            error_term = true;
        }
    }

    function check_username() {
        var pattern = /^[a-zA-Z]*$/;
        var username = $("#username").val();
        if (pattern.test(username) && username.length > 4 && username != '') {
            $("#username_error_message").hide();
            $("#username").css("border-bottom", "2px solid #34F458");
        } else {
            $("#username_error_message").html("Should contain atleast 4 Characters");
            $("#username_error_message").show();
            $("#username").css('border-bottom', '2px solid red')
            error_username = true;
        }
    }

    function check_phone() {
        var pattern = /\d/;
        var phone = $("#phone").val()
        if (pattern.test(phone) && phone !== '' && phone.length < 9) {
            $("#phone_error_message").hide();
            $("#phone").css("border-bottom", "2px solid #34F458");
        } else {
            $("#phone_error_message").html("Should contain only Numbers");
            $("#phone_error_message").show();
            $("#phone").css("border-bottom", "2px solid #F90A0A");
            error_phone = true;
        }
    }

    function check_password() {
        var password_length = $("#password").val().length;
        if (password_length < 8) {
            $("#password_error_message").html("Atleast 8 Characters");
            $("#password_error_message").show();
            $("#password").css("border-bottom", "2px solid #F90A0A");
            error_password = true;
        } else {
            $("#password_error_message").hide();
            $("#password").css("border-bottom", "2px solid #34F458");
        }
    }

    function check_password2() {
        var password = $("#password").val();
        var password2 = $("#password2").val();
        if (password !== password2) {
            $("#password2_error_message").html("Passwords Did not Matched");
            $("#password2_error_message").show();
            $("#password2").css("border-bottom", "2px solid #F90A0A");
            error_
            password = true;
        } else {
            $("#password2_error_message").hide();
            $("#password2").css("border-bottom", "2px solid #34F458");
        }
    }

    function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#email").val();
        if (pattern.test(email) && email !== '') {
            $("#email_error_message").hide();
            $("#email").css("border-bottom", "2px solid #34F458");
        } else {
            $("#email_error_message").html("Invalid Email");
            $("#email_error_message").show();
            $("#email").css("border-bottom", "2px solid #F90A0A");
            error_email = true;
        }
    }
    $("#regForm").submit(function() {
        error_username = false;
        error_phone = false;
        error_email = false;
        error_password = false;
        error_password2 = false;
        error_term = false
        check_username();
        check_phone();
        check_email();
        check_password();
        check_password2();
        check_term();
        if (error_username === false && error_phone === false && error_email === false && error_password === false && error_password2 === false &&
            error_term === false) {
            alert("Registration Successfull");
            return true;
        } else {
            alert("Please Fill the form Correctly");
            return false;
        }
    });
});