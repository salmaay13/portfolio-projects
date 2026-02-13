let display = document.getElementById("display");

window.onload = function() {
    display.value = "0";
};

function append(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function calculate() {
    try {
        // Remplacer ^ par ** pour la puissance
        let expression = display.value.replace(/\^/g, "**");
        display.value = eval(expression);
    } catch {
        alert("Erreur");
        display.value = "0";
    }
}

function clearDisplay() {
    display.value = "0";
}

function clearEntry() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}