$(document).ready(function(){
    $('#ex1').zoom();

    $(".thumb").each(function(index, element) {
        if (index === 0) {
            $(element).addClass("selected");
        }
    });

    $(".thumb").on("click", function(event) {
        $(".selected").removeClass("selected");
        $(".zoom img").attr("src", $(this).attr("src"));
        $(this).addClass("selected");
    });

    $('select').on('change', function(event) {
        alert(this.value);
        // update price
    });

    $("#checkout").on("click", function(event) {
        var email = 'mmaxwellmade@gmail.com';
        var subject = 'Order Request';
        var body = '[{serial:2023.001, quantity: 1}]';
        document.location = "mailto:"+email+"?subject="+subject+"&body="+body;
    });
});

// https://www.w3schools.com/js/js_cookies.asp
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

// automatically-open-default-email-client-and-pre-populate-content
// https://stackoverflow.com/questions/13231125
