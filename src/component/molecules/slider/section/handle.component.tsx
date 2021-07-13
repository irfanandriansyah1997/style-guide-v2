import { Handle } from 'rc-slider';
import { FC } from 'react';

import { IHandleProps } from '@/molecules/slider/interface';

/**
 * Handle Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.07.13
 */
const Handler: FC<IHandleProps> = (props) => <Handle {...props} />;

export default Handler;
