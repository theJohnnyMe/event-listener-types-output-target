import { ComponentCompilerMeta } from '@stencil/core/internal';
import { TABS } from '../../consts';
import { generateEventListenerTypes } from '../generate-event-listener-types';
import { getGeneralComponentTypes } from '../../utilities';

export const generateHTMLElementType = (cmp: ComponentCompilerMeta): string => {
  return [`${TABS[1]}interface ${getGeneralComponentTypes(cmp).htmlElementName} {`, ...generateEventListenerTypes(cmp).htmlElementEventListenerProperties, `${TABS[1]}}`].join(
    '\n',
  );
};
