let container = document.getElementById("card-container");

let cartData = JSON.parse(localStorage.getItem("Add To Cart")) || [];
console.log(cartData);
displayProducts(cartData);

function displayProducts(data) {

    container.innerHTML = null;

    let myData = data.forEach((element, index) => {

        let card = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", element.Image);

        let name = document.createElement("h4");
        name.textContent = element.Name;

        let price = document.createElement("h5");
        price.textContent = element.Price;

        let desc = document.createElement("p");
        desc.textContent = element.Description;

        let increment = document.createElement("button");
        increment.innerText = "+";

        increment.addEventListener("click", () => {
            // if(+data[index].quantity<100){
            data[index].quantity = parseInt(element.quantity) + 1;
            localStorage.setItem("Add To Cart", JSON.stringify(data));

            displayProducts(data);
            // }
        });

        let quantity = document.createElement("span");
        if (element.quantity == undefined || element.quantity == null)
            element.quantity = 1;
        quantity.innerText = element.quantity;

        let decrement = document.createElement("button");
        decrement.innerText = "-";

        decrement.addEventListener("click", () => {
            if (data[index].quantity > 1) {
                data[index].quantity = parseInt(element.quantity) - 1;
                localStorage.setItem("Add To Cart", JSON.stringify(data));

                displayProducts(data);
            }
        });

        let removeProduct = document.createElement("button");
        removeProduct.innerText = "X";

        removeProduct.addEventListener("click", (event) => {
            event.target.parentNode.remove();
            data.splice(index, 1);
            localStorage.setItem("Add To Cart", JSON.stringify(data));
            displayProducts(data);
        });

        card.append(image, name, price, desc, increment, quantity, decrement, removeProduct);

        container.append(card);
    });

    // console.log(myData)
}