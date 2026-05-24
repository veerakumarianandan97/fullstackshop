let cart=
JSON.parse(
localStorage.getItem("cart")
) || [];

function updateCartCount(){

document.getElementById(
"cartCount"
).innerText=cart.length;

}

function renderHome(){

document.getElementById(
"app"
).innerHTML=`

<div style="text-align:center;padding:80px;">

<h1 style="font-size:55px;color:#243b55;">
Welcome To ShopHub
</h1>

<p style="
font-size:22px;
margin-top:20px;
color:#555;
">

Discover Amazing Products
With Best Deals

</p>

<a href="#products">

<button style="margin-top:30px;">
Shop Now
</button>

</a>

</div>

`;

}

function renderProducts(data){

document.getElementById(
"app"
).innerHTML=`

<input
type="text"
placeholder="Search Products..."
onkeyup="searchProducts(this.value)"
>

<div class="products">

${data.map(product=>`

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button
onclick="addToCart(${product.id})">

Add To Cart

</button>

</div>

`).join("")}

</div>

`;

}

function searchProducts(value){

const filtered=
products.filter(product=>

product.name
.toLowerCase()
.includes(
value.toLowerCase()
)

);

renderProducts(filtered);

}

function addToCart(id){

const product=
products.find(
p=>p.id===id
);

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert("Added To Cart");

}

function renderCart(){

if(cart.length===0){

document.getElementById(
"app"
).innerHTML=`

<h2>
Cart Is Empty
</h2>

`;

return;

}

document.getElementById(
"app"
).innerHTML=`

<h2>Your Cart</h2>

${cart.map(item=>`

<div class="cart-item">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

</div>

`).join("")}

`;

}

updateCartCount();

navigate();