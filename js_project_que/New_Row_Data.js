let btnAdd=document.getElementById('add');
let btnRem = document.getElementById('remove')
let Table=document.getElementById('tbl');
let nameInput=document.getElementById('namefield');
let subjectInput=document.querySelector('#subjectfield');
let marksInput=document.querySelector('#marksfield');

console.log('Refreshed!');
const items={
    ...localStorage
}
console.log(items)
for( var key in items){
const info =JSON.parse(items[key])
const template = `
<tr>
<td>${info.name}</td>
<td>${info.subject}</td>
 <td>${info.marks}</td>
</tr>
`
console.log(template)
Table.innerHTML+=template
}
// this

btnAdd.addEventListener('click',()=>{
    let name1 =nameInput.value;
    let subjectname=subjectInput.value;
    let marks=marksInput.value;
    let info =  JSON.stringify({
        name:name1,
        subject:subjectname,
        marks:marks
    })
    // for(const [key,value] of Object.entries(info)){
    //     console.log(`key =>${key} || value => ${value}`)

    // }

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
btnRem.addEventListener('click',()=>{
    window.localStorage.clear();
    window.location.reload();
})
    

