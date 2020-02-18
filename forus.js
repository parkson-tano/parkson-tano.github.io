function validateForm(){
    var name = document.forms["regForm"]["username"].value;
    var email = document.forms["regForm"]["email"].value;
    var phone = document.forms["regForm"]["phone"].value;
    var pass1 = document.forms["regForm"]["password"].value;
    var pass2 = document.forms["regForm"]["password2"].value;
    var term = document.forms["regForm"]["term"].value;

    if (phone.length > 9){
        msg = "ENTER VALID PHONE";
    }
    else
    {
        return true;
    }
    document.getElementById("phoneErr").innerText = msg;

}