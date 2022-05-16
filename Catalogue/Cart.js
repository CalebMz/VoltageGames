function myLoad(){
    total = JSON.parse(sessionStorage.getItem("total"));
    let lengthOfArray = total.length;
    let myTotal = 0;
    for (let i = 0; i <lengthOfArray; i++){
        myTotal += total[i];
    }
    let vat = myTotal * 0.15;
    myTotal = myTotal + vat;
    document.getElementById("totalAmount").innerHTML = "R" + myTotal;
}

$(document).ready(function(){

    $("#delivery").click(function(){
        $("#collectionForm").hide();
        $("#deliveryForm").show();
    })

    $("#collection").click(function(){
        $("#deliveryForm").hide();
        $("#collectionForm").show();
    })

    $("#SubmitButton1").click(function(){
        let x = Math.floor((Math.random() * 10000000) + 1000000);
        alert("Your order has been successfully placed!" + "\r\n" + "Ref Number: #" + x);
    })

    $("#SubmitButton2").click(function(){
        let x = Math.floor((Math.random() * 10000000) + 1000000);
        alert("The date of your collection has been successfully placed!" + "\r\n" + "Ref Number: #" + x);
    })

    //Change price depending on delivery option
    //All we do is change the value of total before it is added to the other values
    $("#RAM").click(function(){
        total = JSON.parse(sessionStorage.getItem("total"));
        let lengthOfArray = total.length;
        let myTotal = 200;
        for (let i = 0; i <lengthOfArray; i++){
            myTotal += total[i];
        }
        let vat = myTotal * 0.15;
        myTotal = myTotal + vat;
        document.getElementById("totalAmount").innerHTML = "R" + myTotal;
    })

    $("#Postnet").click(function(){
        total = JSON.parse(sessionStorage.getItem("total"));
        let lengthOfArray = total.length;
        let myTotal = 150;
        for (let i = 0; i <lengthOfArray; i++){
            myTotal += total[i];
        }
        let vat = myTotal * 0.15;
        myTotal = myTotal + vat;
        document.getElementById("totalAmount").innerHTML = "R" + myTotal;
    })

    $("#Fastway").click(function(){
        total = JSON.parse(sessionStorage.getItem("total"));
        let lengthOfArray = total.length;
        let myTotal = 300;
        for (let i = 0; i <lengthOfArray; i++){
            myTotal += total[i];
        }
        let vat = myTotal * 0.15;
        myTotal = myTotal + vat;
        document.getElementById("totalAmount").innerHTML = "R" + myTotal;
    })

    //Apply coupon
    $("#XboxCoupon").click(function(){
        total = JSON.parse(sessionStorage.getItem("total"));
        let lengthOfArray = total.length;
        let myTotal = -50;
        for (let i = 0; i <lengthOfArray; i++){
            myTotal += total[i];
        }
        let vat = myTotal * 0.15;
        myTotal = myTotal + vat;
        document.getElementById("totalAmount").innerHTML = "R" + myTotal;
    })

    $("#PlaystationCoupon").click(function(){
        total = JSON.parse(sessionStorage.getItem("total"));
        let lengthOfArray = total.length;
        let myTotal = -20;
        for (let i = 0; i <lengthOfArray; i++){
            myTotal += total[i];
        }
        let vat = myTotal * 0.15;
        myTotal = myTotal + vat;
        document.getElementById("totalAmount").innerHTML = "R" + myTotal;
    })

    $("#SteamCoupon").click(function(){
        total = JSON.parse(sessionStorage.getItem("total"));
        let lengthOfArray = total.length;
        let myTotal = -10;
        for (let i = 0; i <lengthOfArray; i++){
            myTotal += total[i];
        }
        let vat = myTotal * 0.15;
        myTotal = myTotal + vat;
        document.getElementById("totalAmount").innerHTML = "R" + myTotal;
    })
   
});