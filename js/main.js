$(function(ready){
    var email = $('#email');
    var signup = $('#signup');

    email.on('input', function() {
        if ($.trim(email.val()).length > 0) {
            signup.removeClass("disabled");
        } else {
            signup.addClass("disabled");
        }
    });

    signup.click(function() {
        $.ajax({
            url: 'api/signup.php',
            type: 'post',
            data: {email: email.val()}
        }).done(function(data) {

        });
    });
});
