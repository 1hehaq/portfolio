let cursor;
let cursorBlink;
let commandInput;
let terminal;

function $(id) {
    return document.getElementById(id);
}

window.onload = init;

function init() {
    cursor = $("cursor");
    commandInput = $("command-input");
    terminal = $("terminal");
    createCursor();
    animateCursor();
    handleInput();
    makeTerminalClickable();
}

function createCursor() {
    cursor.innerHTML = '▋';
    cursor.style.display = 'inline-block';
    cursor.style.color = '#33ff33';
    cursor.style.fontSize = '1.2em';
    cursor.style.position = 'absolute';
    cursor.style.bottom = '2px';
    cursor.style.transition = 'opacity 0.1s';
    cursor.style.fontWeight = 'bold';
    cursor.style.lineHeight = '1';
}

function animateCursor() {
    cursorBlink = setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 500);
}

function handleInput() {
    commandInput.addEventListener('input', updateCursorPosition);
    commandInput.addEventListener('keydown', handleKeyDown);
    commandInput.addEventListener('focus', () => {
        cursor.style.opacity = '1';
        cursor.style.display = 'inline-block';
    });
    commandInput.addEventListener('blur', () => {
        cursor.style.opacity = '0';
        cursor.style.display = 'none';
    });
}

function makeTerminalClickable() {
    terminal.addEventListener('click', (e) => {
        if (!e.target.closest('a, button, input')) {
            commandInput.focus();
            commandInput.selectionStart = commandInput.selectionEnd = commandInput.value.length;
            updateCursorPosition();
        }
    });
}

function updateCursorPosition() {
    const inputRect = commandInput.getBoundingClientRect();
    const inputStyle = window.getComputedStyle(commandInput);
    const letterWidth = parseFloat(inputStyle.fontSize) * 0.6;
    const cursorLeft = inputRect.left + (commandInput.selectionStart * letterWidth);
    const cursorTop = inputRect.top + (inputRect.height - parseFloat(inputStyle.fontSize)) / 2;
    cursor.style.left = `${cursorLeft}px`;
    cursor.style.top = `${cursorTop}px`;
}

function handleKeyDown(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setTimeout(updateCursorPosition, 0);
    }
}

function typeEffect(element, text, speed = 50) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

function clearScreen() {
    $('output').innerHTML = '';
    commandInput.value = '';
    cursor.style.left = '0px';
}

function executeCommand(command) {
    const output = $('output');
    output.innerHTML += `<div>> ${command}</div>`;
    
    if (command.toLowerCase() === 'clear') {
        setTimeout(clearScreen, 500);
    } else {
        output.innerHTML += `<div>Command not recognized: ${command}</div>`;
    }
}

commandInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        executeCommand(commandInput.value);
        commandInput.value = '';
        cursor.style.left = '0px';
    }
});
