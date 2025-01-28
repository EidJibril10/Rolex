function getProducts() {
  var xpro = new XMLHttpRequest();
  xpro.open("GET", "../watchesAPIs.json");
  xpro.send();
  xpro.addEventListener("readystatechange", function () {
    if (xpro.readyState == 4) {
      var response1 = JSON.parse(xpro.response);

      // عرض جميع المنتجات
      var allProducts = response1;
      console.log("allProducts:", allProducts);
      var allProductsDiv = document.getElementById("all-products");
      console.log("allProductsDiv:", allProductsDiv);
      if (allProductsDiv) {
        allProducts.forEach(function (pro) {
          console.log("pro:", pro);
          var div = document.createElement("div");
          var img = document.createElement("img");
          img.src = pro.image;
          var button2 = document.createElement("button");
          button2.setAttribute("class", "button");
          button2.dataset.id = pro.id;
          var d = document.createElement("p");
          d.innerHTML = "Name:" + pro.name + " " + " price=" + pro.price + "$";
          d.append(img);
          button2.innerHTML = "buy";
          button2.addEventListener("click", function () {
            var id = this.dataset.id;
            var product = response1.find(function (p) {
              return p.id === parseInt(id);
            });
            if (product) {
              addToBasket(product);
            } else {
              console.log("Product not found");
            }
          });
          d.append(button2);
          d.setAttribute("class", "item");
          div.append(d);
          allProductsDiv.append(div);
        });
      } else {
        console.log("allProductsDiv is null");
      }

      // عرض منتجات الرجال
      var menProducts = response1.filter(function (p) {
        return p.gender === "men";
      });
      console.log("menProducts:", menProducts);
      var productsMenDiv = document.getElementById("products-men");
      console.log("productsMenDiv:", productsMenDiv);
      if (productsMenDiv) {
        menProducts.forEach(function (pro) {
          console.log("pro:", pro);
          var div = document.createElement("div");
          var img = document.createElement("img");
          img.src = pro.image;
          var button2 = document.createElement("button");
          button2.setAttribute("class", "button");
          button2.dataset.id = pro.id;
          var d = document.createElement("p");
          d.innerHTML = "Name:" + pro.name + " " + " price=" + pro.price + "$";
          d.append(img);
          button2.innerHTML = "buy";
          button2.addEventListener("click", function () {
            var id = this.dataset.id;
            var product = response1.find(function (p) {
              return p.id === parseInt(id);
            });
            if (product) {
              addToBasket(product);
            } else {
              console.log("Product not found");
            }
          });
          d.append(button2);
          d.setAttribute("class", "item");
          div.append(d);
          productsMenDiv.append(div);
        });
      } else {
        console.log("productsMenDiv is null");
      }

      // عرض منتجات النساء
      var womenProducts = response1.filter(function (p) {
        return p.gender === "women";
      });
      console.log("womenProducts:", womenProducts);
      var productsWomenDiv = document.getElementById("products-women");
      console.log("productsWomenDiv:", productsWomenDiv);
      if (productsWomenDiv) {
        womenProducts.forEach(function (pro) {
          console.log("pro:", pro);
          var div = document.createElement("div");
          var img = document.createElement("img");
          img.src = pro.image;
          var button2 = document.createElement("button");
          button2.setAttribute("class", "button");
          button2.dataset.id = pro.id;
          var d = document.createElement("p");
          d.innerHTML = "Name:" + pro.name + " " + " price=" + pro.price + "$";
          d.append(img);
          button2.innerHTML = "buy";
          button2.addEventListener("click", function () {
            var id = this.dataset.id;
            var product = response1.find(function (p) {
              return p.id === parseInt(id);
            });
            if (product) {
              addToBasket(product);
            } else {
              console.log("Product not found");
            }
          });
          d.append(button2);
          d.setAttribute("class", "item");
          div.append(d);
          productsWomenDiv.append(div);
        });
      } else {
        console.log("productsWomenDiv is null");
      }

      console.log("response1:", response1);
      console.log("allProducts:", allProducts);
      console.log("menProducts:", menProducts);
      console.log("womenProducts:", womenProducts);
    }
  });
}
getProducts();

let cart = [];
let count = 0;

function addToBasket(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}
function updateCart() {
  var cartCount = document.getElementById("basketCount");
  cartCount.innerHTML = cart.length;
  var cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var listItem = document.createElement("li");
    listItem.innerHTML = `
            <img src="${item.image}" width="50" height="50">
            <p>Name: ${item.name}</p>
            <p>Price: ${item.price}$</p>
        `;
    cartItems.append(listItem);
    totalPrice += item.price;
  }
  var totalPriceElement = document.getElementById("total-price");
  totalPriceElement.innerHTML = `Total Price: ${totalPrice}$`;
 
}
