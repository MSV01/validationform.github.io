// function checkNumber() {
//     var num = document.getElementById("number");
//     if (num.length < 11) {
//         alert("Write a Valid Phone number");
//     }

const { createBrotliCompress } = require("zlib");

// }
function validation() {
    var gmailSign = "@"
    var x = document.getElementById("email")

    if (document.getElementById("name").value === "") {
        alert("Name is required.");
    }
    if (x.value === ""
    ) {
        alert("Email is required"); return false;
    }
    if (document.getElementById("email").value.match(gmailSign)) {
    } else { alert("Enter a Valid Email Address") }


}



//       PASSWORD               SECTION

function checkPassword() {
    var x = document.getElementById("pswd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function verifyPassword() {
    var pw = document.getElementById("pswd").value;
    //check empty password field  
    if (pw == "") {
        alert("Fill the password please!");
        return false;
    }
    //minimum password length validation  
    if (pw.length < 8) {
        document.getElementById("message").innerHTML = "*Password length must be atleast 8 characters";
        return false;
    }
    //maximum length of password validation  
    if (pw.length > 15) {
        document.getElementById("message").innerHTML = "*Password length must not exceed 15 characters";
        return false;
    }
}
