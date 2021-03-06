$(function() {

    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
        $("#login-form").validate({
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                }
            }
        });
    });

    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
        $(function() {
            $("#register-form").validate({
                rules: {
                    password: {
                        required: true,
                        minlength: 6
                    },
                    confirmpassword: {
                        required: true,
                        equalTo: "#first-password"
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    username: {
                        minlength: 6
                    }
                }
            });
        });
    });
});