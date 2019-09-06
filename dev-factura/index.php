<?php
/**
 * PHPMailer simple contact form example.
 * If you want to accept and send uploads in your form, look at the send_file_upload example.
 */
//Import the PHPMailer class into the global namespace
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\ntlm_sasl_client;

require './vendor/autoload.php';
require './vendor/phpmailer/phpmailer/src/ntlm_sasl_client.php';

if (array_key_exists('name', $_POST)) {
    $err = false;
    $msg = '';
    $email = '';
    //Apply some basic validation and filtering to the subject
    if (array_key_exists('betreff', $_POST)) {
        $betreff = substr(strip_tags($_POST['betreff']), 0, 255);
    } else {
        $betreff = 'Kein betreff!';
    }
    //Apply some basic validation and filtering to the query
    if (array_key_exists('nachricht', $_POST)) {
        //Limit length and strip HTML tags
        $nachricht = substr(strip_tags($_POST['nachricht']), 0, 16384);
    } else {
        $nachricht = '';
        $msg = 'Kein nachricht!';
        $err = true;
    }
    //Apply some basic validation and filtering to the name
    if (array_key_exists('name', $_POST)) {
        //Limit length and strip HTML tags
        $name = substr(strip_tags($_POST['name']), 0, 255);
    } else {
        $name = '';
    }
    //Validate to address
    //Never allow arbitrary input for the 'to' address as it will turn your form into a spam gateway!
    //Substitute appropriate addresses from your own domain, or simply use a single, fixed address

    // $to = 'mail@factura-pm.de';
    $to = 'mail@factura-pm.de';

    

    //Make sure the address they provided is valid before trying to use it
    if (array_key_exists('email', $_POST) and PHPMailer::validateAddress($_POST['email'])) {
        $email = $_POST['email'];
    } else {
        $msg .= "Error: invalid email address provided";
        $err = true;
    }
    if (!$err) {
        $mail = new PHPMailer;
        
        $mail->isSMTP();
        // $mail->Mailer = "SMTP";
        // $mail->SMTPAutoTLS      = true;
        // $mail->isSendMail();
        // $mail->Host             = 'smtprelaypool.ispgateway.de';
        // $mail->IsSendmail();
        $mail->SMTPDebug        = 2;
        $mail->SMTPSecure       = 'TLS';
        $mail->Host             = 'smtp.ionos.de';
        $mail->Port             = 587;
        $mail->SMTPAuth         = true;

        // $mail->Encoding         = 'base64';
        // $mail->Port             = 587;
        // $mail->SMTPSecure       = 'TLS';

        $mail->Username         = 'mail@factura-pm.de'; 
        // $mail->Password         = '1rk3n84L>h8c';
        $mail->Password         = 'qayXSW789!!';

        $mail->setFrom('mail@factura-pm.de', (empty($name) ? 'Contact form' : $name));
        $mail->addAddress($to);
        $mail->addReplyTo($email, $name);
        $mail->Subject = 'Contact form: ' . $betreff;
        $mail->Body = "Contact form submission\n\n" . $nachricht;

        if (!$mail->send()) {
            $msg .= "Mailer Error: " . $mail->ErrorInfo;
        } else {
            $msg .= "Message sent!";
        }
    }
} ?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="de">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="x-ua-compatible" content="IE=11">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Querdenken Nach Plan">
    <meta name="keywords" content="factura, querdenken nach plan">
    <meta property="og:title" content="Factura ">
    <meta property="og:image" content="images/logo.png">
    <meta property="og:description" content="Querdenken Nach Plan">
    <!-- <link rel="shortcut icon" href="favicon.png" type="image/x-icon"> -->
    <title>Factura | Querdenken Nach Plan</title>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <!--[if IE 9]>
		<link href="css/bootstrap-ie9.css" rel="stylesheet">
	<![endif]-->
    <!--[if lte IE 8]>
		<link href="css/bootstrap-ie8.css" rel="stylesheet">
	<![endif]-->
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" href="css/media.css"/>
    <link rel="stylesheet" type="text/css" href="css/ieonly.css"/>
</head>

