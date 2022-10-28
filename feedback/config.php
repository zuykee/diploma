<?
  
  const NAMEISREQUIRED = true;
  const MSGSNAMEERROR = "Поле обязательно для заполнения";
 
  
  const TELISREQUIRED = true;
  const MSGSTELERROR = "Поле обязательно для заполнения";
 
  
  const EMAILISREQUIRED = true;
  const MSGSEMAILERROR = "Поле обязательно для заполнения";
  const MSGSEMAILINCORRECT = "Некорректный почтовый адрес";
 
  
  const TEXTISREQUIRED = true;
  const MSGSTEXTERROR = "Поле обязательно для заполнения";
 
  
  const AGGREMENTISREQUIRED = true;
  const MSGSAGGREMENTERROR = "Поле обязательно для заполнения"; 

  const TIMEISREQUIRED = true;
  const MSGSTIMEERROR = "Поле обязательно для заполнения";
 
  
  const MSGSSUCCESS = "Сообщение успешно отправлено";
 
  
 
    require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/phpmailer/smtp.php');
    const HOST = 'ssl://mail.nic.ru';
    const LOGIN = 'postmaster@zuykeedev.ru';
    const PASS = '1lp3$Cat0r3';
    const PORT = '465';
 
  
  const SENDER = 'postmaster@zuykeedev.ru';
   
  
  const CATCHER = 'zuykee.bone@gmail.com';
   
  
  const SUBJECT = 'Заявка с сайта';
   
  
  const CHARSET = 'UTF-8';
