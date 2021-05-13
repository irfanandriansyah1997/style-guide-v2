import { Property } from 'csstype';
import { FC, HTMLAttributes } from 'react';

/**
 * Basic Component Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
type IBasicComponentProps =
  | ITextParagraphType
  | ITextSpanType
  | ITextHeadingType;

/**
 * Basic Text Props
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export interface IBasicTextProps {
  color: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  textAlign: Property.TextAlign;
  textDecoration: Property.TextDecoration;
}

/**
 * Text Component Export Default
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export type ITextExportDefault = FC<ITextProps> & {
  H1: FC<ITextWithTagsProps<ITextHeadingType>>;
  H2: FC<ITextWithTagsProps<ITextHeadingType>>;
  H3: FC<ITextWithTagsProps<ITextHeadingType>>;
  H4: FC<ITextWithTagsProps<ITextHeadingType>>;
  H5: FC<ITextWithTagsProps<ITextHeadingType>>;
  H6: FC<ITextWithTagsProps<ITextHeadingType>>;
  Paragraph: FC<ITextWithTagsProps<ITextParagraphType>>;
  Span: FC<ITextWithTagsProps<ITextSpanType>>;
};

export type ITextHeadingType = Omit<
  HTMLAttributes<HTMLHeadingElement>,
  'style'
>;

export type ITextParagraphType = Omit<
  HTMLAttributes<HTMLParagraphElement>,
  'style'
>;

/**
 * Text Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export type ITextProps = Partial<IBasicTextProps> &
  IBasicComponentProps & {
    tag: ITextType;
  };

export type ITextSpanType = Omit<HTMLAttributes<HTMLSpanElement>, 'style'>;

export type ITextType = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

/**
 * Text With Tag Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
export type ITextWithTagsProps<Tags> = Partial<IBasicTextProps> & Tags;
