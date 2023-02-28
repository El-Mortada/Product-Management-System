var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");
var products = [];
if (localStorage.getItem("items") != null) {
  products = JSON.parse(localStorage.getItem("items"));
  displayProduct();
}
function addProduct() {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescInput.value,
  };
  products.push(product);
  localStorage.setItem("items", JSON.stringify(products));
  console.log(products);
  clearForm();
  displayProduct();
}
function clearForm() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescInput.value = "";
}
function displayProduct() {
  $("#tableBody").empty();
  for (var i = 0; i < products.length; i++) {
    $("#tableBody").append(`<tr>
    <td>${[i]}</td>
    <td>${products[i].name}</td>
    <td>${products[i].price}</td>
    <td>${products[i].category}</td>
    <td>${products[i].desc}</td>
    <td><button class='btn-outline-danger' onclick='deletedItem(${i})'>Delete</button></td>
    <td><button class='btn-outline-warning ' onclick="updateItem(${i})">Update</button></td>
  </tr>`);
  }
}
function deletedItem(unwantedItem) {
  products.splice(unwantedItem, 1);
  localStorage.setItem("items", JSON.stringify(products));
  displayProduct();
}
function searchItem(term) {
  var list = "";
  for (i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
      list += `<tr>
      <td>${[i]}</td>
      <td>${products[i].name}</td>
      <td>${products[i].price}</td>
      <td>${products[i].category}</td>
      <td>${products[i].desc}</td>
      <td><button class='btn-outline-danger' onclick='deletedItem(${i})'>Delete</button></td>
      <td><button class='btn-outline-warning' onclick='updateItem(${i})'>Update</button></td>
    </tr>`;
    }
    document.getElementById("tableBody").innerHTML = list;
  }
}

function updateItem(updatedItem) {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescInput.value,
  };
  products.splice(updatedItem, 1, product);
  displayProduct();
  localStorage.setItem("items", JSON.stringify(products));
}
