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