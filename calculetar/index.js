let display = document.getElementById("display");
let button = document.querySelectorAll("button");
let screenValue = " ";



for (item of button) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;

        if (buttonText == '=') {
            display.value = eval(screenValue);
            screenValue = display.value;
        } else if (buttonText == 'X') {
            buttonText = '*'
            screenValue += buttonText;
            display.value = screenValue;
        }
        else if (buttonText == 'C') {
            display.value = ' ';
            screenValue = ' ';
        }
        else {
            screenValue += buttonText;
            display.value = screenValue;
        }
    })
}
