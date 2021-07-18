import { objToString, verifiedIsNotEmpty } from '@99/helper';
import { Children, cloneElement, ReactElement, ReactNode } from 'react';

import {
  IExpandClassnameList as ClassnameList,
  IExpandClassnameList,
  IExpandContentProps,
  IExpandProps
} from '@/atomic/expand/interface';
import {
  ExpandContent,
  ExpandSelector
} from '@/atomic/expand/section/content.component';
import styles from '@/atomic/expand/style/style.module.scss';
import { checkClassnameAvailable } from '@/helper/component.helper';
import { PartialNull } from '@/interface/general';

interface IExpandChildren {
  content: ReactElement[];
  selector: ReactElement[];
}

/**
 * Generate Classname Container Element
 * @param {Partial<IExpandProps>} props - expand component props
 * @returns {string}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.06
 */
export const generateClassnameContainer = ({
  className,
  selectorPosition
}: Partial<IExpandProps>): string => {
  const response = {
    flex: true,
    'flex-column': selectorPosition === `top`,
    'flex-column-reverse': selectorPosition === `bottom`,
    [styles[`a-expand`]]: true,
    [`${className?.wrapper}`]: checkClassnameAvailable<ClassnameList>(
      className,
      `wrapper`
    )
  };

  return objToString(response);
};

/**
 * Transform Children To Expand Content
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.06.06
 */
export const generateContent = (
  children: ReactNode,
  classNameProps: PartialNull<IExpandClassnameList>
): ReactNode => {
  const response: ReactElement[] = [];
  const { content, selector } = Children.map(
    children as ReactElement,
    (child: ReactElement) => {
      const { type } = child as ReactElement;

      if ([ExpandContent, ExpandSelector].includes(type as any)) {
        return child;
      }

      return null;
    }
  )
    .filter(verifiedIsNotEmpty)
    .reduce(
      (prev: IExpandChildren, current): IExpandChildren => {
        const { type } = current as ReactElement;

        if ([ExpandContent].includes(type as any)) {
          return {
            ...prev,
            content: [...prev.content, current]
          };
        }

        return {
          ...prev,
          selector: [...prev.content, current]
        };
      },
      {
        content: [],
        selector: []
      }
    );

  if (selector.length > 0) response.push(selector[0]);
  if (content.length > 0) response.push(content[0]);

  return response.map((item, index) => {
    const { props } = item;
    const { className, ...res } = props as IExpandContentProps;

    return cloneElement(item, {
      ...res,
      className: objToString({
        [`${classNameProps?.toggle}`]:
          index === 0 &&
          checkClassnameAvailable<ClassnameList>(classNameProps, `toggle`),
        [`${classNameProps?.content}`]:
          index === 1 &&
          checkClassnameAvailable<ClassnameList>(classNameProps, `content`),
        [`${className}`]: verifiedIsNotEmpty(className)
      })
    });
  });
};
