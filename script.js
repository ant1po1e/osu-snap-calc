function calculate() {
    const desiredSnap = document.getElementById('desired-snap').value;
    const baseSnap = document.getElementById('base-snap').value;
    const bpm = document.getElementById('bpm').value;

    if (bpm && desiredSnap && baseSnap) {
        const result = (bpm * desiredSnap) / baseSnap;
        document.getElementById('result').textContent = result.toFixed(2) + ' bpm';
    } else {
        alert('Please fill in all fields!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('#toggle-theme i').classList.replace('fa-sun', 'fa-moon');
    }
});

document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const icon = document.querySelector('#toggle-theme i');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    }
});
