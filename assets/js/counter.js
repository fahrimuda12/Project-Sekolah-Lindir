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

let product = {
    {
    }
}
for(let i=0; i < buttonMe.length; i++){
    buttonMe[i].addEventListener('click',() => {
        nambahNotif();
    })
}

function onLoadNotif()  {
    let productNumber = localStorage.getItem('nambahNotif');

    if(productNumber){
        document.querySelector('.nav-shop').setAttribute('data-count',productNumber);
        document.querySelector('.nav-shop').classList.add('zero');
    }
}

function nambahNotif(){
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
}
onLoadNotif();
console.log('page is fully loaded');