/*var noti = document.getElementById('notif');
var select = document.querySelector('.select');
var title = document.getElementById('cardTitle');
var img = document.getElementById('cardImg');
function addCart(){
    console.log("berhasil");
    var add = Number(noti.getAttribute('data-count')|| 0);
    noti.setAttribute('data-count',add +1);
    noti.classList.add('zero');
    //copy and paste elements
    var titlecpy = document.getElementById('titleCpy');
    var TitleClone = titlecpy.cloneNode(true);
    var imgcpy = document.getElementById('imgCopy');
    var Imgclone = imgcpy.cloneNode(true);
    img.appendChild(Imgclone);
    title.appendChild(TitleClone);
    clone.lastElementChild.innerText = "Buy-Now";
}
function displayCart(){
    select.classList.toggle('display');
}*/

let buttonMe = document.querySelectorAll('.button-select');

let buttonHome = document.querySelectorAll('.button-select-home');

let product = [
    {
        name:'Lixy 3',
        tag:'lixy1',
        price:1400000,
        inCart: 0
    },
    {
        name:'Lixy 2',
        tag:'lixy2',
        price:800000,
        inCart: 0
    },
    {
        name:'Nalog',
        tag:'nalog',
        price:730000,
        inCart: 0
    },
    {
        name:'Simpli',
        tag:'simpli',
        price:300000,
        inCart: 0
    },
    {
        name:'Lixy 1',
        tag:'lixy1',
        price:250000,
        inCart: 0
    }

];

let productHome = [
    {
        name:'locging',
        tag:'autolock',
        price:800000,
        inCart: 0
    },
    {
        name:'Plugy',
        tag:'smartplug',
        price:120000,
        inCart: 0
    },
    {
        name:'Cammy',
        tag:'smartcamera',
        price:420000,
        inCart: 0
    },
    {
        name:'Pilin',
        tag:'nest',
        price:930000,
        inCart: 0
    }
];

for(let i=0; i < buttonMe.length; i++){
    buttonMe[i].addEventListener('click',() => {
        nambahNotif(product[i]);
        totalCost(product[i]);
    })
}

for(let i=0; i < buttonHome.length; i++){
    buttonHome[i].addEventListener('click',() => {
        nambahNotif(productHome[i]);
        totalCost(productHome[i]);
    })
}

function onLoadNotif()  {
    let productNumber = localStorage.getItem('nambahNotif');

    if(productNumber){
        document.querySelector('.nav-shop').setAttribute('data-count',productNumber);
        document.querySelector('.nav-shop').classList.add('zero');
    }
}

function nambahNotif(products){
    let productNumber = localStorage.getItem('nambahNotif');
    productNumber = parseInt(productNumber);
    
    if(productNumber){
        localStorage.setItem('nambahNotif', productNumber + 1);
        document.querySelector('.nav-shop').setAttribute('data-count',productNumber + 1);
    }
    else{
        localStorage.setItem('nambahNotif', 1);
        document.querySelector('.nav-shop').setAttribute('data-count', 1);
    }
    document.querySelector('.nav-shop').classList.add('zero');
    setItems(products);
}
function setItems(product){
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if(cartItems[product.tag]=== undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else{
        product.inCart = 1;
        cartItems={
            [product.tag]:product
        }
    }

    localStorage.setItem('productInCart',JSON.stringify(cartItems));
}
function totalCost(product){
    //console.log("the product is ",product.price);

    let cartCost = localStorage.getItem('totalCost');
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost); 
        localStorage.setItem('totalCost',cartCost + product.price);
    }
    else{
        localStorage.setItem('totalCost', product.price);
    }
    

}

function displayCart(){
    let cartCost = localStorage.getItem('totalCost');
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    //console.log(cartItemS);
    let selectContainer = document.querySelector('.produk');
    if(cartItems && selectContainer ){
        selectContainer.innerHTML ='';
        Object.values(cartItems).map(item =>{
            selectContainer.innerHTML += `
            <div class="row row-cols-4 text-uppercase text-counter produk d-flex align-items-center">
                <div class="col-md-5 col-sm-2">
                    <i  class="far fa-times-circle text-counter"></i>
                    <img src="../assets/img/${item.tag}.jpg" class="card-img-fluid img-card-counter p-1" height="150px" width="150px" />
                    <span>${item.name}</span>
                </div>
                <div class="col-md-3 col-sm-3">
                    <span class="text-counter">${item.price}</span>
                </div>
                <div class="col-md-2 col-sm-3 text-center">
                    <i class="fas fa-minus text-primary pr-md-2"></i>
                    <span class="text-counter">${item.inCart}</span>
                    <a class="button-select" type="button"><i class="fas fa-plus pl-md-2 text-primary"></i></a>
                </div>
                <div class="col-md-2 col-sm-4">
                    <span class="text-counter">${item.inCart * item.price}</span>
                </div>
            </div>
            `
            
        });
        
        selectContainer.innerHTML += `
            <div class="row text-uppercase text-counter justify-content-end title-cart">
                <div class="col-md-2 col-sm-4">
                    <h4 class="title-cart">Total</h4>
                </div>
                <div class="col-md-2 col-sm-4">
                    <h4 class="title-cart">Rp. ${cartCost}</h4>
                </div>
            </div>
            <div class="row row-cols-3 row-cols-lg-6 text-uppercase text-counter justify-content-end my-3">
                <div class="col mb-3">
                    <a class="btn btn-outline-primary px-4 rounded-pill" href="#" role="button">Buy</a>
                </div>
            </div>
            `
    }
}   
onLoadNotif();
displayCart();
console.log('page is fully loaded');