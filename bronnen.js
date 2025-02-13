const text = document.querySelector(".rainbow-text");

function changeColor() {
    const colors = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#8b00ff"];
    let i = 0;

    setInterval(() => {
        text.style.color = colors[i];
        i = (i + 1) % colors.length;
    }, 500); // Verandert elke 500ms
}

changeColor();
