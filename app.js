const productsUrl = "https://fakestoreapi.com/products?limit=8";
const cartsUrl = "https://fakestoreapi.com/carts";
const usersUrl = "https://fakestoreapi.com/users";
const result = document.getElementById("res");

function getProducts(){
  fetch(productsUrl)
  .then((res) => res.json())
  .then((data) => showProducts(data));
}
function showProducts(arr) {
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
