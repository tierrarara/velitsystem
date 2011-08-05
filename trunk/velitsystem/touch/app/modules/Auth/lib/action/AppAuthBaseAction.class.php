<?php

/**
 * The base action from which all Auth module actions inherit.
 */
class AppAuthBaseAction extends AppBaseAction {

	public function isSecure() {
		return false;// no login required in this module
	}
	
}

?>