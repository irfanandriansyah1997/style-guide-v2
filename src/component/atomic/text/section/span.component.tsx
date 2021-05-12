import { FC } from 'react';

import {
  ITextSpanType as Tag,
  ITextWithTagsProps
} from '@/component/atomic/text/interface';

import BasicTextComponent from './basic.component';

/**
 * Span Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
const SpanComponent: FC<ITextWithTagsProps<Tag>> = (props) => (
  <BasicTextComponent tag="span" {...props} />
);

export default SpanComponent;
