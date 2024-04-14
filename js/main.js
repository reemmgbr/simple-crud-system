// ///  true found data in local
if (localStorage.getItem("products") != null) {
  ///  false not found data in local -- and don't do any thing
  productContainer = JSON.parse(localStorage.getItem("products"));
  displayData();
}

// /

var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productTaxes = document.getElementById("productTaxes");
var productAds = document.getElementById("productAds");
var productDiscount = document.getElementById("productDiscount");
var total = document.getElementById("Total");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var search = document.querySelector("#search");

var productArray = [];

if (localStorage.getItem("productlocal") == null) {
  productArray = [];
} else {
  productArray = JSON.parse(localStorage.getItem("productlocal"));
  displayData(productArray);
}
// add product

// login

function addProduct() {
  // if (vaildationProductName() == true) {
  var productObject = {
    name: productName.value,
    price: total.innerHTML,
    category: productCategory.value,
    des: productDescription.value,
  };
  productArray.push(productObject);
  localStorage.setItem("productlocal", JSON.stringify(productArray));

  clearData();
  displayData(productArray);
}

//   } else {
//     alert("reem");
//   }
// }
// get total
function getTotal() {
  if (productPrice.value != "") {
    let result =
      +productPrice.value +
      +productTaxes.value +
      +productAds.value -
      +productDiscount.value;
    total.innerHTML = result;
  }
}

// clear data
function clearData() {
  productName.value = "";
  productPrice.value = "";
  productTaxes.value = "";
  productAds.value = "";
  productDiscount.value = "";
  productCategory.value = "";
  productDescription.value = "";
}

// displayData

function displayData(arr) {
  var cartona = "";

  for (var i = 0; i < arr.length; i++) {
    cartona += `<tr>
               <td>${arr[i].name}</td>
               <td>${arr[i].price}</td>
               <td>${arr[i].category}</td>
                <td>${arr[i].des}</td>   
                 <td>
               <button class="btn btn-danger" onclick="deleteData(${i})">
                delete
               </button>
             </td>
             <td>
              <button class="btn btn-warning "onclick="updateData(${i})" >update</button>
             </td>
            </tr>`;
  }
  document.getElementById("tableData").innerHTML = cartona;
}

// deletedata
function deleteData(index) {
  productArray.splice(index, 1);
  localStorage.setItem("productlocal", JSON.stringify(productArray));
  displayData(productArray);
}

// updateData
// search

search.addEventListener("keyup", function (e) {
  // document.querySelector("search").value;
  const term = e.target.value;
  console.log(e);
  const serachArray = [];

  for (let i = 0; i < productArray.length; i++) {
    // [{},{},{},{}]

    if (productArray[i].name.includes(term)) {
      serachArray.push(productArray[i]);
    }
  }
  displayData(serachArray);
  console.log(serachArray);
});

function vaildateProduct(elemnt) {
  console.log(elemnt);
  var regex = {
    productName: /[A-Z][a-z]{0,16}/,
    productCategory: /[A-Z][a-z]{0,16}/,
    productDescription: /[A-Z][a-z]{0,32}/,
  };
  if (regex[elemnt.id].test(elemnt.value) == true) {
    elemnt.classList.add("is-valid");
    elemnt.classList.remove("is-invalid");
  } else {
    elemnt.classList.add("is-invalid");
    elemnt.classList.remove("is-valid");
  }
}
