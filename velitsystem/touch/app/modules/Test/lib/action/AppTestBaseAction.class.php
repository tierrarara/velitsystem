<?php

/**
 * The base action from which all Test module actions inherit.
 */
class AppTestBaseAction extends AppBaseAction {
	public function isSecure() {
		return false;
	}
}
