function navigate(){

const page=
location.hash.replace("#","") || "home";

if(page==="home"){
renderHome();
}

if(page==="products"){
renderProducts(products);
}

if(page==="cart"){
renderCart();
}

}

window.addEventListener(
"hashchange",
navigate
);