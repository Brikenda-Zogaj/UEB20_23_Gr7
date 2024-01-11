
$(document).ready(function() {
    $('.read-more-btn').on('click', function() {  
        var $readMoreText = $(this).prev('.text').find('.read-more-text');
        $readMoreText.slideToggle(); 
        
        $(this).text(function(_, currentText) {  
            return currentText === 'Read More...' ? 'Read Less' : 'Read More...';
        });
    });
});





document.getElementById('audioSelect').addEventListener('change', function() {
    var selectedAudio = this.value;
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = selectedAudio; //DOM element
    audioPlayer.load(); // Load the selected audio file (DOM element)
    audioPlayer.play(); // Play the audio (DOM element)
});



document.getElementById("ndryshoTekstin").onclick = function() {
    this.innerHTML = "Teksti është ndryshuar!";
};



function ndryshoNgjyren() {
    document.body.style.backgroundColor = " rgba(187, 187, 193,0.2)";
}
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.classList.add('new-class'); //Add class
});