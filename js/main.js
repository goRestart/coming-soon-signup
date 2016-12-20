function isEmail(email) {
    return /(.+)@(.+){2,}\.(.+){2,}/.test(email)
}

$(function(ready){
    var email = $('#email');
    var signup = $('#signup');

    email.on('input', function() {
        emailValue = email.val();

        if ($.trim(emailValue).length > 0 && isEmail(emailValue)) {
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
