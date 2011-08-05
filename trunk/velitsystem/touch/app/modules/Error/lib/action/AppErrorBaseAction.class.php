<?php

/**
 * The base action from which all Error module actions inherit.
 */
class AppErrorBaseAction extends AppBaseAction {
	public function isSecure(){
		return false;
	}
}

?>