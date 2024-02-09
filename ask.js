const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

noButton.addEventListener('click', function() {
    yesButton.classList.remove('grow'); // Remove the 'grow' class if it's already applied
    setTimeout(() => { 
        yesButton.classList.add('grow'); // Add the 'grow' class after a short delay to trigger the animation again
    }, 10);
    noButton.classList.add('clicked');
});
