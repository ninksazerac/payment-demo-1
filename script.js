document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();

    checkData();
});

var full_name = document.getElementById("full_name");
var email = document.getElementById("email");
var phone_number = document.getElementById("phone_number");
var slip = document.getElementById("slip");

function checkData() {
    var full_nameValue = full_name.value.trim();
    var emailValue = email.value.trim();
    var phone_numberValue = phone_number.value.trim();
    var slipValue = slip.value.trim();

    if (full_nameValue == "") {
        setError(full_name, "Full name can't be blank");
    } else {
        setSuccess(full_name);
    }

    if (emailValue == "") {
        setError(email, "Email can't be blank");
    }
    else if (!isEmail(emailValue)) {
        setError(email, "Email is not Valid");
    }
    else {
        setSuccess(email);
    }


    if (phone_numberValue == "") {
        setError(phone_number, "Phone number can't be blank");
    } else {
        setSuccess(phone_number);
    }


    if (slipValue == "") {
        setError(slip, "Payment bill can't be blank");
    }
    else {
        setSuccess(slip);
    }


}


function setError(u, msg) {
    var parentBox = u.parentElement;
    parentBox.className = "input-field error";
    var span = parentBox.querySelector("span");
    var fa = parentBox.querySelector(".fa");
    span.innerText = msg;
    fa.className = "fa fa-exclamation-circle";
}

function setSuccess(u) {
    var parentBox = u.parentElement;
    parentBox.className = "input-field success";
    var fa = parentBox.querySelector(".fa");
    fa.className = "fa fa-check-circle";
}

function isEmail(e) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}