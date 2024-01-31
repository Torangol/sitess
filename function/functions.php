<?php
    $mysqli = false;
    function connctDB () {
        global $mysqli;
        $mysqli = new mysqli("localhost", "root", "", "basa");
        $mysqli->query("SET NAMES 'utf-8'");
    }

    function closeDB () {
        global $mysqli;
        $mysqli->close ();
    }
?>