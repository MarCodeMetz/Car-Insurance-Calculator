function insurancePremium() {

    var carType = document.getElementById("carType").value;
    var carUse = document.getElementById("carUse").value;
    var carOwner = document.getElementById("carOwner").value;
    var liability = document.getElementById("liability").value;
    var comp = document.getElementById("comp").value;
    var coll = document.getElementById("coll").value;
    var valuesForPremium = Number(carType.value) + Number(carUse.value) + Number(carOwner.value) + Number(liability.value) + Number(comp.value) + Number(coll.value);
}
console.log(valuesForPremium);


//pop up result, when calculate btn pressed
function calculateResult() {
    document.getElementById("quoteResult").innerHTML = "Here is your Quote! $" + valuesForPremium;
}