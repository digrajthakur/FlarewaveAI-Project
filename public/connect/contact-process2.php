<?php

// define("WEBMASTER_EMAIL", 'themesflat@gmail.com');
//$address = "example@themeforest.net";
$address = "info.codesnapr@gmail.com";
if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$error = false;
$fields = array( 'email','mobile' );

foreach ( $fields as $field ) {
	if ( empty($_POST[$field]) || trim($_POST[$field]) == '' )
		$error = true;
}

if ( !$error ) {

	$email = stripslashes($_POST['email']);
	$mobile = stripslashes($_POST['mobile']);	

	$e_subject = 'You\'ve been contacted by ' . $email . '.';
	

	// Configuration option.
	// You can change this if you feel that you need to.
	// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.

	$e_body = "You have been contacted by: $email" . PHP_EOL . PHP_EOL;
	$e_mobile = "\r\nmobile: $mobile" . PHP_EOL . PHP_EOL;

	$msg = wordwrap( $e_body  , 70 );

	$headers = "From: $email" . PHP_EOL;
	$headers .= "Name: $email" . PHP_EOL;
	$headers .= "mobile: $mobile" . PHP_EOL;
	$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
	$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

	if(mail($address, $msg, $headers  )) {

		// Email has sent successfully, echo a success page.
	
		echo 'Success';

	} else {

		echo 'ERROR!';

	}

}

?>