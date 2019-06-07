
function OnClkCard() {
    var ele = event.target.parentNode;
    var attr = ele.getAttribute("class");
    if (attr == "close") {
        ele.setAttribute("class", "open");
    }
    else if (attr == "open") {
        ele.setAttribute("class", "close");
    }
}