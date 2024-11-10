// Get all toggle buttons
var toggleButtons = document.querySelectorAll(".toggleButton");
// Toggle function to hide or show the target section
function toggleSection(event) {
    var _a, _b;
    var button = event.currentTarget;
    var targetId = button.getAttribute("data-target");
    var section = document.getElementById(targetId);
    if (section) {
        var isVisible = section.style.display !== "none";
        if (isVisible) {
            section.style.display = "none";
            button.textContent = "Show ".concat((_a = section.querySelector("h2")) === null || _a === void 0 ? void 0 : _a.textContent);
        }
        else {
            section.style.display = "block";
            button.textContent = "Hide ".concat((_b = section.querySelector("h2")) === null || _b === void 0 ? void 0 : _b.textContent);
        }
    }
}
// Attach event listener to each button
toggleButtons.forEach(function (button) {
    button.addEventListener("click", toggleSection);
});
