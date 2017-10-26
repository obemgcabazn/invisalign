<?php
$username = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['phone']);

if ( $phone ) {

  $to = 'recept@fdc-vip.ru';
  // $from='invisalign@fdc-vip.ru';
  $subject = 'Заявка invisalign от ' . $username;

  $message = 'Клиент ' . $username . ', номер телефона: ' . $phone . ".";

  if($_POST['doctor'] != ''){
    echo 'доктор';

    $doctor = htmlspecialchars($_POST['doctor']);

    if((int)$doctor === 1) {
      $message .= " Хочет записаться к доктору Кассань";
    }
    if((int)$doctor === 2) {
      $message .= " Хочет записаться к доктору Морозовой";
    }

  }



  mail($to, $subject, $message, "From: invisalign@fdc-vip.ru\r\n" . 'Content-type: text/html; charset="utf-8"');
}