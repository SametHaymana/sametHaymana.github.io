$(document).ready(function() {
    // Prevent default action for thumbnail links
    $("#image_list a").click(function(event) {
        event.preventDefault();  

        var newImageUrl = $(this).attr('href'); 
        var newCaption = $(this).attr('title'); 

        // Fade out the current image and caption over one second
        $('#image').fadeOut(1000, function() {
			
            // Update the image source and caption text inside the callback
            $('#image').attr('src', newImageUrl).fadeIn(1000);
            $('#caption').text(newCaption).fadeIn(1000);
        });
    });
});
