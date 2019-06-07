var xmlhttp = new XMLHttpRequest();

window.onload = function () {
    var url = "./header.html";
    xmlhttp.onreadystatechange = state_Change;
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
}

function state_Change() {
    // 4 = "loaded"  200 = "OK"
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    document.getElementsByTagName("header")[0].innerHTML = xmlhttp.responseText;

    // 修改当前页面导航样式
    var url = document.URL;
    url = url.substr(url.length-10,5)

    var links = document.getElementsByTagName("header")[0].getElementsByTagName("a");
    for(var i = 0;i < links.length;i ++){
        var href = links[i].getAttribute("href");
        href = href.substr(href.length-10,5);
        if(url == href) {
        links[i].setAttribute("class","current")
        break;
        }
    }
    }
}