function validate() {
    let email = document.getElementById("mail").value;

    let regex = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]{2,10}).([a-z A-Z]{2,6})$/

    if (email.trim() == "") {
        alert("Please enter a valid Email Id")
    }
    else if (regex.test(email)) {
        alert("Email submitted successfully")
    }
    else {
        alert("Wrong Email ID");
    }
}

function validate2() {
    let email2 = document.getElementById("mail2").value;

    let regex2 = /^([a-z A-z 0-9 \. _ -]+)@([a-z A-z]{8}).([a-z A-Z]{5}).([a-z A-z]{2}).([a-z A-z]{2})$/

    if (email2.trim() == "") {
        alert("Please enter a valid Email Id")
    }
    else if (regex2.test(email2)) {
        alert("Email submitted successfully")
    }
    else {
        alert("Wrong Email ID");
    }
}

function validate3() {
    let email3 = document.getElementById("mail3").value;

    let regex3 = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]{2,10}).([a-z A-Z]{2,6})(.[a-z A-Z]{2,6})?(.[a-z A-Z]{2,6})?$/

    if (email3.trim() == "") {
        alert("Please enter a valid Email Id")
    }
    else if (regex3.test(email3)) {
        alert("Email submitted successfully")
    }
    else {
        alert("Wrong Email ID");
    }
}