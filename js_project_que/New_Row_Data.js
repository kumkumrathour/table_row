let btnAdd=document.getElementById('add');
let Table=document.getElementById('tbl');
let nameInput=document.getElementById('namefield');
let subjectInput=document.querySelector('#subjectfield');
let marksInput=document.querySelector('#marksfield');

btnAdd.addEventListener('click',()=>{
    let name1 =nameInput.value;
    let subjectname=subjectInput.value;
    let marks=marksInput.value;
    let info =  `
        Name:'${name1}',
        Subject:'${subjectname}',
        mark:'${marks}'
        `
        console.log(info)
    localStorage.setItem('info',info);

    var randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
   localStorage.setItem(randomNumber.toString(),info)
    let template=`<tr>
                      <td>${name1}</td>
                      <td>${subjectname}</td>
                       <td>${marks}</td>
                 </tr>`
    Table.innerHTML+=template;
              });
            Object.entries(localStorage).forEach(([randomNumber,info])=>{
                console.log(`${randomNumber.toString()}=> ${info}`);
                // document.getElementById("randomNumber.toString()").innerHTML=localStorage.getItem("info");
                
            })

