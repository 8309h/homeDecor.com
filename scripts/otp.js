let logeduser = JSON.parse(localStorage.getItem("loggedUser")) || [];
console.log(logeduser)
document.querySelector("#welcome2").textContent = logeduser.name;

logeduser = JSON.parse(localStorage.getItem("loggedUser")) || [];
console.log(logeduser)
document.querySelector("#otpNum").textContent = logeduser.phoneno;


let val = localStorage.getItem("disprice")
document.querySelector("#disprice").innerHTML = val;

let otpform = document.getElementById("otpDiv");
otpform.style.display = "block"

let res_otp = otp();
alert("Your OTP is " + res_otp)
function otpfun() {
    let add1 = document.getElementById("otp1").value;
    let add2 = document.getElementById("otp2").value;
    let add3 = document.getElementById("otp3").value;
    let add4 = document.getElementById("otp4").value;
    let add = add1 + add2 + add3 + add4
    add = +(add);
    debugger;
    if (res_otp === add) {

        otpform.style.display = "none"
      
        alert("Payment Succesful🤩")
       
        let hide = document.querySelector("#recipte2");
        hide.style.display = "block"

    } else {
        alert("Invalid OTP")
    }

}
function otp() {
    let pass = Math.floor(1000 + Math.random() * 9000)
    return pass;
}

document.querySelector("#resendotp").addEventListener("click", function (e) {
    e.preventDefault();
    //console.log("hi")
    location.href = "otp.html"
})




