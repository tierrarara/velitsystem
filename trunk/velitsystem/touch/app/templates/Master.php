<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<base href="<?php echo $ro->getBaseHref(); ?>" />
		<title><?php if(isset($t['_title'])) echo htmlspecialchars($t['_title']) . ' - '; echo AgaviConfig::get('core.app_name'); ?></title>
		
		<script src="<?php echo $ro->getBaseHref(); ?>js/sencha-touch/sencha-touch.js"></script>
		<link href="<?php echo $ro->getBaseHref(); ?>js/sencha-touch/resources/css/sencha-touch.css" rel="stylesheet" type="text/css" />
		 
		 <script src="<?php echo $ro->getBaseHref(); ?>js/app.js"></script>
		
	</head>
	<body>
	</body>
</html>
