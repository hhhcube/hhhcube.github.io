<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $errors = array();

    if(empty($name)){
        array_push($errors, "Name is required");
    }else if(strlen($name) < 3){
        array_push($errors, "Name must be at least 3 characters");
    }

    if(empty($email)){
        array_push($errors, "Email is required");
    }else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        array_push($errors, "Email must be a valid email address");
    }

    if(empty($message)){
        array_push($errors, "Message is required");
    }else if(strlen($message) < 10){
        array_push($errors, "Message must be at least 10 characters");
    }

    if(count($errors) == 0){
        // Send email
    }else{
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }
}
