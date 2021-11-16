/*Menu*/
let btn = document.querySelector(".menu-toggle");
let close = document.querySelector(".menu-close");
let menu = document.querySelector(".menu");

btn.addEventListener("click", function (e) {
    menu.classList.add("active");
});

close.addEventListener("click", function (e) {
    menu.classList.remove("active");
});

let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let input = document.querySelector(".input");
let add = document.querySelector(".btn-add");
let content = document.querySelector(".cart-box .content");
let deleteBtn = document.querySelector(".delete");
let check = document.querySelector(".btn-check");

function print() {
    if (window.localStorage.getItem("num")) {
        document.querySelector(".num").innerHTML = localStorage.getItem("num");
        document.querySelector(".nums").innerHTML = localStorage.getItem("num");
        let total = localStorage.getItem("num") * 125;
        document.querySelector(".total").innerHTML = "$" + total.toFixed(2);
    } else {
        document.querySelector(".num").style.display = 'none';
        content.innerHTML = '<p>Your cart is empty.</p>'
    }
}

minus.addEventListener("click", function (e) {
    let inputVal = parseInt(input.value);
    if (inputVal > 0) {
        inputVal = inputVal - 1;
        input.value = inputVal;
    }
});

plus.addEventListener("click", function (e) {
    let inputVal = parseInt(input.value);
    inputVal = inputVal + 1;
    input.value = inputVal;
});

add.addEventListener("click", function (e) {
    let inputVal = parseInt(input.value);
    window.localStorage.setItem("num", inputVal);
    window.location.reload();
    input.value = 0;
    print();
    
});

deleteBtn.addEventListener("click", function (e) {
    window.localStorage.removeItem("num");
    print();
});

check.addEventListener("click", function (e) {
    window.localStorage.removeItem("num");
    print();
});

print();
/*Shopping Cart*/
let shoppingBtn = document.querySelector(".fa-shopping-cart");
let cartBox = document.querySelector(".cart-box");

shoppingBtn.addEventListener("click", function (e) {
    cartBox.classList.toggle("active");
});

/*Img Slider*/
let closeImg = document.querySelector("#close");
closeImg.addEventListener("click", function (e) {
    document.querySelector("#fullImgBox").classList.remove("active");
});

let OpenImg = document.querySelectorAll(".img-box img");
let fullImg = document.querySelector("#fullImg");
let imgs = document.querySelectorAll(".img");
let imgsArray = [];
let btnLeft = document.querySelector(".arrow-left");
let btnRight = document.querySelector(".arrow-right");
let j = 0;

for (let i = 0; i < imgs.length; i++) {
    imgsArray.push(imgs[i].alt);
}

OpenImg.forEach((img) => {
    img.addEventListener("click", function (e) {
        document.querySelector("#fullImgBox").classList.add("active");
        fullImg.src = `images/${img.alt}`;
        OpenImg.forEach((ele) => {
            ele.parentNode.classList.remove("active");
        });
        img.parentNode.classList.add("active");
        btnLeft.addEventListener("click", function (e) {
            if (j <= 0) j = imgsArray.length;
            j--;
            fullImg.src = `images/${imgsArray[j]}`;
        });
        btnRight.addEventListener("click", function (e) {
            if (j >= imgsArray.length - 1) j = -1;
            j++;
            fullImg.src = `images/${imgsArray[j]}`;
        });
    });
});


/*Mobile slider*/
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let bigImg =document.querySelector(".big-img img");
let bigImgsArray = ['image-product-1.jpg','image-product-2.jpg','image-product-3.jpg','image-product-4.jpg'];
let i = 0;

    left.addEventListener("click", function (e) {
            if (i <= 0) i = bigImgsArray.length;
            i--;
            bigImg.src = `images/${bigImgsArray[i]}`;
        });
        right.addEventListener("click", function (e) {
            if (i >= bigImgsArray.length - 1) i = -1;
            i++;
            bigImg.src = `images/${bigImgsArray[i]}`;
        });
