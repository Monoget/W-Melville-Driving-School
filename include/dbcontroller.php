<?php
class DBController {
    private $host = "localhost";
    private $user = "root";
    private $password = "";
    private $database = "sk_driving_school";
    private $from_email="noreply@skdrivingschoolny.com";
    private $mail_pass="3n21&lf31+:e";
    private $notification_email="munna4115@gmail.com";
    private $conn;

    private $sender_name = "SK Driving School, NewYork";
    private $mail_server = "mail.skdrivingschoolny.com";

    private $domain = "https://skdrivingschoolny.com/";

    function __construct() {
        if($_SERVER['SERVER_NAME']=="skdrivingschoolny.com"||$_SERVER['SERVER_NAME']=="www.skdrivingschoolny.com"){
            $this->host = "localhost";
            $this->user = "upgggnkkroycy";
            $this->password = "3e4bt%D1&2%o";
            $this->database = "dbqgbcctouhijk";
        }

        $this->conn = $this->connectDB();
    }

    function connectDB() {
        $conn = mysqli_connect($this->host,$this->user,$this->password,$this->database);
        return $conn;
    }

    function checkValue($value) {
        $value=mysqli_real_escape_string($this->conn, $value);
        return $value;
    }

    function runQuery($query) {
        $result = mysqli_query($this->conn,$query);
        while($row=mysqli_fetch_assoc($result)) {
            $resultset[] = $row;
        }
        if(!empty($resultset))
            return $resultset;
    }

    function insertQuery($query) {
        $result = mysqli_query($this->conn,$query);
        return $result;
    }

    function from_email(){
        return $this->from_email;
    }

    function numRows($query) {
        $result  = mysqli_query($this->conn,$query);
        $rowcount = mysqli_num_rows($result);
        return $rowcount;
    }

    function notify_email(){
        return $this->notification_email;
    }

    function mail_pass(){
        return $this->mail_pass;
    }

    function sender_name(){
        return $this->sender_name;
    }

    function mail_server(){
        return $this->mail_server;
    }

    function domain(){
        return $this->domain;
    }
}
?>