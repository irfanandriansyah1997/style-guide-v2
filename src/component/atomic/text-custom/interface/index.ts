import {
  IBasicTextProps,
  ITextHeadingType,
  ITextParagraphType,
  ITextSpanType
} from '@/component/atomic/text/interface';

/**
 * Caption Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export type ICaptionProps = ITextCustomProps & ITextSpanType;

/**
 * Headline Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export type IHeadlineProps = ITextCustomProps & ITextHeadingType;

/**
 * Label Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export type ILabelProps = ITextCustomProps & ITextParagraphType;

/**
 * Paragraph Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export type IParagraphProps = ITextCustomProps & ITextParagraphType;

/**
 * Subtitle Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export type ISubtitleProps = ITextCustomProps & ITextParagraphType;

/**
 * Text Custom Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
type ITextCustomProps = Partial<
  Omit<IBasicTextProps, 'fontSize' | 'lineHeight'>
>;
