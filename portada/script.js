document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check for previously saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark-mode") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true; 
    } else {
        toggleSwitch.checked = false; 
    }

    toggleSwitch.addEventListener("change", () => {
        const isDarkMode = toggleSwitch.checked;
        body.classList.toggle("dark-mode", isDarkMode);

        // Save the theme preference
        localStorage.setItem("theme", isDarkMode ? "dark-mode" : "");
    });
});
