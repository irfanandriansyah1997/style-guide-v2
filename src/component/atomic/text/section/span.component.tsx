import { FC } from 'react';

import TextComponent from '@/component/atomic/text';
import {
  ITextSpanType as Tag,
  ITextWithTagsProps
} from '@/component/atomic/text/interface';

/**
 * Span Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
const SpanComponent: FC<ITextWithTagsProps<Tag>> = (props) => (
  <TextComponent tag="span" {...props} />
);

export default SpanComponent;
