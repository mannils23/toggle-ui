<?php

/**
 * Shows the device page.
 */

//namespace Toggle\View;
if(isset($_SESSION['username'])){
}else{session_start();}

//use Toggle\Controller\SessionManager;



//$controller = SessionManager::getController();
//SessionManager::storeController($controller);

include($_SERVER["DOCUMENT_ROOT"].'/resources/views/devices.php');