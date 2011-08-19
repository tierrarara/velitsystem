<?php

/**
 * The base view from which all Test module views inherit.
 */
class AppTestBaseView extends AppBaseView {

	
	public function setupHtml(AgaviRequestDataHolder $rd, $layoutName = null) {
		parent::setupHtml($rd, $ln);
		$this->getLayer('decorator')->setTemplate(AgaviConfig::get('core.templates').'test_Master');
	}
}