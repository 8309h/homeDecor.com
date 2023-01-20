
let bag=JSON.parse(localStorage.getItem("Addtocart"))
let data=[]
data=bag


function abcd(){
   let serch=document.getElementById("search").value;
   
   
       let newData=data.filter(function(elem){
       return elem.Name.toLowerCase().includes(serch.toLowerCase()); 
        
       })
      console.log(newData)
       Display(newData)
   }
   
   function Display(data){
    furnitureData.innerHTML=""
    data.forEach(function(el){

        let div=document.createElement("div")
        let image=document.createElement("img")
        image.setAttribute("src",el.Image)
        let name=document.createElement("h3")
        name.textContent=el.Name;
        let price=document.createElement("h5")
        price.textContent=el.Price
        let desc=document.createElement("p")
        desc.textContent=el.Description
 


        let buynow=document.createElement("button")
        buynow.textContent="Add To Cart"
        buynow.style.marginLeft=""
              
        let but=document.createElement("button")
        but.textContent="♡"
        but.style.padding="0"
        but.style.border='none'
        but.style.fontSize="20px"
        but.style.color="red"
        but.style.fontSize="20 px"
        but.style.backgroundColor="white"
        but.style.fontWeight="bold"

        div.append(image,name,price,desc,buynow,but)

        furnitureData.append(div);
        console.log(furnitureData)
    })
}

























