<?php
session_start();
include($_SERVER["DOCUMENT_ROOT"].'/classes/Toggle/Controller/SessionManager.php');

$username = $_SESSION["username"];
$controller = SessionManager::getController();
$result = $controller->getDevices($username);
$var=array("get_devices_result"=>$result);
$getDevicesResult= json_encode($var);
echo $getDevicesResult;
?>

