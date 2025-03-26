"use-strict";

// Select all navigation list items
navItems = document.querySelectorAll('.nav-item');

// Add click event listener to each list item
navItems.forEach((v, i, arr) => {
    const btn = v
    btn.addEventListener('click', () => {
        // Remove 'active' class from all list items
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // Add 'active' class to the clicked list item
        btn.classList.add('active');
    });
});


const herointro = "Hi, I'm Martin Gebiertas"


function showNav(){
    document.getElementById('nav-btn').classList.add('show')
}



