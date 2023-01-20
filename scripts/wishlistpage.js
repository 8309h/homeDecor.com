let container = document.getElementById("card-container");

let cartData = JSON.parse(localStorage.getItem("wishlist")) || [];
console.log(cartData);
displayProducts(cartData);

function displayProducts(data) {


//     let 
// }


let logeduser = JSON.parse(localStorage.getItem("loggedUser")) || [];
console.log(logeduser)
document.querySelector("#welcome").textContent = logeduser.name;

    container.innerHTML = null;

    let myData = data.forEach((element, index) => {

        let card = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", element.Image);

        let name = document.createElement("h4");
        name.textContent = element.Name;

        let price = document.createElement("h5");
        price.textContent = "₹ " + element.Price;

        let desc = document.createElement("p");
        desc.textContent = element.Description;

      

        let addtocart = document.createElement("button");
        addtocart.innerText = "ADD TO CART"
        // addtocart.style.marginLeft=""

        addtocart.addEventListener("click", function () {

            let cartData = JSON.parse(localStorage.getItem("Add To Cart")) || [];

            let isAdleadyInCart = false;
            for (let i = 0; i < cartData.length; i++) {
                if (cartData[i].ProductId === element.ProductId) {
                    isAdleadyInCart = true;
                    break;
                };
            }

            if (isAdleadyInCart === true) {
                alert("Product Already in Cart");

            } else {
                cartData.push({ ...element, quantity: 1 });
                localStorage.setItem("Add To Cart", JSON.stringify(cartData));
                alert("Product Added To Cart");
                remove();

                // displayProducts(data);
            }

        })

        let removeProduct = document.createElement("i");
       // removeProduct.innerText = "X";
       removeProduct.setAttribute("id","heartss")
        // <FontAwesomeIcon icon="fa-thin fa-xmark-large" />
removeProduct.setAttribute("class","fa fa-minus-circle")
        function remove() {
            event.target.parentNode.remove();
            data.splice(index, 1);
            localStorage.setItem("wishlist", JSON.stringify(data));
            displayProducts(data);
        }

        removeProduct.addEventListener("click", () => {
            remove();
        });

        card.append(image, name, price, desc, addtocart, removeProduct);

        container.append(card);
    });

    // console.log(myData)
}


