import { FC } from 'react';

import {
  ITextParagraphType as Tag,
  ITextWithTagsProps
} from '@/component/atomic/text/interface';

import BasicTextComponent from './basic.component';

/**
 * Paragraph Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
const ParagraphComponent: FC<ITextWithTagsProps<Tag>> = (props) => (
  <BasicTextComponent tag="p" {...props} />
);

export default ParagraphComponent;
