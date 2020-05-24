<div id="page" class="<?php print $classes; ?>"<?php print $attributes; ?>>
  
  <!-- ______________________ HEADER _______________________ -->
  
  <header id="header">
   
    <?php if ($page['header_first']): ?>
      <div class="header-first">
        <?php print render($page['header_first']) ?>
      </div>
    <?php endif; ?>

    <div class="container">
      <?php if ($page['header_second']): ?>
        <div class="header-second">
          <?php print render($page['header_second']); ?>
        </div>
      <?php endif; ?>

      <?php if ($page['header_third']): ?>
        <div class="header-third">
          <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
              <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>"/>
          </a>
          <?php print render($page['header_third']); ?>
        </div>
      <?php endif; ?>
    </div>

    <?php if ($page['navbar']): ?>
      <nav id="navigation" class="menu">
        <div class="container">
          <?php print render($page['navbar']); ?>
        </div>
      </nav>
    <?php endif; ?>
  </header>
  <!-- /header -->
  
  <?php if ($main_menu): ?>
  <!-- <nav id="navigation" class="menu">
    <div class="container">
    	<?php //print theme('links', array('links' => $main_menu, 'attributes' => array('id' => 'primary', 'class' => array('main-menu')))); ?>
    </div>
  </nav> -->
  <!-- /navigation -->
  <?php endif; ?>
  
  <!-- ______________________ MAIN _______________________ -->
  
  <div id="main">
  	<?php if ($page['content_super']): ?>
    	<div class="content-super"><?php print render($page['content_super']); ?></div>
    <?php endif; ?>
    <div class="container">
      <section id="content">
        <?php if ($breadcrumb || $title|| $messages || $tabs || $action_links): ?>
        <!-- <div id="content-header"> --> 
        
        <?php print $breadcrumb; ?>
        <?php if ($page['highlighted']): ?>
        <div id="highlighted"><?php print render($page['highlighted']) ?></div>
        <?php endif; ?>
        <?php print render($title_prefix); ?>
        <?php if ($title): ?>
        <h1 class="title"><?php print $title; ?></h1>
        <?php endif; ?>
        <?php print render($title_suffix); ?> <?php print $messages; ?> <?php print render($page['help']); ?>
        <?php if (render($tabs)): ?>
        <div class="tabs"><?php print render($tabs); ?></div>
        <?php endif; ?>
        <?php if ($action_links): ?>
        <ul class="action-links">
          <?php print render($action_links); ?>
        </ul>
        <?php endif; ?>
        
        <!-- </div> /#content-header -->
        <?php endif; ?>
        <div id="content-area"> <?php print render($page['content']) ?> </div>
        <?php print $feed_icons; ?> </section>
      <!-- /content-inner /content -->
      
      <?php if ($page['sidebar_first']): ?>
      <aside id="sidebar-first"> <?php print render($page['sidebar_first']); ?> </aside>
      <?php endif; ?>
      <!-- /sidebar-first -->
      
      <?php if ($page['sidebar_second']): ?>
      <aside id="sidebar-second"> <?php print render($page['sidebar_second']); ?> </aside>
      <?php endif; ?>
      <!-- /sidebar-second --> 
    </div>
  </div>
  <!-- /main --> 
  
  <!-- ______________________ FOOTER _______________________ -->
  
  <?php if ($page['footer']): ?>
  <footer id="footer">
  	<?php if ($page['footer_super']): ?>
    	<div class="footer-super"><?php print render($page['footer_super']); ?></div>
    <?php endif; ?>
    <div class="container">
    	<?php if ($secondary_menu): ?>
      	<nav class="footer-menu">
        	<div class="container">
          	<?php print theme('links', array('links' => $secondary_menu, 'attributes' => array('id' => 'secondary', 'class' => array('sub-menu')))); ?>
          </div>
        </nav>
      <?php endif; ?>
      <!-- /secondary menu -->
      
      <?php print render($page['footer']); ?>
    </div>
  </footer>
  <!-- /footer -->
  <?php endif; ?>
</div>
<!-- /page --> 
