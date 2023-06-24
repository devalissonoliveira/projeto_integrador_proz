let count = 1;
document.getElementById("slide1").checked = true;

setInterval(function () {
    nextImage();
}, 3000)

function nextImage() {
    count++;
    if (count > 5) {
        count = 1;
    }

    document.getElementById("slide" + count).checked = true;
}