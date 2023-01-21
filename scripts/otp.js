   let p= document.querySelector("form")
   p.addEventListener("submit",function(event){
    event.preventDefault();
    
    let obj={
      otp:p.otp.value
    }
    if(p.otp.value==="1234"){
      alert("Payment Successful")
      window.location.assign('./index.html')
    }
    else{
      alert("Wrong OTP")
    }
   })