   
   
    let payment = document.querySelector("form");
    payment.addEventListener("submit", function (event) {

    event.preventDefault();
    let name = document.querySelector('#name').value;
    let cardNo = document.querySelector('#cardNo').value;
    let cvv = document.querySelector('#cardCvv').value;

    let obj = {
      name, cardNo, cvv
    }
    localStorage.setItem("paymentinfo",obj)
    

    console.log(obj)
    if (obj.name == "" || obj.cardNo == "" || obj.cvv == "") {
      alert("Any of the Given fields are empty");
    } else {
    
      window.location = "./otp.html"
    }
  });