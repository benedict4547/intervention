<?php

use PhpCsFixer\Fixer\ArrayNotation\ArraySyntaxFixer;
use Symplify\EasyCodingStandard\Config\ECSConfig;
use Symplify\EasyCodingStandard\ValueObject\Set\SetList;

return static function (ECSConfig $ecsConfig): void {
	$ecsConfig->paths([__DIR__ . '/src']);

	$ecsConfig->sets([SetList::PSR_12]);

	$ecsConfig->ruleWithConfiguration(ArraySyntaxFixer::class, [
		'syntax' => 'short',
	]);
};
