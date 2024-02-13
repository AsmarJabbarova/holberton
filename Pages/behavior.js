
var thumbnailElement = document.getElementById("smart_thumbnail");
thumbnailElement.addEventListener("click", displayImage);

function displayImage() {
    if (thumbnailElement.className == "small") {
        thumbnailElement.className = "";
    }
    else {
        thumbnailElement.className = "small";
    }
}

