<!DOCTYPE html>
<html<?php print $html_attributes . $rdf_namespaces; ?>>
<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  
  <?php print $styles; ?>
  <!-- <link href="http://fonts.googleapis.com/css?family=Roboto:300,700,500,300italic" rel="stylesheet"> -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;0,900;1,900&display=swap" rel="stylesheet"> 
 
  <?php print $scripts; ?>
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
  <meta name="robots" content="noindex, nofollow">
</head>
<body class="<?php print $classes; ?>" <?php print $attributes; ?>>
  <div id="skip">
    <a href="#content"><?php print t('Jump to Navigation'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>