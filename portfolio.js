window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
$(document).ready(function() {
    $('.navbar-nav .nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
});
// Rotating Globe
const myTags = [

    'C', 'Python', 'Java', 'JavaScript',
    'CSS', 'HTML', 'Bootstrap', 'PHP', 'git',
    'Machine Learning', 'OpenCV',
    'MySQL',

];

var tagCloud = TagCloud('.content', myTags, {

    // radius in px
    radius: 250,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out 
    keep: true

});


// About Section
const boxes = document.querySelectorAll('.slide-box')
window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 5}deg)">${char}<span>`
).join("")

function sendMessage() {
    debugger
    // event.preventDefault(); // Prevent default behavior

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields before sending the message.");
        return;
    }

    let phoneNumber = "919897163744";

    let whatsappMessage = `Hello, I am ${name}.%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    let whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappLink, "_blank"); // Open WhatsApp in a new tab

};


function sendMessage() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill all the fields!");
        return;
    }

    const fullMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

    // Replace with your own WhatsApp number with country code
    const whatsappNumber = "919897163744";

    // WhatsApp Click to Chat Link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${fullMessage}`;

    // Open WhatsApp with pre-filled message
    window.open(whatsappLink, "_blank");
}