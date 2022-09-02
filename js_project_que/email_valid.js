let form = document.getElementById('formId');
let email= document.getElementById('email');
let pasword =document.getElementById('pasword');
let error =document.getElementById('error');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(email.value<8 || email.value == null){
        console.log("enter the email")
    }
    if(pasword.length<6 || pasword.length>13){
        console.log("pasword")
    }
    else{
        console.log("hello  the world");
    }
})