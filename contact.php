<?php
use PHPMailer\PHPMailer\PHPMailer;
require_once __DIR__ . '/vendor/autoload.php';

$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
    $name = $_POST['name'];
    $phone = $_POST['phone'];


    if (empty($name)) {
        $errors[] = 'Name is empty';
    }

    if (empty($phone)) {
        $errors[] = 'Email is empty';
//    } else if (!filter_var($phone, FILTER_VALIDATE_EMAIL)) {
//        $errors[] = 'Email is invalid';
    }


    if (!empty($errors)) {
        $allErrors = join('<br/>', $errors);
        $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
        var_dump($allErrors);


    } else {
        $mail = new PHPMailer();
        $mail->CharSet="utf-8";
        $mail->isSMTP();
        $mail->Host = 'smtp.mail.ru';
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = true;
        $mail->Username = 'promo.olamavto.uz@mail.ru';
        $mail->Password = 'M7x19xfsXKgqspGgyBr9';
        $mail->Port = 587;
        $mail->setFrom('promo.olamavto.uz@mail.ru', 'from');
        $mail->addAddress('23anohinnikolay23@gmail.com', 'to');
        $mail->Subject = 'Заявка с сайта promo.olamavto.uz на звонок менеджеру';

        // Enable HTML if needed
        $mail->isHTML(true);
        $bodyParagraphs = ["Имя: $name", "Телефон: $phone"];
        $body = join('<br />', $bodyParagraphs);
        $mail->Body = $body;
//        echo $body;
        session_start();
        if($mail->send()){
            $successMessage = 'Thank you';
            $_SESSION['success_message'] = $successMessage;
            header('Location: index.php');
        } else {
            $errorMessage = 'Oops, something went wrong. Please try again later';
            $_SESSION['error_message'] = $errorMessage;
            header('Location: index.php');
        }

    }
}


 