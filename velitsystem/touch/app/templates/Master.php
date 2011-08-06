<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<base href="<?php echo $ro->getBaseHref(); ?>" />
		<title>MASTER - <?php if(isset($t['_title'])) echo htmlspecialchars($t['_title']) . ' - '; echo AgaviConfig::get('core.app_name') ?></title>
		
		<link href="<?php echo $ro->getBaseHref() ?>js/sencha-touch/resources/css/sencha-touch.css" rel="stylesheet" type="text/css" />
		<script src="<?php echo $ro->getBaseHref() ?>js/sencha-touch/sencha-touch.js"></script>
		
		<!-- 
			cada aplicacion js puede ir en un slot para ir recargado el navegador
			e ir limpiando la memoria evitando tener muchos scripts cargados
		 -->
		
		<!-- Application -->
		<script src="<?php echo $ro->getBaseHref() ?>app/app.js"></script>
		
		<!-- Views -->
		<script src="<?php echo $ro->getBaseHref() ?>app/views/Viewport.js" type="text/javascript"></script>
		
		<!-- Controllers -->
		<script src="app/controllers/Auth.js" type="text/javascript"></script>
		<script src="app/controllers/Desktop.js" type="text/javascript"></script>
		
		
		
	</head>
	<body>
	</body>
</html>
