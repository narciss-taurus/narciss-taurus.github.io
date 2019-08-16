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

$validator = $pp->getValidator();
$validator->fields(['location','vorname','nachname', 'email','telefon'])->areRequired()->maxLength(50);
$validator->field('angaben')->maxLength(6000);
$validator->field('email')->isEmail();

$pp->requireReCaptcha();
$pp->getReCaptcha()->initSecretKey('6LejFI8UAAAAAEJm8Dlam0If-F5Uv3KkiLJAgKBX');

// $pp->sendEmailTo('hallo@goldendoor.group');
$pp->sendEmailTo('admin@narciss-taurus.de');

echo $pp->process($_POST);