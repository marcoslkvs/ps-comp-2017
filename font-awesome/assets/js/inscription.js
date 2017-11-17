$('.datepicker').pickadate({
    selectMonths: true, 
    selectYears: 15, 
    today: 'Hoje',
    clear: 'Limpar',
    close: 'Ok',
    closeOnSelect: false 
  });


  $("#form-inscription").on('submit', function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var mail = $("#mail").val();
    var age = $("#age").val();
    var registration = $("#registration").val();
    var course = $("#course").val();
    var curriculo = $("#file").value;

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSd9G1OtbdXwf9LLZEgGqdRGkcS2rXwVgPdl_cjyRwPIdxLy8Q/formResponse",
        data: {
            "entry.754530149": name,
            'entry.1000653769': age,
            'entry.1519506784': mail,
            'entry.1698312504': course,
            'entry.854732818': registration
        },
        type: "POST",
        dataType: "xml",
        statusCode: 
        {
            0: function () {
                $("input").val("");
                alert("ok");
                iziToast.success({
                    title: 'Sucesso!',
                    message: 'Sua inscrição foi feita com sucesso!',
                    position: 'bottomRight',
                });
            }
        },
        200: function () {
            $("input").val("");
            iziToast.success({
                title: 'Sucesso!',
                message: 'Sua inscrição foi feita com sucesso! ',
                position: 'bottomRight',
            });
            $.ajax({
                type: "POST",
                url: "assets/php/envio_email.php",
                data: {
                    inscrito: name,
                    email: mail,
                    arquivo: curriculo
                }
            });
        }
        
    }
    );
});	