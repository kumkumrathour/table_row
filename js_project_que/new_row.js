let btnAdd=document.getElementById('add');
let Table=document.getElementById('tbl');
let nameInput=document.getElementById('namefield');
let subjectInput=document.querySelector('#subjectfield');
let marksInput=document.querySelector('#marksfield');

btnAdd.addEventListener('click',()=>{
    let name =nameInput.value;
    let subjectname=subjectInput.value;
    let marks=marksInput.value;
    let info =  `
        Name:'${name}',
        Subject:'${subjectname}',
        mark:'${marks}'
        `
        console.log(info)
    localStorage.setItem('info',info);
    let template=`<tr>
                      <td>${name}</td>
                      <td>${subjectname}</td>
                       <td>${marks}</td>
                 </tr>`
    Table.innerHTML+=template;
              });
              