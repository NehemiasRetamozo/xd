<?php
// inc/config.php
// Configuración de conexión a MySQL para LCREurope
// REEMPLACE los valores de host, dbname, user y pass por los de su hosting.

$db_host = 'localhost';
$db_name = 'lcreurope_db';
$db_user = 'usuario_db';
$db_pass = 'password_db';
$db_charset = 'utf8mb4';

$dsn = "mysql:host=$db_host;dbname=$db_name;charset=$db_charset";

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $db_user, $db_pass, $options);
} catch (Exception $e) {
    // En producción NO se debe mostrar el error completo
    die('Error de conexión a la base de datos.');
}
