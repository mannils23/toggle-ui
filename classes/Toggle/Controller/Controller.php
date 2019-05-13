<?php

//use Toggle\Model\Device;
include($_SERVER["DOCUMENT_ROOT"].'/classes/Toggle/Model/Device.php');
include($_SERVER["DOCUMENT_ROOT"].'/classes/Toggle/Model/User.php');
include($_SERVER["DOCUMENT_ROOT"].'/classes/Toggle/Integration/UserDBAccess.php');

class Controller  {
    public function login($username,$password){
        $user = new User($username,$password);
        return $user->login();
    }

    public function signUp($username,$password,$email){
        $user = new User($username,$password,$email);
        return $user->signUp();
    }

    public function getPowerStatus($token){
        $device=new Device($token);       
        return $device->getPowerStatus();
    }

    public function getConnectionStatus($token){
        $device=new Device($token);       
        return $device->getConnectionStatus();
    }

    public function turnOn($token){
        $device=new Device($token);       
        return $device->turnOn();
    }

    public function turnOff($token){
        $device=new Device($token);       
        return $device->turnOff();
    }
}
?>
