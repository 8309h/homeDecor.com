
let furnitureContainer=document.getElementById("furniture-container")
 let furnitureContainermouseover=document.getElementById("furniture-container-mouseover")

 let delay5000=function () {
    setTimeout(() => {
        
    }, 5000);
 }

furnitureContainermouseover.addEventListener("mouseover",(e)=>{
    furnitureContainer.style.display="flex"

setTimeout(() => {
    furnitureContainer.style.display="none"
},5000);
})
let popdiv=document.getElementById("pop-div")
function removepopup(){
popdiv.style.bottom="-50%"

}

