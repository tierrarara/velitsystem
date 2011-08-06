<?php

// +---------------------------------------------------------------------------+
// | An absolute filesystem path to the agavi/agavi.php script.                |
// +---------------------------------------------------------------------------+
//require('/usr/local/zend/share/pear/agavi/agavi.php');

// TODO: crear una archivo para configurar el sistema

// +---------------------------------------------------------------------------+
// | An absolute filesystem path to our app/config.php script.                 |
// +---------------------------------------------------------------------------+
// TODO: dejar aqui solo la configuracion de la aplicación
require('../app/config.php');
AgaviConfig::set('core.skip_config_transformations', true);
// +---------------------------------------------------------------------------+
// | Initialize the framework. You may pass an environment name to this method.|
// | By default the 'development' environment sets Agavi into a debug mode.    |
// | In debug mode among other things the cache is cleaned on every request.   |
// +---------------------------------------------------------------------------+
Agavi::bootstrap('development');

// +---------------------------------------------------------------------------+
// | Call the controller's dispatch method on the default context              |
// +---------------------------------------------------------------------------+
AgaviContext::getInstance('web')->getController()->dispatch();

?>