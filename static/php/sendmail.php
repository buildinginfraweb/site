<?php
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: OPTIONS, POST');
  date_default_timezone_set('Etc/GMT+3');

  require 'PHPMailer/PHPMailerAutoload.php';

  if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    echo var_dump($_SERVER['REQUEST_METHOD']);
    return;
  }

  $post = json_decode(file_get_contents('php://input'));

  $assunto = $post->assunto;
  $nomeRemetente = $post->nome;
  $emailRemetente = $post->email;
  $msg = "{$post->nome}: <br><br>{$post->mensagem} <br><br> telefone: {$post->telefone} / email: {$post->email}";

  $recipients = array(
    'contato@buildinginfra.com.br' => 'Contato Site'
  );

  try {
    $mail = new PHPMailer;
    // $mail->isSMTP();                                            // Set mailer to use SMTP
    // $mail->Host       = 'smtp1.example.com;smtp2.example.com';  // Specify main and backup SMTP servers
    // $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    // $mail->Username   = 'user@example.com';                     // SMTP username
    // $mail->Password   = 'secret';                               // SMTP password
    // $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    // $mail->Port       = 587;                                    // TCP port to connect to
    $mail->Debugoutput = 'html';
    $mail->setFrom('contato@buildinginfra.com.br', 'Contato Site');
    $mail->addReplyTo($emailRemetente, $nomeRemetente);
    foreach($recipients as $email => $name)
    {
      $mail->addAddress($email, $name);
    }
    $mail->Subject = utf8_decode($assunto);
    include 'email.php';
    $mail->msgHTML(utf8_decode($msgHTML));
    $mail->AltBody = 'Mensagem do site';

    $mail->send();
    echo 'true';
  } catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }
  
?>