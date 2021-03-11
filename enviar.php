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