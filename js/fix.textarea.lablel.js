const textarea = document.getElementById("subject");
const label = document.querySelector('label[for="subject"]');

// Function to check if the textarea is empty or not
function checkTextareaContent() {
  if (textarea.value.trim() !== "") {
    label.style.color = "transparent"; // Keep label transparent if there's content
  } else {
    label.style.color = "black"; // Restore label color if textarea is empty
  }
}

// When textarea gains focus, make label transparent
textarea.addEventListener("focus", () => {
  label.style.color = "transparent"; // Label turns transparent when focused
});

// When textarea loses focus, check content and adjust label color
textarea.addEventListener("blur", () => {
  checkTextareaContent(); // Check if textarea has content when it loses focus
});

// When the user types, check if content exists and adjust label color accordingly
textarea.addEventListener("input", () => {
  checkTextareaContent(); // Check content as the user types
});
