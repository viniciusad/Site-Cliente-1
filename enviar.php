<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contato</title>
</head>
<body>
        <?php
                $nome = $_POST['txtnome'];
                $email = $_POST['txtemail'];
                $msg = $_POST['txtmsg'];

                $corpo = "  <h2>Nome: </h2> $nome <br>
                        <h2>Email: </h2> $email <br>
                        <p> Mensagem: </p> $msg       ";

                $destinatario = "viniciusad@outlook.com.br";
                $assunto = "Mensagem do Site";

                $cabecalho = "MIME-Version: 1.0" . "\n";
                $cabecalho .= "Content-type: text/html; charset=UTF-8" . "\n";
                $cabecalho .= "To: Vinicius <$destinatario>";

                mail($destinatario, $assunto, $corpo, $cabecalho);
        ?>
</body>
</html>