<body>

    <header>
        <nav class="navbar navbar-expand-lg bg-white">
            <a class="navbar-brand m-0 " href="index.html">
            <img src="images/logo.png" alt="logo" class="logo">
            </a>
            <button class="invisible navbar-toggler p-0 navbar-toggler-right border-0" type="button">
                <a href="#" class="icon" id="menuToggler">
                    <div onclick="toggleAnim(this)">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                </a>
            </button>
            <div class="collapse order-lg-2 navbar-collapse" id="navbar__content">
                <hr class="m-0 d-lg-none">
                <ul class="navbar-nav d-flex w-100 justify-content-end pb-4 pb-lg-0">
                    <li class="nav-item pl-5 py-1 text-right">
                        <a class="nav-link text--blue invisible" href="unternehmen.html">Datenschutzbestimmungen</a>
                    </li>
                    <li class="nav-item pl-5 py-1 text-right">
                        <a class="nav-link text--blue"
                            href="https://austausch.projektdat.de/login">FACTURA-CLOUD</a>
                    </li>
                    <!-- <li class="nav-item pl-5 py-1 text-right">
                        <a class="nav-link" href="kontakt/">Kontakt</a>
                    </li>
                    <li class="nav-item pl-5 py-1 langSwitch text-right">
                        <a class="nav-link d-inline-block" id="langSwitchDE" href="#">DE</a>
                        <span class="text-white px-2 px-lg-0">|</span>
                        <a class="nav-link d-inline-block" id="langSwitchEN" href="#">EN</a>
                    </li> -->
                </ul>
            </div>
        </nav>
    </header>

    <main>


        <section class="hero">
            <div class="container-fluid p-0">
                <div class="row m-0">
                    <div class="col-6 col-md-5">
                        <div class="row h-100 align-items-center">
                            <div class="col-1 col-md-2 col-xl-6"></div>
                            <div class="col-11 col-md-8 col-xl-5">
                                <p> <img src="images/logo.png" alt="logo" class="hero__logo d-none d-md-block">
                                    <br><br>
                                    Projektmanagement UG<br><br>
                                    Bremer Straße 20<br>
                                    01067 Dresden, Deutschland<br>
                                    <span class="text--red">T</span>&nbsp;+49.351.475.910.04
                                </p>
                            </div>
                            <div class="col-md-2 col-xl-1"></div>
                        </div>
                        
                    </div>
                    <div class="col-6  col-md-7 overflow-hidden p-0">
                        <iframe class="maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.5484811451897!2d13.698607351727874!3d51.061424450932236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf9a08b13681%3A0xaf24085013e673c4!2sBremer+Str.+20%2C+01067+Dresden!5e0!3m2!1sen!2sde!4v1563459433952!5m2!1sen!2sde"
                            width="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
                        <div class="triangle"></div>
                    </div>
                </div>
            </div>
        </section>


        <section class="slogan bg--blue text-white ">
            <div class="container p-3 p-md-2 p-lg-0">
                <div class="row py-5">
                    <div class="col-12 text-center">
                        <p>
                            <h2>COMING SOON!</h2> <br>
                            Im Moment arbeiten wir noch an unserer neuen Webseite. <br>
                            Bald wird unser Webangebot für Sie zur Verfügung stehen. <br><br>
                            Bis dahin: Schreiben Sie uns doch einfach eine E-Mail!
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <section class="kontakt p-2 p-lg-5">
            <div class="container p-2 p-lg-5">
                <div class="row py-5">
                    <div class="col-12 py-5">
                    <?php if (empty($msg)) { ?>
                        <form role="form" method="post" id="reused_form">
                            <div class="form-group">
                                <input type="text" required class="form-control" id="name" name="name">
                                <label for="name">Name</label>
                            </div>
                            <div class="form-group">
                                <input type="email" required class="form-control" id="email" name="email" >
                                <label for="email">E-Mail</label>
                            </div>
                            <div class="form-group">
                                <input type="tel" class="form-control" id="telefon" name="telefon" >
                                <label for="telefon">Telefon</label>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="betreff" name="betreff" >
                                <label for="betreff">Betreff</label>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" required id="nachricht" name="nachricht" rows="6"></textarea>
                                <label for="exampleFormControlTextarea1">Ihre Nachricht</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" required class="form-check-input">
                                <label class="form-check-label">
                                    <small class="form-text">
                                        Ich willige darin ein, dass Faktura Projektmanagement UG die von mir
                                        überreichten Informationen und Kontaktdaten dazu verwendet, um mit mir
                                        anlässlich einer Kontaktaufnahme in Verbindung zu treten, hierüber zu
                                        kommunizieren und meine Anmeldung abzuwickeln. Dies gilt insbesondere für die
                                        Verwendung der E-Mail-Adresse und der Telefonnummer zum vorgenannten Zweck. Die
                                        <a href="#" class="text--red">Datenschutzerklärung</a> kann hier eingesehen werden.
                                    </small>
                                </label>
                            </div>
                            <button type="submit" id="submit" name="submit" class="btn btn-primary bg--red border-0 mt-4">Absenden</button>
                            <div class="text-center" id="success_message"
                                style="width:100%; height:100%; display:none; margin-bottom: 100px;">
                                <p>Ihre Anfrage wurde erfolgreich versendet. Vielen Dank!
                                    <br /> Wir setzen uns schnellstmöglich mit Ihnen in Verbindung.</p>
                                <br />
                                <br />
                                <a href="index.html" class="btn">&larr; Zurück</a>
                            </div>
                            <div id="error_message" style="width:100%; display:none; ">
                                <p>Beim Senden der Anfrage ist ein Fehler aufgetreten</p>
                            </div>
                        </form>
                    <?php } else {
                        echo $msg;
                    } ?>    
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer bg--blue m-0">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <ul class="d-flex w-100 justify-content-between justify-content-md-end pl-0  pb-4 pb-lg-0">
                        <li class="nav-item d-inline-block pl-md-5 py-1 text-right">
                            <a class="nav-link text-white invisible" href="datenschutz/">Datenschutzbestimmungen</a>
                        </li>
                        <li class="nav-item d-inline-block pl-md-5 py-1 text-right">
                            <a class="nav-link text-white invisible" href="impressum/">Impressum</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!--[if IE 9]>
        <script src="js/jquery-1.12.4.min.js"></script>
        <script src="js/bootstrap-ie9.js"></script>
	<![endif]-->
    <!--[if lte IE 8]>
        <script src="js/jquery-1.12.4.min.js"></script>
		<script src="js/html5shiv.min.js"></script>
		<script src="js/bootstrap-ie8.js"></script>
	<![endif]-->
    <script src="js/app.js"></script>
</body>

</html>
