<?php

/**
 * @file
 * Default theme implementation to format an HTML mail.
 *
 * Copy this file in your default theme folder to create a custom themed mail.
 * Rename it to mimemail-message--[module]--[key].tpl.php to override it for a
 * specific mail.
 *
 * Available variables:
 * - $recipient: The recipient of the message
 * - $subject: The message subject
 * - $body: The message body
 * - $css: Internal style sheets
 * - $module: The sending module
 * - $key: The message identifier
 *
 * @see template_preprocess_mimemail_message()
 */
?>
<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <?php if ($css): ?>
    <style type="text/css">
			<?php print $css ?>
			body {
				border: 1px solid #ccc;
				border-radius:4px;
				padding: 1.5rem 2rem 2rem 2rem
			}
		</style>
    <?php endif; ?>
    </head>
    <body id="mimemail-body" <?php if ($module && $key): print 'class="'. $module .'-'. $key .'"'; endif; ?>>
    <div id="center">
      <h3 style="background-color:#e74c3c; color:#fff; border-radius:4px; padding:4px 8px; float:right; display:block">DIY Custom Kitchens</h3>
      <div id="main" style="clear:both"> <?php print $body ?> </div>
    </div>
</body>
</html>
