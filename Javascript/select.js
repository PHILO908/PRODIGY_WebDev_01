var image1 = {
    image8: "/Images/Image 8.jpg",
    name: "Iphone 12",
    price:   130000,
    originalPrice:  120000,
    itemId: "S001",
};


var image2 = {
    image5: "/Images/Image 5.jpg",
    name1: "Iphone 13",
    price1:  140000,
    originalPrice1: 130000,
    itemId: "S002",
};


var image3 = {
    image6: "/Images/Image 6.jpg",
    name2: "Iphone 14",
    price2: 150000,
    originalPrice2: 140000,
    itemId: "S003",
};


var image4 = {
    image7: "/Images/Image 7.jpg",
    name3: "Iphone 15",
    price3: 160000,
    originalPrice3: 150000,
    itemId: "S004",
};


var selectId = decodeURIComponent(window.location.search);

var selectedItem = selectId.substring(1);

document.getElementById("display").innerText = selectedItem;


if(selectedItem == image1.itemId){
    document.getElementById("image").src = image1.image8;
    document.getElementById("name1").innerText = image1.name;
    document.getElementById("discountedPrice1").innerText = 'kshs' +  image1.price;
    document.getElementById("originalPrice1").innerText = image1.originalPrice;

    var cost = image1.price;
    qty(cost);
}

else if(selectedItem == image2.itemId){
    document.getElementById("image").src = image2.image5;
    document.getElementById("name1").innerText = image2.name1;
    document.getElementById("discountedPrice1").innerText = image2.price1;
    document.getElementById("originalPrice1").innerText = image2.originalPrice1;

    var cost = image2.price1;
    qty(cost);
}

else if(selectedItem == image3.itemId){
    document.getElementById("image").src = image3.image6;
    document.getElementById("name1").innerText = image3.name2;
    document.getElementById("discountedPrice1").innerText = image3.price2;
    document.getElementById("originalPrice1").innerText = image3.originalPrice2;

    var cost = image3.price2;
    qty(cost);
}

else if(selectedItem == image4.itemId){
    document.getElementById("image").src = image4.image7;
    document.getElementById("name1").innerText = image4.name3;
    document.getElementById("discountedPrice1").innerText = image4.price3;
    document.getElementById("originalPrice1").innerText = image4.originalPrice3;

    var cost = image4.price3;
    qty(cost);
}


function qty(cost){
    document.getElementById("qty").onkeyup = function() {
        var amount = parseInt(cost);
        var quantity = parseInt(document.getElementById("qty").value);

        if (quantity > 1) {
            var total = quantity * amount;
            document.getElementById("total").innerText = "Total: KES " + total;
            userLocation(total);
        }
        else{
            var total = 1 * amount;
            document.getElementById("total").innerText = "Total: KES " + total;
            userLocation(total);
        }
    };
}

function userLocation(total){
    document.getElementById("Location").onchange = function () {
        var Karen = 500;
        var Kitsuru = 600;
        var Muthaiga = 700;

        var delivery = document.getElementById("Location").value;

        if(delivery == "Karen") {
            document.getElementById("total").innerText = total + Karen;
        }
        else if(delivery == "Kitsuru") {
            document.getElementById("total").innerText = total + Kitsuru;
        }
        else if(delivery == "Muthaiga") {
            document.getElementById("total").innerText = total + Muthaiga;
        }
    };
}



