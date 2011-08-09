<?php

class Auth_LogoutAction extends AppAuthBaseAction {
	/**
	 * Returns the default view if the action does not serve the request
	 * method used.
	 *
	 * @return     mixed <ul>
	 * <li>A string containing the view name associated
	 * with this action; or</li>
	 * <li>An array with two indices: the parent module
	 * of the view to be executed and the view to be
	 * executed.</li>
	 * </ul>
	 */
	public function getDefaultViewName() {
		$this->getContext ()->getUser ()->setAuthenticated ( false );
		$this->getContext ()->getUser ()->clearCredentials ();
		
		return 'Success';
	}
}
