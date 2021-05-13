import { FC } from 'react';

import {
  ITextParagraphType as Tag,
  ITextWithTagsProps
} from '@/atomic/text/interface';

import BasicText from './basic.component';

/**
 * Paragraph Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
const Paragraph: FC<ITextWithTagsProps<Tag>> = (props) => (
  <BasicText tag="p" {...props} />
);

export default Paragraph;
