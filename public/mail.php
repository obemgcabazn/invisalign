<?php
$username = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['phone']);

if ( $phone ) {

  $to = 'office@spaceweb.studio';
  $from='invisalign@fdc-vip.ru';

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

  mail($to, $username, $message, 'From:'.$from);

}