$(document).ready(function() {
    $('.read-more-btn').on('click', function() {  //onclick event (Adds event)
        var $readMoreText = $(this).prev('.text').find('.read-more-text');
        $readMoreText.slideToggle(); ///Hide/Show
        //callback function
        $(this).text(function(_, currentText) {   //callback
            return currentText === 'Read More...' ? 'Read Less' : 'Read More...';
        });
    });
});




//audio files(2) dhe select
document.getElementById('audioSelect').addEventListener('change', function() {
    var selectedAudio = this.value;
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = selectedAudio; //DOM element
    audioPlayer.load(); // Load the selected audio file (DOM element)
    audioPlayer.play(); // Play the audio (DOM element)
});
