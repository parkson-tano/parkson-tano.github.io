function validateForm()
{
    var nam = document.forms["regForm"]["username"].value;
    if (nam == "")
    {
        alert("Enter a valid username")
        return false;
    }
}