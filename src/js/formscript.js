$(document).ready(function() {
    $('#form').submit(function(){
        $.post("https://pr.all-service.in.ua/OpenModal/mail/telegram.php", $("#form").serialize(),  function(response) {
            $('#form').hide('slow');
            $('#post_form_success').html(response);
        });
        return false;
    });
});
