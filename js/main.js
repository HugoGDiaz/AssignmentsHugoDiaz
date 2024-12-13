const myModal = document.querySelector('.overlay');

window.addEventListener("load", function (){
    setTimeout(function open(event){
        myModal.style.display = "block";
    } , 2000);
});

document.getElementById("close").addEventListener("click", function (){
    myModal.style.display = "none";
})





// const toggleButtons = document.querySelectorAll('.accordion-item');

// toggleButtons.forEach(button => {
//     button.addEventListener('click', function(event) {
//         event.stopPropagation();
//         this.nextElementSibling.classList.toggle('expanded');
//     });
//});



const toggleButtons = document.querySelectorAll('.accordion-item'); 

toggleButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation();
        
        const accordionContent = this.querySelector('.accordion-content');
        
        if (accordionContent.classList.contains('collapsed')) {
            accordionContent.classList.remove('collapsed');
            accordionContent.classList.add('expanded');
        } else {
            accordionContent.classList.remove('expanded');
            accordionContent.classList.add('collapsed');
        }
    });
});






