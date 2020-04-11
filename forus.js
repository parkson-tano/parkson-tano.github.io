$(function() {
    $("#username_error_message").hide();
    $("#phone_error_message").hide();
    $("#email_error_message").hide();
    $("#password_error_message").hide();
    $("#password2_error_message").hide();
    var error_username = false;
    var error_phone = false;
    var error_email = false;
    var error_password = false;
    var error_password2 = false;
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
        var pattern = /^[1-9]*$/;
        var phone = $("#phone").val()
        if (pattern.test(phone) && phone !== '') {
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
        check_username();
        check_phone();
        check_email();
        check_password();
        check_password2();
        if (error_username === false && error_phone === false && error_email === false && error_password === false && error_password2 === false) {
            alert("Registration Successfull");
            return true;
        } else {
            alert("Please Fill the form Correctly");
            return false;
        }
    });
});

/* var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'hello there'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        'seen': true
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        message: 'the time now is ' + new Date().toLocaleString()
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'item 1' },
            { text: 'item 2' },
            { text: 'item 3' }
        ]
    },
    methods: {
        add: function() {
            app4.todos.push({ text: this.item })
        }
    }

})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'hello daniel'
    },

})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'hellow'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        clickThis: function() {
            alert('hello')
        }
    }
}) */