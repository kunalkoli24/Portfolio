const typingAnimationElement = document.getElementById('typing-animation');
const typingtext = [
    'FullStack Web-Developer',
    'Figma Designer',
]

function Animation(text){
    for (let i=0; i < text.length; i++){
        setTimeout(() =>{
            typingAnimationElement.textContent +=text[i];
        },i * 100);
    }


    setTimeout(() =>{
        typingAnimationElement.textContent = '';
        Animation(typingtext[(typingtext.indexOf(text) + 1) % typingtext.length]);

    }, text.length * 150);
}
Animation(typingtext[0]);

// Active navbar links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
// Remove 'active' class from all links
        navLinks.forEach(item => item.classList.remove('text-[#0ef]' ));
        this.classList.add('text-[#0ef]'); 
    });
});

// technical skill
function updateTechnicalSkills() {
    const techProgressBars = document.querySelectorAll('.tech-bars .progress-line span');

    techProgressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage'); 
        bar.style.width = percentage; 
    });
}

document.addEventListener('DOMContentLoaded', updateTechnicalSkills);


// proff skill 

function updateProgressBars() {
    const progressBars = document.querySelectorAll('.prof-progress-line span');

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');  
        bar.style.width = percentage;  
    });
}
document.addEventListener('DOMContentLoaded', updateProgressBars);

// form operation code

document.addEventListener("DOMContentLoaded", () => {
    if (typeof emailjs === "undefined") {
        console.error("EmailJS library is not loaded. Ensure the script is included correctly.");
        return;
    }

    console.log("EmailJS loaded successfully:", emailjs);
    emailjs.init("7U3KxEq4BcMAC8yck");

    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("gmail").value;
        const note = document.getElementById("note").value;

        const formData = {
            from_name: name,
            from_email: email,
            note: note,
        };

        emailjs.send("service_e8e1h86", "template_vbn2qo6", formData)
            .then(
                (response) => {
                    alert("Message sent successfully!");
                    console.log("SUCCESS!", response.status, response.text);
                    document.getElementById("contact-form").reset();
                },
                (error) => {
                    alert("Failed to send message. Please try again.");
                    console.error("FAILED...", error);
                }
            )
            .catch((error) => {
                console.error("Error in EmailJS send:", error);
            });
    });
});
