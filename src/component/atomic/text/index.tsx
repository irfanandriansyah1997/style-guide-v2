import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { createElement } from 'react';

import {
  Heading1Component,
  Heading2Component,
  Heading3Component,
  Heading4Component,
  Heading5Component,
  Heading6Component
} from './section/heading.component';
import ParagraphComponent from './section/paragraph.component';
import SpanComponent from './section/span.component';
import style from './style/style.module.scss';
import { ITextExportDefault } from './interface';

/**
 * Text Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
const TextComponent: ITextExportDefault = ({
  className,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  tag,
  textAlign,
  textDecoration,
  ...res
}) =>
  createElement(tag, {
    ...res,
    className: objToString({
      [`${style[`ui-atomic-text`]}`]: true,
      [`${className}`]: verifiedIsNotEmpty(className)
    }),
    style: {
      color,
      fontFamily,
      fontSize,
      fontWeight,
      textAlign,
      textDecoration
    }
  });

TextComponent.H1 = Heading1Component;

TextComponent.H2 = Heading2Component;

TextComponent.H3 = Heading3Component;

TextComponent.H4 = Heading4Component;

TextComponent.H5 = Heading5Component;

TextComponent.H6 = Heading6Component;

TextComponent.Paragraph = ParagraphComponent;

TextComponent.Span = SpanComponent;

export default TextComponent;
