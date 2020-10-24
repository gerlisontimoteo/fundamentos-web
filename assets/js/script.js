let name = window.document.getElementById('name')
let email = document.querySelector('#email')
let message = document.querySelector('#message')
let map = document.querySelector('#map')
let nameOk = false
let emailOk = false
let messageOk = false

name.style.width = '100%'
email.style.width = '100%'
message.style.width = '100%'

function nameValidation(){
    let txtName = document.querySelector('#txtName')
    if(name.value.length <3){
        txtName.innerHTML = 'invalid name'
        txtName.style.color = 'red'  
    } else{
        txtName.innerHTML = 'ok'
        txtName.style.color = 'green'
        nameOk = true
    }
}
function EmailValidation(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexof('@') == -1 || email.value.indexof('.')){
        txtEmail.innerHTML = 'invalid email'
        txtEmail.style.color = 'red'  
    } else{
        txtEmail.innerHTML = 'ok'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}
function messageValidation(){
    let txtMessage = document.querySelector('#txtMessage')
    if(message.value.length >=100){
        txtMessage.innerHTML = 'your message is too long'
        txtMessage.style.color = 'red'  
    } else{
        txtMessage.style.display = 'none'
        messageOk = true
    }
}
function send(){
    if(nameOk == true && emailOk == true && messageOk == true){
        alert('Your message was sucessfully sent!')
    }else{
        alert('Fix your inputs before sending.')
    }
}
function zoomMap(){
    map.style.width = '800px'
    map.style.height = '600px'
}
function normalMap(){
    map.style.width = '600px'
    map.style.height = '450px'
}