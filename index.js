var typed = new Typed(".multiple-text",{
    strings: ["Aspiring Software Engineer", "Frontend Developer", "Fresher"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop: true
})

document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.navbar a');
    
    function onScroll() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        navbarLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                navbarLinks.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - document.querySelector('.header').offsetHeight,
            behavior: 'smooth'
        });
    }

    navbarLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    window.addEventListener('scroll', onScroll);
});


const form = document.querySelector('form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function sendEmail(){
    const bodymessage = `
        Full Name: ${fullName.value}<br>
        Email: ${email.value}<br> 
        Phone Number: ${phone.value}<br>
        Subject: ${subject.value}<br>
        Message: ${message.value}
    `;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "anubhavsingh8429627901@gmail.com",
        Password: "68BFF43784D52C88B4DA66EE2B6DA222D489",
        To: "anubhavsingh8429627901@gmail.com",
        From: "anubhavsingh8429627901@gmail.com",
        Subject: subject.value,
        Body: bodymessage
    }).then(
        response => {
            if (response == "OK") {
                alert("Message sent successfully!");
                form.reset();  // Reset the form on success
            } else {
                alert("Failed to send message. Please try again.");
            }
        }
    ).catch(error => {
        console.error("Error sending email:", error);
        alert("An error occurred. Please try again later.");
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});
