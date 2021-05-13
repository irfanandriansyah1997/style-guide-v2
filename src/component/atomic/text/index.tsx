import BasicText from './section/basic.component';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6
} from './section/heading.component';
import Paragraph from './section/paragraph.component';
import Span from './section/span.component';
import { ITextExportDefault } from './interface';

/**
 * Text Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.05.12
 */
const Text: ITextExportDefault = BasicText as ITextExportDefault;

Text.H1 = Heading1;

Text.H2 = Heading2;

Text.H3 = Heading3;

Text.H4 = Heading4;

Text.H5 = Heading5;

Text.H6 = Heading6;

Text.Paragraph = Paragraph;

Text.Span = Span;

export default Text;
