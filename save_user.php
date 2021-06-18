<?php
echo($POST['email']);
    if (isset($_POST['email'])) { $email = $_POST['email']; if ($email == '') { unset($email);} } //заносим введенный пользователем логин в переменную $email, если он пустой, то уничтожаем переменную
   if (isset($_POST['passw'])) { $pass=$_POST['passw']; if ($pass =='') { unset($pass);} }
if (isset($_POST['name'])) { $name = $_POST['name'];if ($name == '') { unset($name);} } 
if (isset($_POST['surname'])) { $surname = $_POST['surname']; if ($surname == '') { unset($surname);} } 

    //заносим введенный пользователем пароль в переменную $pass, если он пустой, то уничтожаем переменную
 if (empty($email)or empty($pass)or empty($name) or empty($surname)) //если пользователь не ввел логин или пароль, то выдаем ошибку и останавливаем скрипт
    {
       exit("Вы ввели не все данные");
    }
    //если логин и пароль введены, то обрабатываем их, чтобы теги и скрипты не работали, мало ли что люди могут ввести
    $email = stripslashes($email);
    $email = htmlspecialchars($email);

    $pass = stripslashes($pass);
    $pass = htmlspecialchars($pass);

    $name = stripslashes($name);
    $name = htmlspecialchars($name);


    $surname = stripslashes($surname);
    $surname= htmlspecialchars($surname);




 //удаляем лишние пробелы
    $email = trim($email);
    $pass = trim($pass);
    $name= trim($name);
    $surname= trim($surname);


 // подключаемся к базе
    include ("bd.php");// файл bd.php должен быть в той же папке, что и все остальные, если это не так, то просто измените путь 
 // проверка на существование пользователя с таким же логином
    $result = mysqli_query($db,"SELECT id FROM users WHERE login='$email'");
    $myrow = mysqli_fetch_array($result);
    if (!empty($myrow['id'])) {
    exit ("Извините, введённый вами логин уже зарегистрирован. Введите другой логин.");
    }
 // если такого нет, то сохраняем данные
    $result2 = mysqli_query ($db,"INSERT INTO users (login,password,name,surname,photo) VALUES('$email','$pass','$name','$surname','photo/фотоtext.png')");
    // Проверяем, есть ли ошибки
    if ($result2=='TRUE')
    {
       $_SESSION['login']=$email;
header("Location: contact2.php");
    }
 else {
    echo "Ошибка! Вы не зарегистрированы.";
    }
    ?>