let employee =()=>{
    let employeeId = document.getElementById("empId").value;

    let check = /[DE]254[10-99]/;
    
    // let check = /[DE]254[10-99]/i; //Disables case sensitive

    if(check.test(employeeId)){
        alert("Valid Employee Id")
    }
    else{
        alert("Invalid Employee Id");
    }
}