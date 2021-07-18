import PropTypes from 'prop-types';
import { Validator } from 'react';

import { generateContent } from './helper/expand.helper';
import { useToggle } from './hooks/expand.hooks';
import { ExpandContent, ExpandSelector } from './section/content.component';
import ExpandContext from './context';
import {
  IExpandClassnameList,
  IExpandExportDefault,
  IExpandSelectorPosition
} from './interface';

/**
 * Expand Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.17
 */
const Expand: IExpandExportDefault = ({
  children,
  className: classNameProps,
  ...props
}) => {
  const { action, state } = useToggle({
    ...props,
    className: classNameProps
  });

  return (
    <ExpandContext.Provider value={{ action, state }}>
      <div className={state.className}>
        {generateContent(children, classNameProps)}
      </div>
    </ExpandContext.Provider>
  );
};

Expand.propTypes = {
  className: PropTypes.shape({
    content: PropTypes.string,
    toggle: PropTypes.string,
    wrapper: PropTypes.string
  }) as Validator<IExpandClassnameList>,
  initialHeight: PropTypes.number,
  on: PropTypes.func.isRequired,
  openned: PropTypes.bool,
  selectorPosition: PropTypes.oneOf<IExpandSelectorPosition>([`bottom`, `top`])
};

Expand.defaultProps = {
  className: undefined,
  initialHeight: 0,
  openned: undefined,
  selectorPosition: `top`
};

Expand.Selector = ExpandSelector;

Expand.Content = ExpandContent;

export default Expand;
