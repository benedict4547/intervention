import { __ as wp__ } from '@wordpress/i18n';

export const __ = (text) => {
  return wp__(text, 'intervention');
};

export const version = 'v2.0.0';
