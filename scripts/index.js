let logeduser = JSON.parse(localStorage.getItem("loggedUser")) || [];
console.log(logeduser)
document.querySelector("#welcome").textContent = logeduser.name;

let sidemenu=document.getElementById("header-menu")
let furnitureContainer=document.getElementById("furniture-container")
 let furnitureContainermouseover=document.getElementById("furniture-container-mouseover")
 let kitchenContainer=document.getElementById("Kitchen-container")
 let kitchenContainermouseover=document.getElementById("Kitchen-container-mouseover")
 let tableContainer=document.getElementById("table-container")
 let tableContainermouseover=document.getElementById("table-container-mouseover")


 let delay5000=function () {
    setTimeout(() => {
        Location.reload()
    }, 5000);
 }
function hideheadermenu(){
    sidemenu.style.left="-500px"
}
function showheadermenu(){
    sidemenu.style.left="0"
}


 kitchenContainermouseover.addEventListener("mouseover",()=>{
    kitchenContainer.style.display="flex"
  

})
kitchenContainer.addEventListener("mouseleave",()=>{
    kitchenContainer.style.display="none"
})

tableContainermouseover.addEventListener("mouseover",()=>{
    tableContainer.style.display="flex"
  

})
tableContainer.addEventListener("mouseleave",()=>{
    tableContainer.style.display="none"
})

furnitureContainermouseover.addEventListener("mouseover",()=>{
    furnitureContainer.style.display="flex"

})
furnitureContainer.addEventListener("mouseleave",()=>{
    furnitureContainer.style.display="none"
})

let popdiv=document.getElementById("pop-div")
popdiv.addEventListener("click",removepopup)
function removepopup(){
popdiv.style.bottom="-50%"

}

