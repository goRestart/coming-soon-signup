<?php

class EmailSender {
    public function send($email) {
        $from = new SendGrid\Email(null, 'hello@restartapp.com');
        $subject = 'Lorem Ipsum';
        $to = new SendGrid\Email(null, $email);
        $content = new SendGrid\Content("text/plain", "Hello, Email!");
        $mail = new SendGrid\Mail($from, $subject, $to, $content);

        $apiKey = getenv('SENDGRID_API_KEY');
        $sg = new \SendGrid($apiKey);

        return $sg->client->mail()->send()->post($mail);
    }
}
