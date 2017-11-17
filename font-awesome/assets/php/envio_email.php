<?php

require_once('../PHPMailer/class.phpmailer.php');
require_once("Model/Mensagem.php");

$name = $_POST['nome'];
$mensagem = new Mensagem($name,$_POST['mail']);
$arquivo = $_FILES["arquivo"];

$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "smtp.gmail.com";
$mail->Port = 465; // or 587
$mail->IsHTML(true);
$mail->Username = "marcoslucsrios@gmail.com";
$mail->Password = "M@56758012";
$mail->SetFrom("marcoslucsrios@gmail.com");
$mail->Subject = "PS - Curriculo " . $name;
$mail->Body = $mensagem->getCorpoMensagem();
$mail->AddAddress("marcoslucsrios@gmail.com");
$mail->AddAttachment($arquivo['tmp_name'],$arquivo['name']);

if(!$mail->Send()) {
	echo "nao enviado";
} else {
	$mail->clearAddresses();
	$mail->Subject = "Recebemos sua mensagem!- eduAnalytics";
	$mail->Body = "Olá ". $mensagem->getNome() . "! Recebemos sua mensagem com sucesso! Em breve retornaremos!";
	$mail->AddAddress($mensagem->getEmail());
	$mail->AddAttachment($arquivo['tmp_name'],$arquivo['name']);
	$mail->Send();
    echo "enviado";
}

?>