export default function toggleFunction() {
    var x = document.getElementById("navDrop");
    if (x.className.indexOf("ak-show") === -1) {
    x.className += "ak-show";
    } else {
    x.className = x.className.replace("ak-show", "");
    }
}

