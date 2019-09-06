<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd36b4b743bfdf6f183d9a479522b6052
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd36b4b743bfdf6f183d9a479522b6052::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd36b4b743bfdf6f183d9a479522b6052::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
