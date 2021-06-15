import { FC } from 'react';

import Text from '@/atomic/text';
import { IBreadcrumbTextProps } from '@/molecules/breadcrumbs/interface';

/**
 * Breadcrumb Text
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.15
 */
const BreadcrumbText: FC<IBreadcrumbTextProps> = ({ children, style }) => (
  <Text.Paragraph
    fontSize={style?.fontSize as number | undefined}
    fontWeight={style?.fontWeight as number | undefined}
    color={style?.color as string | undefined}
  >
    {children}
  </Text.Paragraph>
);

export default BreadcrumbText;
