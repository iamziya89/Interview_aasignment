console.log("Event Delegation......");
const table=document.getElementById('timesheet');
table.addEventListener('input',(e)=>{
    console.log(e.target.name, e.target.value);
    
})
