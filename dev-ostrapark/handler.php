<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/*
Tested working with PHP5.4 and above (including PHP 7 )

 */
require_once './vendor/autoload.php';


use FormGuide\Handlx\FormHandler;


$pp = new FormHandler(); 

/* use SMTP*/

$mailer = $pp->getMailer();

//Using Amazon AWS SES SMTP account
$mailer->IsSMTP();
$mailer->SMTPAuth   = true;
$mailer->SMTPSecure = "tls";
$mailer->Host       = "w018aa9c.kasserver.com";
$mailer->Username   = "w018aa9c";
$mailer->Password   = "nibelungeN+852";

$mailer->setFrom('hallo@goldendoor.group', 'Form von Ostrapark Baustellenseite');

/* validator*/

$validator = $pp->getValidator();
$validator->fields(['location','vorname','nachname', 'email','telefon'])->areRequired()->maxLength(50);
$validator->field('angaben')->maxLength(6000);
$validator->field('email')->isEmail();

// $pp->requireReCaptcha();
// $pp->getReCaptcha()->initSecretKey('6LejFI8UAAAAAEJm8Dlam0If-F5Uv3KkiLJAgKBX');

$pp->sendEmailTo('hallo@goldendoor.group');
// $pp->sendEmailTo('admin@narciss-taurus.de');

echo $pp->process($_POST);