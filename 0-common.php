<?php
switch ($lang) {
  case 'fr':
  $lang_file = 'fr.php';
  break;

  case 'en':
  $lang_file = 'en.php';
  break;

  case 'de':
  $lang_file = 'de.php';
  break;

  default:
  $lang_file = 'fr.php';

}

include_once 'lang/.$lang_file';
?>