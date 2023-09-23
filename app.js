const productsUrl = "https://fakestoreapi.com/products?limit=8";
const cartsUrl = "https://fakestoreapi.com/carts";
const usersUrl = "https://fakestoreapi.com/users";
const result = document.getElementById("res");
const loading =document.getElementById("loading");

function getProducts(){
  fetch(productsUrl)
  .then((res) => res.json())
  .then((data) => showProducts(data));
}
function showProducts(arr) {
loading.classList.remove("loading");
loading.classList.add("loaded")
result.innerHTML = "";
result.innerHTML = arr
.map((iteam) =>
{
  const { title, price, category, description, image } = iteam;
  return `
  <div class="card">
  <img src="${image}" alt="${title}">
  <h4>${title}</h4>
  <br>  
</div>
  `;
})
.join("")
}
getProducts();

const productsUrl2 = "https://fakestoreapi.com/products?limit=4";
const result2 = document.getElementById("res2");

function getProducts2() {
  fetch(productsUrl2)
  .then((res) => res.json())
  .then((data) => showProducts2(data));
}
function showProducts2(arr) {
  result2.innerHTML = "";
  result2.innerHTML = arr
  .map((iteam) => {
  const{ title, price, image } = iteam;
  return `
  <div class="card2">
  <img src="${image}" alt="${title}">
  <h4>${title}</h4>
  <p>price: "${price}$"</p>
  <br>  
</div>
  `;
  })
  .join("")
}
getProducts2();

const productsUrl3 = "https://fakestoreapi.com/products?limit=4";
const result3 = document.getElementById("res3");

function getProducts3() {
  fetch(productsUrl3)
  .then((res) => res.json())
  .then((data) => showProducts3(data));
}
function showProducts3(arr) {
  result3.innerHTML = "";
  result3.innerHTML = arr
  .map((iteam) => {
  const{ title, price, image } = iteam;
  return `
  <div class="card3">
  <img src="${image}" alt="${title}">
  <h4>${title}</h4>
  <p>price: "${price}$"</p>
  <br>  
</div>`;
  })
  .join("")
}
getProducts3();
