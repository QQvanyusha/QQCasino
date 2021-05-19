<?php
    if (isset($_POST['login'])) { $login = $_POST['login']; if ($login == '') { unset($login);} } //заносим введенный пользователем логин в переменную $login, если он пустой, то уничтожаем переменную
    if (isset($_POST['password'])) { $pass=$_POST['password']; if ($pass =='') { unset($pass);} }
    if (isset($_POST['name1'])) { $name1 = $_POST['name1']; if ($login == '') { unset($name1);} } 
    if (isset($_POST['surname'])) { $surname = $_POST['surname']; if ($login == '') { unset($surname);} } 

    //заносим введенный пользователем пароль в переменную $pass, если он пустой, то уничтожаем переменную
 if (empty($login) or empty($pass)) //если пользователь не ввел логин или пароль, то выдаем ошибку и останавливаем скрипт
    {
    exit ("Вы ввели не всю информацию, вернитесь назад и заполните все поля!");
    }
    //если логин и пароль введены, то обрабатываем их, чтобы теги и скрипты не работали, мало ли что люди могут ввести
    $login = stripslashes($login);
    $login = htmlspecialchars($login);

    $pass = stripslashes($pass);
    $pass = htmlspecialchars($pass);

    $name1 = stripslashes($name1);
    $name1 = htmlspecialchars($name1);


    $surname = stripslashes($surname);
    $surname= htmlspecialchars($surname);




 //удаляем лишние пробелы
    $login = trim($login);
    $pass = trim($pass);
    $name1= trim($name1);
    $surname= trim($surname);

    echo($pass);
 // подключаемся к базе
    include ("bd.php");// файл bd.php должен быть в той же папке, что и все остальные, если это не так, то просто измените путь 
 // проверка на существование пользователя с таким же логином
    $result = mysqli_query($db,"SELECT id FROM users WHERE login='$login'");
    $myrow = mysqli_fetch_array($result);
    if (!empty($myrow['id'])) {
    exit ("Извините, введённый вами логин уже зарегистрирован. Введите другой логин.");
    }
 // если такого нет, то сохраняем данные
    $result2 = mysqli_query ($db,"INSERT INTO users (login,password,name,surname,photo) VALUES('$login','$pass','name','surname','photo/фотоtext.png')");
    // Проверяем, есть ли ошибки
    if ($result2=='TRUE')
    {
    echo "Вы успешно зарегистрированы! Теперь вы можете зайти на сайт. <a href='index.php'>Главная страница</a>";
    }
 else {
    echo "Ошибка! Вы не зарегистрированы.";
    }
    ?>