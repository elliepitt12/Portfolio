// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or default to light theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        updateToggleButton('dark');
    } else {
        document.body.classList.remove('dark-theme');
        updateToggleButton('light');
    }
    
    // Create and add the toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'theme-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle dark mode');
    toggleButton.innerHTML = '🌙';
    document.body.appendChild(toggleButton);
    
    // Add click event listener
    toggleButton.addEventListener('click', function() {
        const isDark = document.body.classList.contains('dark-theme');
        
        if (isDark) {
            // Switch to light theme
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            updateToggleButton('light');
        } else {
            // Switch to dark theme
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            updateToggleButton('dark');
        }
    });
    
    // Function to update toggle button icon
    function updateToggleButton(theme) {
        const button = document.querySelector('.theme-toggle');
        if (button) {
            button.innerHTML = theme === 'dark' ? '☀️' : '🌙';
        }
    }
}); 