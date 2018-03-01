<?php
if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {

} elseif ($_SERVER["REQUEST_METHOD"] == "POST") {

  $name = strip_tags(trim($_POST["form_name"]));
  $name = str_replace(array('\r','\n'),array(" "," "),$name);
  $email = filter_var(trim($_POST["form_email"]), FILTER_SANITIZE_EMAIL);
  $message = trim($_POST["form_message"]);
  $subject = trim($_POST["form_subject"]);

  // Check that data was sent to the mailer.
  if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Set a 400 (bad request) response code and exit.
    http_response_code(400);
    exit;
  }

  $recipient = "info@alcuris.co.uk";

  // Set the email subject.
  $subject = "New contact from $name Via React Site";

  // Build the email content.
  $email_content = "Name: $name\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Message:\n$message\n";

  // Build the email headers.
  $email_headers = "From: $name <contact@memohub.co.uk>";

  // Send the email.
  if (mail($recipient, $subject, $email_content, $email_headers)) {
    // Set a 200 (okay) response code.
    http_response_code(200);
  } else {
    // Set a 500 (internal server error) response code.
    http_response_code(500);
  }

} else {
  // Not a POST request, set a 403 (forbidden) response code.
  http_response_code(403);
}

?>
