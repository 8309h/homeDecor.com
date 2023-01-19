// let container = document.getElementById("card-container");

// let cartData = JSON.parse(localStorage.getItem("cart"))||[];

// function displayProducts(data) {
    
//     container.innerHTML = null;

//     let 
// }
let logeduser = JSON.parse(localStorage.getItem("loggedUser")) || [];
console.log(logeduser)
document.querySelector("#welcome").textContent = logeduser.name;
