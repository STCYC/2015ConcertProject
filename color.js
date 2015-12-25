function myFunction(elmnt, clr) {
    elmnt.style.backgroundColor = clr;
}

function changeColorRed() {
    var elem = document.getElementById("button_device_Red");
  
    myFunction(elem,'#932320');
    var backColor = myFunction.bind(this, elem, '#d9534f');
    setTimeout(backColor,300);
}


function changeColorOrange() {
    var elem = document.getElementById("button_device_Orange");
  
    myFunction(elem,'#8d580c');
    var backColor = myFunction.bind(this, elem, '#f0ad4e');
    setTimeout(backColor,300);
}

function changeColorBlue() {
    var elem = document.getElementById("button_device_Blue");
  
    myFunction(elem,'#215078');
    var backColor = myFunction.bind(this, elem, '#337ab7');
    setTimeout(backColor,300);
}

function changeColorGreen() {
    var elem = document.getElementById("button_device_Green");
  
    myFunction(elem,'#367c36');
    var backColor = myFunction.bind(this, elem, '#5cb85c');
    setTimeout(backColor,300);
}