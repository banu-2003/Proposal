var loveImageScale = 1.0; // Variable to keep track of image scale
var hannButtonFontSize = 16; // Variable to keep track of button font size

function changeTextAndSize() {
    var heeeText = document.getElementById("heeeText");
    var currentText = heeeText.innerText;
    var loveImage = document.getElementById("loveImage");
    var hannButton = document.getElementById("hannButton");

    if (currentText === "Heeeeeee") {
        heeeText.innerText = "New Text 1";
        loveImageScale += 0.2; // Increase image scale by 0.2
        hannButtonFontSize += 2; // Increase button font size by 2
    } else if (currentText === "New Text 1") {
        heeeText.innerText = "New Text 2";
        loveImageScale += 0.2; // Increase image scale by 0.2
        hannButtonFontSize += 2; // Increase button font size by 2
    } else {
        heeeText.innerText = "Heeeeeee";
        loveImageScale = 1.0; // Reset image scale
        hannButtonFontSize = 16; // Reset button font size
    }

    // Apply the changes to the love image and Hann Dhaa button
    loveImage.style.transform = "scale(" + loveImageScale + ")";
    hannButton.style.fontSize = hannButtonFontSize + "px";
}
