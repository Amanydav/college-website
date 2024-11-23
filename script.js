
function openEmail() {
    const recipient = "ak7519240651@gmail.com"; // Replace with recipient email
    const subject = "Hello!"; // Replace with your subject
    const body = "This is a test email sent using mailto."; // Replace with your message body

    // Open default mail client with pre-filled details
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

//home page

// Get DOM Elements
const profileImg = document.getElementById('profileImg');
const dropdownMenu = document.getElementById('dropdownMenu');
const logoutOption = document.getElementById('logoutOption');

// Toggle Dropdown Menu
profileImg.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Logout and Redirect
logoutOption.addEventListener('click', () => {
    window.location.href = '../index/index.html'; // Redirect to the index page
});

// Close Dropdown if Clicked Outside
document.addEventListener('click', (event) => {
    if (!profileImg.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});


