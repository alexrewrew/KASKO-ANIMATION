<?php
function mime_header_encode($str, $data_charset = '', $send_charset = '') {
    if($data_charset != $send_charset) {
        $str = iconv($data_charset, $send_charset, $str);
    }
    return '=?' . $send_charset . '?B?' . base64_encode($str) . '?=';
}


function send_mime_mail($name_from, $email_from, $name_to, $email_to, $data_charset, $send_charset, $subject, $body){
    $to = mime_header_encode($name_to, $data_charset, $send_charset).' <' . $email_to . '>';
    $subject = mime_header_encode($subject, $data_charset, $send_charset);
    $from =  mime_header_encode($name_from, $data_charset, $send_charset).' <' . $email_from . '>';
    if($data_charset != $send_charset) {
        $body = iconv($data_charset, $send_charset, $body);
    }
    $headers = "From: $from\r\n";
    $headers .= "Content-type: text/html; charset=$send_charset\r\n";
    return mail($to, $subject, $body, $headers);
}

if(!empty($_POST)){
    $arUsers = array(
        array(
            "NAME"=>"Арсенал Страхування",
            "EMAIL"=>"maxim@volta.one"//change email here
        )
    );

    if ($_POST['zastava'] === 'on') {
        $_POST['zastava'] = 'Так';
    } else {
        $_POST['zastava'] = 'Ні';
    }

    if ($_POST['newauto'] === 'on') {
        $_POST['newauto'] = 'Так';
    } else {
        $_POST['newauto'] = 'Ні';
    }

    if ($_POST['dog'] === 'on') {
        $_POST['dog'] = 'Так';
    } else {
        $_POST['dog'] = 'Ні';
    }

    $message = '';
    $message .= '<b>Ім\'я: </b>'.$_POST['name'].'<br/>';
    $message .= '<b>Телефон: </b>380'. $_POST['tel'].'<br/>';
    $message .= '<b>Реєстрація: </b>'.$_POST['registration'].'<br/>';
    $message .= '<b>У заставі: </b>'.$_POST['zastava'].'<br/>';
    $message .= '<b>Новий автомобіль: </b>'.$_POST['newauto'].'<br/>';
    $message .= '<b>Пролонгація договору: </b>'.$_POST['dog'].'<br/>';

    if (isset($message) && !empty($message)) {
        $send = true;
        foreach ($arUsers as $Item){
            $send = send_mime_mail($_POST['name'], "", $Item['NAME'], $Item['EMAIL'], 'utf-8', 'utf-8', 'Форма замовлення', $message);
        }
        echo $send;
        return;
    } else {
        return false;
    }
}
?>
