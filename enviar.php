<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php
        $nome = $_POST['txtnome'];
        $email = $_POST['txtemail'];
        $msg = $_POST['txtmsg'];

        $corpo = "  <h2>Nome: </h2> $nome <br>
                    <h2>Email: </h2> $email <br>
                    <h2> Mensagem: </h2> $msg       ";

        $destinatario = "viniciusad@outlook.com.br";
        $assunto = "Mensagem do Site";

        $cabecalho = "MIME-Version: 1.0" . "\n";
        $cabecalho .= "Content-type: text/html; charset=UTF-8" . "\n";
        $cabecalho .= "To: Vinicius <$destinatario>";

        mail($destinatario, $assunto, $corpo, $cabecalho);
    ?>

    <script>
        alert('Mensagem enviada com sucesso!');
        location.href = "a20210304a_formularioPHP.html";
    </script>

</body>
</html>