import { FC } from 'react';

import Text from '@/atomic/text';
import { NullAble } from '@/interface/general';
import { IBreadcrumbTextProps } from '@/molecules/breadcrumbs/interface';

/**
 * Breadcrumb Text
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.15
 */
const BreadcrumbText: FC<IBreadcrumbTextProps> = ({ children, style }) => (
  <Text.Paragraph
    fontSize={style?.fontSize as NullAble<number>}
    fontWeight={style?.fontWeight as NullAble<number>}
    color={style?.color as NullAble<string>}
  >
    {children}
  </Text.Paragraph>
);

export default BreadcrumbText;
