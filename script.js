let display = document.getElementById("display");
let history = document.getElementById("history");

/* Add value */
function appendValue(value) {
    display.value += value;
}

/* Clear */
function clearDisplay() {
    display.value = "";
    history.textContent = "";
}

/* Delete */
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

/* Calculate */
function calculate() {
    try {
        let result = Function("return " + display.value)();
        history.textContent = display.value + " =";
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

/* Theme toggle */
let toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    toggle.textContent =
        document.body.classList.contains("light") ? "☀️" : "🌙";
});

/* Keyboard support */
document.addEventListener("keydown", (e) => {
    if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
        appendValue(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        deleteLast();
    } else if (e.key === "Escape") {
        clearDisplay();
    }
});