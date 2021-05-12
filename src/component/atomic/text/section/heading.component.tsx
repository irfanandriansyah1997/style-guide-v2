import { FC } from 'react';

import {
  ITextHeadingType as Tag,
  ITextProps,
  ITextWithTagsProps
} from '@/component/atomic/text/interface';

import BasicTextComponent from './basic.component';

/**
 * Heading Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
const GenerateComponent: FC<ITextProps> = (props) => (
  <BasicTextComponent {...props} />
);

/**
 * Heading 1 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Heading1Component: FC<ITextWithTagsProps<Tag>> = (props) => (
  <GenerateComponent tag="h1" {...props} />
);

/**
 * Heading 2 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Heading2Component: FC<ITextWithTagsProps<Tag>> = (props) => (
  <GenerateComponent tag="h2" {...props} />
);

/**
 * Heading 3 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Heading3Component: FC<ITextWithTagsProps<Tag>> = (props) => (
  <GenerateComponent tag="h3" {...props} />
);

/**
 * Heading 4 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Heading4Component: FC<ITextWithTagsProps<Tag>> = (props) => (
  <GenerateComponent tag="h4" {...props} />
);

/**
 * Heading 5 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Heading5Component: FC<ITextWithTagsProps<Tag>> = (props) => (
  <GenerateComponent tag="h5" {...props} />
);

/**
 * Heading 6 Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export const Heading6Component: FC<ITextWithTagsProps<Tag>> = (props) => (
  <GenerateComponent tag="h6" {...props} />
);
