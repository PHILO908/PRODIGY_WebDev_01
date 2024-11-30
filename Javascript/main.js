var image1 = {
    image8: "/Images/Image 8.jpg",
    name: "Iphone 12",
    price:  "KSh" + " " + 130000,
    originalPrice: "KSh" + " " + 120000,
    itemId: "S001",
};

document.getElementById("image8").src = image1.image8;
document.getElementById("name").innerText = image1.name;
document.getElementById("price").innerText = image1.price;
document.getElementById("originalPrice").innerText = image1.originalPrice;

var image2 = {
    image5: "/Images/Image 5.jpg",
    name1: "Iphone 13",
    price1:  "KSh" + " " + 140000,
    originalPrice1: "KSh" + " " + 130000,
    itemId: "S002",
};

document.getElementById("image5").src = image2.image5;
document.getElementById("name1").innerText = image2.name1;
document.getElementById("price1").innerText = image2.price1;
document.getElementById("originalPrice1").innerText = image2.originalPrice1;

var image3 = {
    image6: "/Images/Image 6.jpg",
    name2: "Iphone 14",
    price2:  "KSh" + " " + 150000,
    originalPrice2: "KSh" + " " + 140000,
    itemId: "S003",
};

document.getElementById("image6").src = image3.image6;
document.getElementById("name2").innerText = image3.name2;
document.getElementById("price2").innerText = image3.price2;
document.getElementById("originalPrice2").innerText = image3.originalPrice2;

var image4 = {
    image7: "/Images/Image 7.jpg",
    name3: "Iphone 15",
    price3:  "KSh" + " " + 160000,
    originalPrice3: "KSh" + " " + 150000,
    itemId: "S004",
};

document.getElementById("image7").src = image4.image7;
document.getElementById("name3").innerText = image4.name3;
document.getElementById("price3").innerText = image4.price3;
document.getElementById("originalPrice3").innerText = image4.originalPrice3;


document.getElementById("image1").onclick = function(){
    window.location.href = "/select.html" + "?" + image1.itemId;
}
document.getElementById("image2").onclick = function(){
    window.location.href = "/select.html" + "?" + image2.itemId;
}

document.getElementById("image3").onclick = function(){
    window.location.href = "/select.html" + "?" + image3.itemId;
}

document.getElementById("image4").onclick = function(){
    window.location.href = "/select.html" + "?" + image4.itemId;
}