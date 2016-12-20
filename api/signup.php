<?php

require_once '../vendor/autoload.php';
require_once 'EmailStorage.php';
require_once 'EmailSender.php';

$email = trim($_POST["email"]);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit();
}

$dbConfiguration = parse_url($_ENV["DATABASE_URL"]);

$storage = new EmailStorage();
$storage->connect(
    $dbConfiguration["user"],
    $dbConfiguration["pass"],
    $dbConfiguration["host"],
    $dbConfiguration["path"]
);

if ($storage->exists($email)) {
    exit();
}

$success = $storage->store($email);

$emailSender = new EmailSender();
$emailSender->send($email);
