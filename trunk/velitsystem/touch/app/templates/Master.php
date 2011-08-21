<!DOCTYPE html>
<html>
	<head>
	<?php $release = 'a'?>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<base href="<?php echo $ro->getBaseHref(); ?>" />
		<title>MASTER - <?php if(isset($t['_title'])) echo htmlspecialchars($t['_title']) . ' - '; echo AgaviConfig::get('core.app_name') ?></title>
		
		<link href="<?php echo $ro->getBaseHref() ?>js/sencha-touch/resources/css/sencha-touch.css" rel="stylesheet" type="text/css" />
		<link href="<?php echo $ro->getBaseHref() ?>stylesheets/styles.css?_r=<?php echo $release?>" rel="stylesheet" type="text/css" />
		
		<script src="<?php echo $ro->getBaseHref() ?>js/sencha-touch/sencha-touch-debug-w-comments.js"></script>
		
		<!-- 
			cada aplicacion js puede ir en un slot para ir recargado el navegador
			e ir limpiando la memoria evitando tener muchos scripts cargados
		 -->
		
		
		<!-- Application -->
		<script src="app/app.js"></script>
		
		<!-- Util -->
		<script src="app/util.js"></script>
		
		<!--models-->
		<script src="app/models/auth/User.js" type="text/javascript"></script>
		<script src="app/models/desktop/Menu.js" type="text/javascript"></script>
		<script src="app/models/Customer.js" type="text/javascript"></script>
		
		
		<!--stores-->
<!--		<script src="app/stores/Users.js" type="text/javascript"></script>-->
		<script src="app/stores/Customer.js" type="text/javascript"></script>
		
		
		<!-- Views -->
		<script src="app/views/ErrorField.js" type="text/javascript"></script>
		<script src="app/views/form/Base.js" type="text/javascript"></script>
		<script src="app/views/Viewport.js" type="text/javascript"></script>
		<script src="app/views/auth/Login.js" type="text/javascript"></script>
		<script src="app/views/desktop/Index.js" type="text/javascript"></script>
		<script src="app/views/customer/List.js" type="text/javascript"></script>
		<script src="app/views/customer/Attention.js" type="text/javascript"></script>
		<script src="app/views/customer/Detail.js" type="text/javascript"></script>
		
		<!-- Controllers -->
		<script src="app/controllers/Error.js" type="text/javascript"></script>
		<script src="app/controllers/Auth.js" type="text/javascript"></script>
		<script src="app/controllers/Desktop.js" type="text/javascript"></script>
		<script src="app/controllers/Customer.js" type="text/javascript"></script>
		
		
		
	</head>
	<body>	
<!--	<div id="app-loading" style="margin: 50px auto 0 auto; background-position: center; background-repeat: no-repeat; height: 50px;" class="icon-loading"> Loading ...</div>-->
	</body>
</html>
