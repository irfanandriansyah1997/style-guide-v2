import { objToString, verifiedIsNotEmpty } from '@99/helper';
import PropTypes from 'prop-types';
import { FC, Validator } from 'react';

import style from '@/atomic/avatar/style/style.module.scss';
import Image from '@/atomic/image';
import { IImageSizeType } from '@/interface/general';
import { useAvatar } from '@/utils/hooks/avatar.hooks';

import { IAvatarProps } from './interface';

/**
 * Avatar Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.05
 */
const Avatar: FC<IAvatarProps> = ({
  alt,
  children,
  className,
  size: unformattedSize,
  src
}) => {
  const { size } = useAvatar(unformattedSize);

  if (verifiedIsNotEmpty(children)) {
    return (
      <div
        style={{ height: size, width: size }}
        className={objToString({
          flex: true,
          'flex-align-center': true,
          'flex-justify-center': true,
          [`${style[`a-avatar`]}`]: true,
          [`${className}`]: verifiedIsNotEmpty(className)
        })}
      >
        <div>{children}</div>
      </div>
    );
  }

  if (verifiedIsNotEmpty(src)) {
    return (
      <Image
        src={src}
        alt={alt}
        className={objToString({
          [`${style[`a-avatar`]}`]: true,
          [`${className}`]: verifiedIsNotEmpty(className)
        })}
        width={size}
        height={size}
        shape="circle"
      />
    );
  }

  return null;
};

Avatar.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf<IImageSizeType>([`big`, `medium`, `small`])
  ]).isRequired as Validator<number | IImageSizeType>,
  src: PropTypes.string
};

Avatar.defaultProps = {
  alt: undefined,
  className: undefined,
  src: undefined
};

export default Avatar;
