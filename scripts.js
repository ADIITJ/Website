const toggleButton = document.getElementById('toggle-button');
const linkedinLogo = document.getElementById('linkedin-logo');
const githubLogo = document.getElementById('github-logo');

let currentMode = 'light'; // Default mode

toggleButton.addEventListener('click', function() {
    currentMode = currentMode === 'light'? 'dark' : 'light';
    document.body.classList.toggle('dark-mode'); // Assuming you have a.dark-mode class for styling
    updateSocialLogosAndButtonText(currentMode);
});

function updateSocialLogosAndButtonText(mode) {
    if (mode === 'dark') {
        linkedinLogo.src = 'linkedin_dark.png';
        githubLogo.src = 'github_dark.png';
        toggleButton.textContent = 'Light'; // Change button text to Light Mode
    } else {
        linkedinLogo.src = 'linkedin_light.png';
        githubLogo.src = 'github_light.png';
        toggleButton.textContent = 'Dark'; // Change button text to Dark Mode
    }
}
