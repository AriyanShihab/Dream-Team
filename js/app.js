// appending player name on selected player container
//  common function for get element by id
function getById(element) {
    return document.getElementById(element);
}
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

// total cost for player calculation