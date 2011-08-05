<?php

/**
 * The base action from which all project actions inherit.
 */
class AppBaseAction extends AgaviAction {

	public function isSimple() {
		return false;
	}
	
	public function isSecure() {
		return true;// all actions login required 
	}
	
	
	
	
}

?>