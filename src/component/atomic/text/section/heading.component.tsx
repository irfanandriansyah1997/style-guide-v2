import { FC } from 'react';

import {
  ITextHeadingType as Tag,
  ITextProps,
  ITextWithTagsProps
} from '@/atomic/text/interface';

import BasicTextComponent from './basic.component';

/**
 * Heading Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
const Generate: FC<ITextProps> = (props) => <BasicTextComponent {...props} />;

/**
 * Heading 1 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Heading1: FC<ITextWithTagsProps<Tag>> = (props) => (
  <Generate tag="h1" {...props} />
);

/**
 * Heading 2 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Heading2: FC<ITextWithTagsProps<Tag>> = (props) => (
  <Generate tag="h2" {...props} />
);

/**
 * Heading 3 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Heading3: FC<ITextWithTagsProps<Tag>> = (props) => (
  <Generate tag="h3" {...props} />
);

/**
 * Heading 4 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Heading4: FC<ITextWithTagsProps<Tag>> = (props) => (
  <Generate tag="h4" {...props} />
);

/**
 * Heading 5 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Heading5: FC<ITextWithTagsProps<Tag>> = (props) => (
  <Generate tag="h5" {...props} />
);

/**
 * Heading 6 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Heading6: FC<ITextWithTagsProps<Tag>> = (props) => (
  <Generate tag="h6" {...props} />
);
