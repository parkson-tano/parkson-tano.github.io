function validateForm(){
    var name = document.getElementById('userid').value
    var password = document.getElementById('password').value


    if(name == ''){
        var h1 = document.createElement('p')
        var text = document.createTextNode('Please enter name')
        h1.setAttribute('id','err')
        h1.appendChild(text)
        document.getElementById('userlog').appendChild(h1)
    }
    if (password == '') {
        var h1 = document.createElement('p')
        var text = document.createTextNode('Please enter Password')
        h1.setAttribute('id','err')
        h1.appendChild(text)
        document.getElementById('passErr').appendChild(h1)
    }

};