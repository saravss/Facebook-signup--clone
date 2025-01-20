$(document).ready(function() {
    $("#signup").validate({
        rules:{
            fname:{
                required: true,
                minlength: 5
            },
            sname:{
                required: true,
                minlength: 1,
            },
            mobile:{
                required: true,
                minlength: 10,
            },
            password:{
                required: true,
                minlength: 8,
            },
            day:{
                required: true,
            },
            month:{
                required: true,
            },
            year:{
                required: true,
            },
        },
        messages:{
            fname:{
                required: "Please enter your first name",
            },
            sname:{
                required: "Please enter your Surname",
            },
            mobile:{
                required: "Please enter your valid Mobile number or email address",
            },
            password:{
                required: "Maximum length of password should be minimum 8 characters",
            },
        }
    })
});