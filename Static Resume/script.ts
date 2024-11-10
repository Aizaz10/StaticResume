// Get all toggle buttons
const toggleButtons = document.querySelectorAll<HTMLButtonElement>(".toggleButton");

// Toggle function to hide or show the target section
function toggleSection(event: Event) {
  const button = event.currentTarget as HTMLButtonElement;
  const targetId = button.getAttribute("data-target");
  const section = document.getElementById(targetId!);

  if (section) {
    const isVisible = section.style.display !== "none";

    if (isVisible) {
      section.style.display = "none";
      button.textContent = `Show ${section.querySelector("h2")?.textContent}`;
    } else {
      section.style.display = "block";
      button.textContent = `Hide ${section.querySelector("h2")?.textContent}`;
    }
  }
}

// Attach event listener to each button
toggleButtons.forEach(button => {
  button.addEventListener("click", toggleSection);
});
