let logeduser = JSON.parse(localStorage.getItem("loggedUser")) || [];
console.log(logeduser)
document.querySelector("#welcome").textContent = logeduser.name;

let furnitureContainer=document.getElementById("furniture-container")
 let furnitureContainermouseover=document.getElementById("furniture-container-mouseover")
 let kitchenContainer=document.getElementById("Kitchen-container")
 let kitchenContainermouseover=document.getElementById("Kitchen-container-mouseover")
 let delay5000=function () {
    setTimeout(() => {
        Location.reload()
    }, 5000);
 }




 kitchenContainermouseover.addEventListener("mouseover",()=>{
    kitchenContainer.style.display="flex"
  // setTimeout(() => {
  //   kitchenContainer.style.display="none"
  // }, 5000);

})
kitchenContainer.addEventListener("mouseleave",()=>{
    kitchenContainer.style.display="none"
})


furnitureContainermouseover.addEventListener("mouseover",()=>{
    furnitureContainer.style.display="flex"
    // setTimeout(() => {
    //     furnitureContainer.style.display="none"
    //   }, 5000);

})
furnitureContainer.addEventListener("mouseleave",()=>{
    furnitureContainer.style.display="none"
})

let popdiv=document.getElementById("pop-div")
popdiv.addEventListener("click",removepopup)
function removepopup(){
popdiv.style.bottom="-50%"

}




