<?php

// define("WEBMASTER_EMAIL", 'themesflat@gmail.com');
//$address = "example@themeforest.net";
$address = "deepanshuthakur448@gmail.com";
if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$error = false;
$fields = array( 'name', 'email', 'message','subject', 'mobile' );

foreach ( $fields as $field ) {
	if ( empty($_POST[$field]) || trim($_POST[$field]) == '' )
		$error = true;
}

if ( !$error ) {

	$name = stripslashes($_POST['name']);
	$email = trim($_POST['email']);	
	$message = stripslashes($_POST['message']);
	$subject = stripslashes($_POST['subject']);
	$mobile = stripslashes($_POST['mobile']);	

	$e_subject = 'You\'ve been contacted by ' . $name .'('. $mobile .')'. '.';
	
	// Configuration option.
	// You can change this if you feel that you need to.
	// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.

	$e_body = "You have been contacted by: $name - $mobile  " . PHP_EOL . PHP_EOL;
	$e_reply = "E-mail: $email" . PHP_EOL . PHP_EOL;
	$e_content = "Message:\r\n$message" . PHP_EOL . PHP_EOL;
	$e_subject = "\r\nSubject: $subject" . PHP_EOL . PHP_EOL;
	$e_mobile = "\r\Mobile: $mobile" . PHP_EOL . PHP_EOL;

	$msg = wordwrap( $e_body . $e_reply , 70 );

	$headers = "From: $email" . PHP_EOL;
	$headers .= "Reply-To: $email" . PHP_EOL;
	$headers .= "Subject: $subject" . PHP_EOL;
	$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
	$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

	if(mail($address, $msg, $headers, $e_content  )) {

		// Email has sent successfully, echo a success page.
	
		echo 'Success';

	} else {

		echo 'ERROR!';

	}

}

?>