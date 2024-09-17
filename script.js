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

// Loop for each link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        navLinks.forEach(item => item.classList.remove('text-[#0ef]' ));

        // Add 'active' class to the clicked link
        this.classList.add('text-[#0ef]'); 
    });
});
