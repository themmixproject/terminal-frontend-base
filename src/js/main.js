import "../scss/main.scss";

let terminalWindow = document.getElementById("terminal-window");

function print(text) {
    let terminalLine = document.createElement("div");
    terminalLine.className = "terminal-line";
    terminalLine.innerHTML += "$~:>\xa0";

    let terminalLineContent = document.createElement("div");
    terminalLineContent.className = "terminal-line-content";
    terminalLineContent.innerHTML = text;

    terminalLine.appendChild(terminalLineContent);
    terminalWindow.appendChild(terminalLine);
}

print("hello world!");
