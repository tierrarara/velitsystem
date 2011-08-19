<?php

class Test_RestAction extends AppTestBaseAction {
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
		return 'Success';
	}
	
	public function executeWrite() {
		$this->setAttribute('action', 'executeWrite');
		return 'Success';
	}
	
	public function executeRead() {
		$this->setAttribute('action', 'executeRead');
		return 'Success';
	}
	
	public function executeCreate() {
		$this->setAttribute('action', 'executeCreate');
		return 'Success';
	}
	
	public function executeRemove() {
		$this->setAttribute('action', 'executeRemove');
		return 'Success';
	}
}
