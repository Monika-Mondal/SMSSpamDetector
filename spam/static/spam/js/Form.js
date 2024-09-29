// form.js

// Toggle form visibility
function toggleForm() {
    const form = document.getElementById('draggableForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

// Close the form
function closeForm() {
    document.getElementById('draggableForm').style.display = 'none';
}

// Minimize the form
function minimizeForm() {
    const form = document.getElementById('draggableForm');
    form.style.height = '50px';
    form.querySelector('form').style.display = 'none';
}

// Maximize the form
function maximizeForm() {
    const form = document.getElementById('draggableForm');
    form.style.height = '300px';
    form.querySelector('form').style.display = 'block';
}

// Make the form draggable
dragElement(document.getElementById("draggableForm"));

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.querySelector('.form-header')) {
        // if present, the header is where you move the DIV from:
        document.querySelector('.form-header').onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
