//  common function: 01; for get element by id
function getById(element) {
    return document.getElementById(element);
}
// common function: 02;
// these function only take an id of input feild and it find and select that element with the help of
// getById function and then return the value as a number, and the awsome part is it dose little bit of validation of input
function getInputValueAsNumber(inputFeild) {
    const element = getById(inputFeild);
    const valueInString = element.value;
    if (valueInString == "") {
        alert("you can not enter an empty value");
        return;
    }
    const valueInNumber = parseFloat(valueInString);
    if (valueInNumber == NaN) {
        alert("please enter a valid Number");
        return;
    }
    return valueInNumber;
}
// common function: 03;
// set inner text of element
function setInnerTexr(elementToSet, whatToSet) {
    getById(elementToSet).innerText = whatToSet;
}
// ====>>> task one: appending player name on selected player container
// select button handeler
const buttonParent = getById("buttonParent");
buttonParent.addEventListener("click", function(e) {});
// for of loop to all the buttons
const selectedPlayerParent = getById("selectedPlayerParent");
const allButtons = buttonParent.getElementsByTagName("button");
let numberOfSelectedPLayer;
for (const btn of allButtons) {
    btn.addEventListener("click", function() {
        if (selectedPlayerParent.children.length == 5) {
            alert("only 5 player can be selected");
            return;
        }
        let playerName = btn.parentElement.querySelector("h1").innerText;
        const li = document.createElement("li");
        li.classList.add("text-white");
        li.classList.add("ml-4");
        li.innerText = playerName;
        selectedPlayerParent.appendChild(li);
        btn.setAttribute("disabled", true);
        btn.style.opacity = ".3";
    });
    numberOfSelectedPLayer = selectedPlayerParent.children.length;
}

// task two: total cost for player calculation

const playerCostCalculateButton = getById("playerCostCalculateButton");
playerCostCalculateButton.addEventListener("click", function() {
    const eachPlayerCost = getInputValueAsNumber("costPerPlayer");
    const selectedPlayer = getById("selectedPlayerParent").children.length;
    const totalCostForPlayer = eachPlayerCost * selectedPlayer;
    setInnerTexr("TotalCostForPlayer", totalCostForPlayer);
});