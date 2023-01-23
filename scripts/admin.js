
let addingform = document.querySelector("#container");
let otpform = document.getElementById("otpDiv");

let logeduser = JSON.parse(localStorage.getItem("loggedUser")) || [];
console.log(logeduser)
document.querySelector("#welcome").textContent = logeduser.name;


logeduser = JSON.parse(localStorage.getItem("loggedUser")) || [];
console.log(logeduser)
let phonen = logeduser.phoneno
document.querySelector("#otpNum").textContent = logeduser.phoneno;

otpform.style.display = "block"

let res_otp = otp();
    alert("OTP Sent to your Mobile")
    alert("Your OTP is : " +res_otp)
function otpfun (){
    let add1=document.getElementById("otp1").value;
    let add2=document.getElementById("otp2").value;
    let add3=document.getElementById("otp3").value;
    let add4=document.getElementById("otp4").value;
    let add=add1+add2+add3+add4
    add= +(add);
    debugger;
       if(res_otp === add){
        
      
        otpform.style.display = "none"
        addingform.style.display = "block"
       
       } else{
            alert("Invalid OTP")
       }
    
} 
function otp(){
    let pass=Math.floor(1000+Math.random()*9000)
    return pass;
}

 document.querySelector("#resendotp").addEventListener("click",function(e){
    e.preventDefault();
    //console.log("hi")
     location.href = "admin.html"
  })
   




let productsArr = JSON.parse(localStorage.getItem("addproducts")) || [];
  let form = document.querySelector("h1+form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
   
    let product = {
      ProductId:form.id.value,
      Name: form.name.value,
      Price: form.price.value,
      Description: form.desc.value,
      Category: form.category.value,
      Image: form.img.value,
    };
    console.log(product)
    if ( product.Category == "All") {
      alert("please provide category");
    } else {
      productsArr.unshift(product);

      localStorage.setItem("addproducts", JSON.stringify(productsArr));
      alert('product added successfully')
      window.location.assign("./furniture.html");
   }
  });

 
  