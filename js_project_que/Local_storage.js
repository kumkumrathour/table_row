let btn = document.getElementById("save")
let form= document.getElementById('form')
let name1 =document.getElementById("name");
let email1=document.getElementById("email");
let pwd1=document.getElementById("pwd")
btn.addEventListener('click',()=>{
    // user_record=JSON.parse(localStorage.getItem("user"))?
    // JSON.parse(localStorage.getItem("user")):[]
    let nameofForm=name1.value;
    console.log(nameofForm)
    let emailofForm=email1.value;
    console.log(emailofForm)
    let pwdofForm=pwd1.value;    
    console.log(pwdofForm);
    let user_record=new Array();
    user_record.push({
        "name":nameofForm,
        "email":emailofForm,
        "pwd":pwdofForm
    })
    localStorage.setItem("user_record",JSON.stringify([...user_record,user_record]));

})

