<?php
    $url = "";    // WebAPIのURL
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url); 
    curl_setopt($ch, CURLOPT_PROXY, "http://proxy00.jec.ac.jp:8080/"); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);







?>
