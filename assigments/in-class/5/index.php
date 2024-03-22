<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $username = htmlspecialchars(strip_tags(trim($_POST['username'])));
    $password = htmlspecialchars(strip_tags(trim($_POST['password'])));
    $address = htmlspecialchars(strip_tags(trim($_POST['address'])));
    $country = htmlspecialchars(strip_tags(trim($_POST['country'])));
    $zip = htmlspecialchars(strip_tags(trim($_POST['zip'])));
    $email = htmlspecialchars(strip_tags(trim($_POST['email'])));
    $sex = isset($_POST['sex']) ? htmlspecialchars(strip_tags(trim($_POST['sex']))) : '';
    $languages = isset($_POST['language']) ? $_POST['language'] : [];
    $about = htmlspecialchars(strip_tags(trim($_POST['area'])));

    $errors = [];
    if (empty($name)) {
        $errors[] = "Name is required.";
    }
    if (empty($username)) {
        $errors[] = "Username is required.";
    }
    if (empty($password)) {
        $errors[] = "Password is required.";
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }
    if ($country === "default") {
        $errors[] = "Please select a country.";
    }

    if (count($errors) == 0) {
        echo "Form submitted successfully.<br>";

        echo "Name: $name<br>";
        echo "Username: $username<br>";

        echo "Address: $address<br>";
        echo "Country: $country<br>";
        echo "ZIP Code: $zip<br>";
        echo "Email: $email<br>";
        echo "Sex: $sex<br>";
        echo "Languages: " . implode(", ", $languages) . "<br>";
        echo "About: $about<br>";
    } else {

        foreach ($errors as $error) {
            echo "<div style='color: red;'>$error</div>";
        }
    }
}
?>
