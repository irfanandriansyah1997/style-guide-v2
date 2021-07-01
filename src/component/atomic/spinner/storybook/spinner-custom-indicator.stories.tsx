/* eslint-disable sort-exports/sort-exports */
import type { Story } from '@storybook/react/types-6-0';

import Spinner from '@/atomic/spinner';
import { ISpinnerProps } from '@/atomic/spinner/interface';
import Text from '@/atomic/text';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import Builder from '@/modules/storybook';

Spinner.displayName = `Spinner`;

export default new Builder()
  .setModuleName(`Spinner Component`)
  .setType(`atomic`)
  .setComponent(Spinner)
  .setMultipleArgs([])
  .execute();

/**
 * Templates Storybook
 * @param {IMeterProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<ISpinnerProps> = ({ ...res }) => (
  <div style={{ margin: 20 }}>
    <Spinner {...res} />
  </div>
);

export const CustomBorderRadius = Template.bind({});

CustomBorderRadius.args = {
  spinning: true
};

export const AddChildren = Template.bind({});

AddChildren.args = {
  children: (
    <div
      className="flex flex-align-center flex-justify-center"
      style={{
        border: `1px dashed ${STYLE_GUIDE_COLOR.primary500}`,
        borderRadius: 10,
        flexDirection: `column`,
        padding: 20,
        width: 300
      }}
    >
      <Text
        tag="p"
        color={STYLE_GUIDE_COLOR.primary500}
        fontWeight={700}
        fontSize={24}
      >
        This Is Content
      </Text>
      <br />
      <Text tag="span" color={STYLE_GUIDE_COLOR.dark500}>
        Sample Content Children
      </Text>
    </div>
  ),
  spinning: true
};
