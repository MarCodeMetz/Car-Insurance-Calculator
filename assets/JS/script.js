var carType = document.getElementById("carType");
var carUse = document.getElementById("carUse");
var carOwner = document.getElementById("carOwner");
var liability = document.getElementById("liability");
var comp = document.getElementById("comp");
var coll = document.getElementById("coll");


var insurancePremium() {
    Number(carType.value + carUse.value + carOwner.value + liability.value + comp.value + coll.value)
};

console.log(insurancePremium);