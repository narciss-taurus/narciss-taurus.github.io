<?php

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

if(isset($_POST['submit'])) { 

    // require 'vendor/autoload.php';
    // require 'vendor/phpmailer/phpmailer/src/SMTP.php';

    $name = $_POST['name']; // required
    $betreff = $_POST['betreff']; // required
    $email_from = $_POST['email']; // required
    $telephone = $_POST['telephone']; // not required
    $nachricht = $_POST['nachricht']; // required

    $mailTo = "ch@factura-ug.de";
    $headers = "From: ".$email_from;
    $txt = "Sie haben eine E-Mail von erhalten: ".$name.".\n\n".$message;

    // $mail = new PHPMailer(true);

    // try {
    //     //Server settings
    //     $mail->SMTPDebug = 0;
    //     $mail->isSMTP();                                            // Set mailer to use SMTP
    //     $mail->Host       = 'smtp.ionos.de';  						// Specify main and backup SMTP servers
    //     $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    //     $mail->Username   = 'ch@factura-pm.de';                     // SMTP username
    //     $mail->Password   = 'qayXSW789!!';                          // SMTP password
    //     $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
    //     $mail->Port       = 993;                                    // TCP port to connect to

    //     //Recipients
    //     $mail->setFrom($email_from, $name);
    //     $mail->addAddress('f.gozenc@narciss-taurus.de');
    //     //$mail->addAddress('ch@factura-ug.de');    

    //     // Content
    //     $mail->isHTML(false);                                  // Set email format to HTML
    //     $mail->Subject = $betreff;
    //     $mail->Body    = $nachricht;

    //     $mail->send();
    //     echo 'Message has been sent';
    // } catch (Exception $e) {
    //     echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    // }

    mail($mailTo, $betreff, $txt, $headers);
    header("Location: index.html?mailsent");
} else {
    echo 'Message not sent.';
}