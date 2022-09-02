let btnText =document.querySelector('#btnText');
let btnHTML =document.querySelector('#btnHTML');
let content =document.querySelector('.content');
let myString = `when I am importing the results from a 
            REST API call I get the following message for some fields: Error 
            cannot convert the value "ValueInTextualForm" <strong> welcome to the team</strong>in type Record.When
            running certain apps on Windows 10 desktop or Windows 10 Mobile,
            Windows or Windows Phone versions did not have this problem.</p>
            <img src="image.jpg">`
let mystring2 = "hello world!"
            btnText.addEventListener('click',()=>{
        console.log("clicked");
        // content.innerHTML = ""
    content.innerText =myString;
});
btnHTML.addEventListener('click',()=>{
    console.log('cLICKED');
    content.innerHTML =myString;
})
