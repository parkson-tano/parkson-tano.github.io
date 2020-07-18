$(function() {
    $("#username_error_message").hide();
    $("#phone_error_message").hide();
    $("#email_error_message").hide();
    $("#password_error_message").hide();
    $("#password2_error_message").hide();
    $("#term_error_message").hide();
    $("#productName_error_message").hide();
    $("#category_error_message").hide();
    $("#region_error_message").hide();
    $("#town_error_message").hide();
    $("#price_error_message").hide();
    $("#description_error_message").hide();
    $("customFile_error_message").hide();
    var error_username = false;
    var error_phone = false;
    var error_email = false;
    var error_password = false;
    var error_password2 = false;
    var error_term = false;
    var error_productName = false;
    var error_category = false;
    var error_region = false
    var error_town = false;
    var error_price = false;
    var error_description = false;
    var error_customFile = false;
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
    $("#productName").focusout(function() {
        check_productName()
    });
    $("#category").focusout(function() {
        check_category()
    });
    $("#region").focusout(function() {
        check_region()
    });
    $("#town").focusout(function() {
        check_town()
    });
    $("#price").focusout(function() {
        check_price()
    });
    $("#description").focusout(function() {
        check_description()
    });
    $("#customFile").focusout(function() {
        check_customFile()
    });

    function check_productName() {
        var productName = $("#productName").val();
        if (productName != '') {
            $("#productName_error_message").hide();
            $("#productName").css("border-bottom", "2px solid #34F458");
        } else {
            $("#productName_error_message").html("Please give your poduct a Name")
            $("#productName_error_message").show();
            $("#productName").css('border-bottom', '2px solid red');
            error_productName = true
        }
    }

    function check_category() {
        var category = $("#category option:selected").val();
        if (category != '') {
            $("#category_error_message").hide()
            $("#category").css('border-bottom', '1px solid #34F458')
        } else {
            $("#category_error_message").html("select your category");
            $("#category_error_message").show();
            $("#category").css('border-bottom', '2px solid red')
            error_category = true
        }
    }

    function check_region() {
        var region = $("#region").val();
        if (region != '') {
            $("#region_error_message").hide()
            $("#region").css('border-bottom', '1px solid #34F458')
        } else {
            $("#region_error_message").html("select your region of residence");
            $("#region_error_message").show();
            $("#region").css('border-bottom', '2px solid red');
            error_region = true;
        }
    }

    function check_town() {
        var town = $("#town").val();
        if (town != '') {
            $("#town_error_message").hide()
            $("#town").css('border-bottom', '1px solid #34F458')
        } else {
            $("#town_error_message").html("select your region of residence");
            $("#town_error_message").show();
            $("#town").css('border-bottom', '2px solid red');
            error_town = true;
        }
    }

    function check_price() {
        var pattern = /\d/;
        var price = $("#price").val();

        if (pattern.test(price) && price.length > 2 && price !== '') {
            $("#price_error_message").hide();
            $("#price").css('border-bottom', '1px solid #34F458');
        } else {
            $("#price_error_message").html('please enter a valid price');
            $("#price_error_message").show();
            $("#price").css('border-bottom', '1px solid red');
            error_price = true;
        }
    }

    function check_description() {
        var description = $("#description").val()
        if (description !== '' && description.length > 50) {
            $("#description_error_message").hide();
            $("#description").css('border', '1px solid #34F458')
        } else {
            $("#description_error_message").html('Your product description should be more than 20 characters');
            $("#description_error_message").show();
            $("#description").css('border', '1px solid red')
            error_description = true;
        }
    }

    function check_customFile() {
        var customFile = $("#customFile")[0].files[0].size;
        if (customFile <= 524288 && customFile != '') {
            $("#customFile_error_message").hide();
            $("#customFile").css('border', '1px solid #34F458')
        } else {
            $("#customFile_error_message").html('upload a file of max 500Kb');
            $("#customFile_error_message").show();
            $("#customFile").css('border', '1px solid red');
            error_customFile = true;

        }
    }

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
            alert("Registration Successfull" + username);
            return true;
        } else {
            alert("Please Fill the form Correctly");
            return false;
        }
    });
    $("#UploadForm").submit(function() {
        error_category = false;
        error_productName = false;
        error_phone = false;
        error_region = false;
        error_town = false;
        error_price = false;
        error_customFile = false;
        error_term = false;

        check_category();
        check_description();
        check_productName();
        check_phone();
        check_price();
        check_region();
        check_town();
        check_term()

        if (error_category === false && error_productName === false && error_phone === false && error_region === false &&
            error_town === false && error_price === false && error_customFile === false && error_term === false) {
            alert('product successfully added');
            return true;
        } else {
            alert('fill all fields');
            return false;
        }
    });
});