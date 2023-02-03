function validate(){
    let userName = document.getElementById("uname").value;
    let password = document.getElementById("pass").value;
    let age = document.getElementById("age").value;

    if(userName.trim() == "" || password.trim() == "" || age.trim() == ""){
        alert("Please fill out the Form below");
        return false;
    }
    else if(userName == "admin1" && password == "admin1" && age == 22){
        alert("Sign In Successfully");
        return true;
    }
    else if(age < 18){
        alert("Sorry, you are under the stated age limit, you can not access this website")
        return false;

    }
    else{
        alert("Wrong User-Id and Password")
        return false;
    }

}