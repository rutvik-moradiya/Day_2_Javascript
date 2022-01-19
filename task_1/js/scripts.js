/* This is Function called on buttonOnClick ,
 which takes value of option and call the function*/

function onTap() {
    var select = document.getElementById('Operation'); //reterives value from options
    var value = select.options[select.selectedIndex].value;
    console.log(value);
    switch (value) {
        case "RED": //for RED
            alert("YOU HAVE CHOOSEN COLOR : RED");
            break;
        case "GREEN": //for GREEN
            alert("YOU HAVE CHOOSEN COLOR : GREEN");
            break;

        case "BLUE": //for BLUE
            alert("YOU HAVE CHOOSEN COLOR : BLUE");
            break;

        case "OTHER": //for OTHER
            alert("YOU HAVE CHOOSEN COLOR : OTHER");
            break;

    }
}