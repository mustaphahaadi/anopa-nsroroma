/**
 * Anopa Nsroroma Recruitment Agency
 * Main Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // Update Copyright Year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = String(new Date().getFullYear());
    }
});
