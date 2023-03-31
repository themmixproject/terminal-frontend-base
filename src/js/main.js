import "../scss/main.scss";

let terminalWindow = document.getElementById("terminal-window");


document.addEventListener("click", function(){
    focusOnInput();
})

document.addEventListener("touch", function(event){
    event.preventDefault();
    focusOnInput();
})

function focusOnInput(){
    let input = document.getElementById("prompt-input");
    if(input){
        input.focus();
    }
}

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

function promptUser(prompt, processInput) {
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

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let promptParent = form.parentElement;
        promptParent.removeChild(form);

        let contentDiv = document.createElement("div");
        contentDiv.innerHTML = input.value;
        promptParent.appendChild(contentDiv);

        processInput(input.value);
    });
}

print("Hello World!");
promptUser("What is your name? :", function (value) {
    print("Hello " + value + "!");
});
