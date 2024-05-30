<?php

$html_file = 'index.php';
$css_file = 'styles/test.css';

$file_contents = file_get_contents($html_file);

$str = '<div class="shop-snippet-flex">
<div class="shop-card">
    <div class="shop-card-img">
        <img src="images/hero-bag.png" alt="">
    </div>
    <div class="shop-card-text">
        <h5 class="coffee-title">
            Castillo Cuaca
        </h5>
        <span class="card-price">
            $18
        </span>
    </div>
</div>
<div class="card-divider"></div>';
$re = '/class="\s*(.*?)\s*"/s';

preg_match_all($re, $str, $matches, PREG_SET_ORDER, 0);

$css = '';

foreach($matches as $match) {
    $css .= '.' . $match[1] . ' {' . "\n \n" . '}' . "\n \n";
}

var_dump($css);

file_put_contents($css_file, $css);