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
        element.classList.add("bg-red-500");
        return;
    }
    const valueInNumber = parseFloat(valueInString);

    if (valueInNumber < 0) {
        alert("please Enter an number that greater than zero");
        element.classList.add("bg-red-500");
        return;
    }
    element.classList.add("bg-green-400");

    return valueInNumber;
}
// common function: 03;
// set inner text of element
function setInnerText(elementToSet, whatToSet) {
    getById(elementToSet).innerText = whatToSet;
}

// common function four: get inner text as number;
function getInnerTextAsNumber(element) {
    const sourse = getById(element);
    const inNumber = parseFloat(sourse.innerText);
    return inNumber;
}

// ====>>> task one: appending player name on selected player container
// select button handeler
const buttonParent = getById("buttonParent");

// buttonParent.addEventListener("click", function(e) {});
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
    if (selectedPlayer < 1) {
        alert("please select at least one player to calculate the cost of player");
        return;
    }
    const totalCostForPlayer = eachPlayerCost * selectedPlayer;
    if (Number.isNaN(totalCostForPlayer)) {
        alert(
            "please enter a number that is an possitive number, no string, no blank input"
        );
        return;
    }
    setInnerText("totalCostForPlayer", totalCostForPlayer);
});

// task three: calculate all the cost

const totalCost = getById("totalCost");
totalCost.addEventListener("click", function() {
    const totalCostForPlayer = getInnerTextAsNumber("totalCostForPlayer");
    if (isNaN(totalCostForPlayer)) {
        alert(
            "please follow the normal prosess, first selet the player you want, then calculate there cost and then calculate the total"
        );
        return;
    }

    const costForManager = getInputValueAsNumber("costForManager");
    const costForCoach = getInputValueAsNumber("costForCoach");
    if (costForCoach === undefined || costForManager === undefined) {
        alert(
            "something went wrong, please follow the instruction given below of the page"
        );
        return;
    }

    const totalCost = totalCostForPlayer + costForCoach + costForManager;

    setInnerText("overAllCost", totalCost);
});