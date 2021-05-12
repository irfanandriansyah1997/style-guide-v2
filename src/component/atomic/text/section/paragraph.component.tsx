import { FC } from 'react';

import TextComponent from '@/component/atomic/text';
import {
  ITextParagraphType as Tag,
  ITextWithTagsProps
} from '@/component/atomic/text/interface';

/**
 * Paragraph Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
const ParagraphComponent: FC<ITextWithTagsProps<Tag>> = (props) => (
  <TextComponent tag="p" {...props} />
);

export default ParagraphComponent;
