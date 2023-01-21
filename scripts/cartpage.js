
let logeduser = JSON.parse(localStorage.getItem("loggedUser")) || [];
console.log(logeduser)
document.querySelector("#welcome").textContent = logeduser.name;
// console.log(logeduser.name)

let cartitem = JSON.parse(localStorage.getItem("Add To Cart")) || [];

let displaycartcount = document.getElementById("cartcount");

displaycard(cartitem);

function displaycard(out) {

    displaycartcount.innerText = out.length;

    let total = 0;
    document.querySelector("#card-container").innerHTML = "";
    let count = 1 
    let totalprice = document.querySelector("#cart-total");

    if(out.length == 0){
        totalprice.textContent = 0;
    }

    out.forEach(function (el, i) {

        let card = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", el.Image);

        let name = document.createElement("h4");
        name.textContent = el.Name;

        let price = document.createElement("h5");
        price.textContent = el.Price;

        let desc = document.createElement("p");
        desc.textContent = el.Description;

    
        let btn1 = document.createElement("button");
        btn1.textContent = "+";

        btn1.addEventListener("click", function () {
            count++;
            qtn.textContent = count;
            total = total + Number(el.Price)
            totalprice.textContent = total;
        })

        let qtn = document.createElement("span");
        el.quantity = 1;
        qtn.textContent = el.quantity;

        let btn2 = document.createElement("button");
        btn2.textContent = "-";
        btn2.addEventListener("click", function () {
            if (count <= 1) {
                let cartdata = JSON.parse(localStorage.getItem("Add To Cart")) || [];
                cartdata.splice(i, 1);
                localStorage.setItem("Add To Cart", JSON.stringify(cartdata));
                displaycard(cartdata);
            } else {
                count--;
                qtn.textContent = count;
                total = total - Number(el.Price)
                totalprice.textContent = total;
            }


        let increment = document.createElement("button");
        increment.innerText = "+";
        let buy=document.createElement("button")
        buy.innerText="Buy"
        buy.style.color="red"
        buy.style.fontSize="20px"
        buy.addEventListener("click",()=>{
            window.location.assign('./payment.html')

        })


        let btn3 = document.createElement("button");
        btn3.textContent = "Remove";
        btn3.addEventListener("click", function () {

            let cartdata = JSON.parse(localStorage.getItem("Add To Cart")) || [];
            cartdata.splice(i, 1);
            localStorage.setItem("Add To Cart", JSON.stringify(cartdata));
            displaycard(cartdata);
        })
        total = total + Number(el.Price);


        totalprice.textContent = total;


        card.append(image, name, price, desc, btn1, qtn, btn2, increment,btn3);

        document.querySelector("#card-container").append(card);

    })


    let dis = document.querySelector("form");
    dis.addEventListener("submit", function (event) {

        event.preventDefault();
        let val = document.querySelector("#cupon-filled").value;
        // console.log(val)
        if (val === "Harsh30") {
            totalprice.textContent = Math.floor(total - (total * 0.3));
            // console.log(totalprice)
            localStorage.setItem("disprice", totalprice.textContent)


        } else {
            alert("You Enter The Wrong Coupen Code")
        }


    })




}