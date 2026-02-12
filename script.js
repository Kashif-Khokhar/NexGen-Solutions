// Sticky Navbar Effect
window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        nav.style.padding = "10px 8%";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
    } else {
        nav.style.padding = "20px 8%";
        nav.style.boxShadow = "none";
    }
};

// Simple Form Handing
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you, Kashif Ali! Your enterprise message has been sent.");
});