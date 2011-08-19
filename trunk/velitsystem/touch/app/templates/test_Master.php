<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<base href="<?php echo $ro->getBaseHref(); ?>" />
		<title>TEST MASTER - <?php if(isset($t['_title'])) echo htmlspecialchars($t['_title']) . ' - '; echo AgaviConfig::get('core.app_name') ?></title>
		
		<link href="<?php echo $ro->getBaseHref() ?>stylesheets/styles.css" rel="stylesheet" type="text/css" />
		<link href="<?php echo $ro->getBaseHref() ?>js/sencha-touch/resources/css/sencha-touch.css" rel="stylesheet" type="text/css" />
		<script src="<?php echo $ro->getBaseHref() ?>js/sencha-touch/sencha-touch-debug-w-comments.js"></script>
		
		<!-- 
			cada aplicacion js puede ir en un slot para ir recargado el navegador
			e ir limpiando la memoria evitando tener muchos scripts cargados
		 -->
		
		<!-- Application -->
<!--		<script src="<?php echo $ro->getBaseHref() ?>js/device_test.js"></script>-->
<!--		<script src="<?php echo $ro->getBaseHref() ?>js/restproxy.js"></script>-->
<!--		<script src="<?php echo $ro->getBaseHref() ?>js/testpanel.js"></script>-->
<!--		<script src="<?php echo $ro->getBaseHref() ?>js/pagination.js"></script>-->
			<script src="<?php echo $ro->getBaseHref() ?>js/model.js"></script>

		
	</head>
	<body>
	
	<?php echo $inner; ?>
	</body>
</html>
