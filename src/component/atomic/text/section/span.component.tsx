import { FC } from 'react';

import {
  ITextSpanType as Tag,
  ITextWithTagsProps
} from '@/atomic/text/interface';

import BasicText from './basic.component';

/**
 * Span Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
const Span: FC<ITextWithTagsProps<Tag>> = (props) => (
  <BasicText tag="span" {...props} />
);

export default Span;
