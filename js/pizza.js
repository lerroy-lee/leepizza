let numbersOf
let size, crust, toppings
function getInputs() {
    size = document.getElementById("size").value;
    crust = document.getElementById("crust").value;
    toppings = document.getElementById("toppings").value;
    numbersOf = parseInt(document.getElementById("number").value);
    console.log(size);
    console.log(crust);
    console.log(toppings);
    console.log(numbersOf);
}
// let size = document.getElementById("size").value;
// let crust = document.getElementById("crust").value;
// let toppings = document.getElementById("toppings").value;
// let numbersOf = parseInt(document.getElementById("number").value);
// console.log(size);
// console.log(crust);
// console.log(toppings);
// console.log(numbersOf);


let priceOfSize, priceOfCrust, priceOfToppings, yourTotalPrice
function totalPrice () {
    getInputs()
    if (size == "small") {
        priceOfSize = 100;
        console.log(priceOfSize);

    } else if (size == "medium") {
        priceOfSize = 150;
        console.log(priceOfSize);

    }

    else if (size == "large") {
        priceOfSize = 200;
        console.log(priceOfSize);
    }
    
        if (crust == "Crispy") {
            priceOfCrust = 100;
            console.log(priceOfCrust);
        }

        else if (crust == "stuffed") {
            priceOfCrust == 150;
            console.log(priceOfCrust);
        }

        else if (crust == "glutenfree") {
            priceOfCrust = 200;
            console.log(priceOfCrust);
        }


        if (toppings == "hawaiian") {
            priceOfToppings = 100;
            console.log(priceOfToppings);
        }

        else if (toppings == "extra-cheese") {
            priceOfToppings == 150;
            console.log(priceOfToppings);
        }

        else if (toppings == "pepperoni") {
            priceOfToppings = 200;
            connsole.log(priceOfToppings);
        }

        yourTotalPrice = (priceOfSize + priceOfCrust + priceOfToppings) * numbersOf;
            console.log(yourTotalPrice)
    
    if (yourTotalPrice < 0) {
        alert("This is incorrect please make an order")

    } else {
        document.getElementById("output1").innerHTML = "Your total price for "+numbersOf+" " + size+ " "  + crust+ " " + toppings+" " + "pizza(s) " + " is Ksh. " + yourTotalPrice;
    }
};

//String.prototype.newTotalPrice=function() {
 //   alert(this +"Ksh.200 more on delivery")
//};
function includingDelivery(){
 totalPrice()
    alert("Your total payment is" + yourTotalPrice+ "plus 200 more")
    prompt("Enter your location")
    alert("Thank you for chooing us!!")
    newTotal=yourTotalPrice+200;
    document.getElementById("output2").innerHTML="Our esteemed customer your total your for "+numbersOf+ " "+"for order " + size+ " "+crust+" " +toppings+" "+"and you should pay "+newTotal;
};


   /*function includingDelivery(){ 
    totalPrice()
function onDelivery(yourTotalPrice,twohunredmore){
    
    this.plusDelivery=yourTotalPrice;
    this.more=twohunredmore
}
onDelivery.prototype.yourPriceNow=function () {
    return this.yourTotalPrice+ " "+this.twohundredmore
    
}
const youShouldPay = new onDelivery("addtheinitial",+"deliverycharges");
document.getElementById("output2").innerHTML="Dear customer you should pay"+youShouldPay.yourPriceNow()
   };*/