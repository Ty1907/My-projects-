// 1. Console welcome
console.log("Welcome to Big_Ty Kicks Landing Page!");

// 2. Email subscription alert
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop form from actually submitting

  const email = form.querySelector('input').value;
  alert(`Thanks for subscribing, ${email}!`);
  
  form.reset();
});


// 3. Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});