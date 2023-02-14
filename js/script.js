
// inputs
var ProductName=document.getElementById("ProductName");
var ProductPrice=document.getElementById("ProductPrice");
var ProductModel=document.getElementById("ProductModel");
var ProductDec=document.getElementById("ProductDec");
// empty array to add product
var ProductList;

if (localStorage.getItem("ProductList") == null){
    ProductList=[];
}else{
    ProductList=JSON.parse(localStorage.getItem("ProductList"));
    displayProduct(ProductList);
}

// addProduct function
function addProduct() {
    var product={
        name:ProductName.value,
        price:ProductPrice.value,
        model:ProductModel.value,
        des:ProductDec.value
    }
    ProductList.push(product);
    displayProduct(ProductList); 
    clearForm(); 
    localStorage.setItem("ProductList",JSON.stringify(ProductList));
}

// displayProduct function
function displayProduct(product){
    var cartona=``;
    for (var i=0; i<product.length ;i++){
        cartona +=`<tr>
        <td>${i+1}</td>
        <td>${product[i].name}</td>
        <td>${product[i].price}</td>
        <td>${product[i].model}</td>
        <td>${product[i].des}</td>
        <td><button class="btn btn-warning btn-sm">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm">Delete</button></td>
    </tr>`
    }

    document.getElementById("tBody").innerHTML=cartona;
}

// clearForm function after add product
function clearForm(){
    ProductName.value="";
    ProductPrice.value="";
    ProductModel.value="";
    ProductDec.value="";
}

// deleteProduct function t delete product 
function deleteProduct(index){
    ProductList.splice(index,1);
    localStorage.setItem("ProductList",JSON.stringify(ProductList));
    displayProduct(ProductList);
}