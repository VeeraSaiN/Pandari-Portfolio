document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Toggle Theme";
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.padding = "10px";
    toggleButton.style.background = "#0abde3";
    toggleButton.style.color = "#fff";
    toggleButton.style.border = "none";
    toggleButton.style.cursor = "pointer";
    
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        if (body.style.backgroundColor === 'white') {
            body.style.backgroundColor = '#1e1e1e';
            body.style.color = '#ddd';
        } else {
            body.style.backgroundColor = 'white';
            body.style.color = '#333';
        }
    });
});