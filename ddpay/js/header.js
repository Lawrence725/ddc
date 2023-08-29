// Load Header
const xhr = new XMLHttpRequest();
xhr.open("GET", "./header.html", true);
xhr.send();
xhr.onreadystatechange=function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        document.querySelectorAll("#header")[0].innerHTML = xhr.responseText; }};

// Popup close
function popClose(e) {
    if (e.classList.contains('pop'))
        window.onclick  = function(event) {
            if (event.target == e) {
                e.children[0].style.animationName = "popdown";
                setTimeout(function(){
                    e.style.display = "none";
                    e.children[0].style.animationName = "popup";
                }, 500); }}
    else if (!(e.classList.contains('pop__body'))) {
        e.closest('.pop').children[0].style.animationName = "popdown";
        setTimeout(function(){
            e.closest('.pop').style.display = "none";
            e.closest('.pop').children[0].style.animationName = "popup";
        }, 500); }}