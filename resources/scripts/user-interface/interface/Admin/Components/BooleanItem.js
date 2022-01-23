import { useAtom } from 'jotai';
import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import {
  selectedIndexDataAtom,
  selectedIndexDataComponentAtom,
} from '../../../atoms/admin';
import { Row, RowIn, RowState } from './Row';
import { getInterventionKey, getValue } from '../../../utils/admin';
import { objectHasKey } from '../../../utils/structures';

/**
 * Is Boolean Item
 *
 * @param {string} k
 * @returns {boolean}
 */
const isBooleanItem = (k) => {
  return !k.includes(':');
};

/**
 * Boolean Item
 *
 * @param {object} { key: {string} key }
 * @returns <BooleanItem />
 */
const BooleanItem = ({ item: key }) => {
  const interventionKey = getInterventionKey(key);
  const [, setComponent] = useAtom(selectedIndexDataComponentAtom);
  const [data] = useAtom(selectedIndexDataAtom);
  const [value, immutable] = getValue(data.components, interventionKey);
  const [state, setState] = useState(value);

  /**
   * Handler
   */
  const handler = () => {
    if (immutable) {
      return;
    }

    const action = objectHasKey(data.components, interventionKey)
      ? 'del'
      : 'add';

    setComponent([action, interventionKey]);
    setState(!state);
  };

  /**
   * Render
   */
  return (
    <Row isButton={true}>
      <Button onClick={() => handler()}>
        <RowState state={state} immutable={immutable} />
        <RowIn>{getInterventionKey(key)}</RowIn>
      </Button>
    </Row>
  );
};

export { isBooleanItem, BooleanItem };
