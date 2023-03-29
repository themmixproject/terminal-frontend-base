import "../scss/main.scss";

let terminalWindow = document.getElementById("terminal-window");

function createDiv(className, innerHTML) {
    let element = document.createElement("div");
    element.className = className;
    element.innerHTML = innerHTML;

    return element;
}

function print(text) {
    let terminalLine = createDiv("terminal-line", ">\xa0");
    terminalLine.appendChild(createDiv("terminal-line-content", text));

    terminalWindow.appendChild(terminalLine);
}

print("Hello World!");

function readLine(prompt) {
    let terminalLine = createDiv("terminal-line", ">\xa0");
    let terminalLineContent = createDiv("terminal-line-content", prompt);

    let form = document.createElement("form");
    form.id = "prompt-form";

    let input = document.createElement("input");
    input.id = "prompt-input";

    form.appendChild(input);
    terminalLineContent.appendChild(form);
    terminalLine.appendChild(terminalLineContent);
    terminalWindow.appendChild(terminalLine);

    input.focus();
}

readLine("Question? :");
