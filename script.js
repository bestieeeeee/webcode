var div = document.createElement("div");
div.style.textAlign = "center";
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "products");

var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "btn btn-primary");
button.innerHTML = ("search")
button.addEventListener("click", foo);

let brand = document.createElement("div");
brand.setAttribute("id", "brand");

let product = document.createElement("div");
product.setAttribute("id", "product");


let price = document.createElement("div");
price.setAttribute("id", "price");

let image = document.createElement("div");
image.setAttribute("id", "image");

let link = document.createElement("div");
link.setAttribute("id", "link");


let description = document.createElement("div");
description.setAttribute("id", " description");


div.append(input,button,brand, product, price, image, link, description);
document.body.append(div);

async function foo() {
    let res = document.getElementById("products").value;
    var url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${res}`;
   
    

    let result = await fetch(url);
    let result1 = await result.json();
    var index = result1.length - 1;


    console.log(result1[index].brand);
    brand.innerHTML = `brand:${result1[index].brand}`;

    console.log(result1[index].product);
    product.innerHTML = `name:${result1[index].name}`;

    console.log(result1[index].price);
    price.innerHTML = `product price :${result1[index].price}`;

    console.log(result1[index].image_link);
    image.innerHTML = `image:${result1[index].image_link}`;

    console.log(result1[index].link);
    link.innerHTML = `product link :${result1[index].product_link}`;

    console.log(result1[index].description);
    description.innerHTML = `description of the product:${result1[index].description}`;


}