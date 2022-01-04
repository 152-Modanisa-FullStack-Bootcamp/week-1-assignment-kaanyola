import "styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    // Firsly, log response to the console,
    console.log(response);
    // inspect the reponse and see that it has data field

    // Assign data field of the response to
    // products variable below by destructuring
    // You can use allias
    const { data: products } = response;

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    products.forEach((item) => console.log(item.name));

    // Get all products that contain "Şal"
    // in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assing mapped items to salProducts variable
    const salProducts = products
      .filter((item) => item.name.includes("Şal"))
      .map((salItem) => ({ name: salItem.name, image: salItem.image }));

    // Display the images and names of salProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
    var app = document.getElementById("app");
    salProducts.forEach((item) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      const nameEl = document.createElement("p");
      nameEl.innerHTML = item.name;
      const imageEl = document.createElement("img");
      imageEl.src = item.image;
      productCard.appendChild(imageEl);
      productCard.appendChild(nameEl);
      app.appendChild(productCard);
    });
  });
