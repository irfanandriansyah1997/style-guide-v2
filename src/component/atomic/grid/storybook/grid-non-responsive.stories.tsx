/* eslint-disable react/no-array-index-key */
import type { Story } from '@storybook/react/types-6-0';
import { useState } from 'react';

import Grid from '@/atomic/grid';
import Text from '@/atomic/text';
import { STYLE_GUIDE_COLOR } from '@/constant/color';
import Builder from '@/modules/storybook';

import { IGridSize } from '../interface';
import { CUSTOM_ARGS_GRID_COMPONENT } from './storybook-args';

Grid.displayName = `Grid`;
const GRID_SIZE: IGridSize[] = [
  2,
  10,
  3,
  9,
  4,
  8,
  5,
  7,
  6,
  6,
  `auto`,
  `auto`,
  `auto`
];

export default new Builder()
  .setParentModuleName(`Grid Component`)
  .setModuleName(`Non Responsive`)
  .setType(`atomic`)
  .setComponent(Grid)
  .setMultipleArgs(
    CUSTOM_ARGS_GRID_COMPONENT.map((item) => {
      const response = { ...item };
      const label = [`lg`, `md`, `size`, `sm`, `xl`, `xs`];

      if (label.includes(response.argsName)) {
        response.control = false;
      }

      return response;
    })
  )
  .execute();

/**
 * Templates Grid Storybook
 * @param {IChipsProps} args - args props
 * @returns {ReactNode}
 */
const Template: Story<{ spaceEachItem: number; text: string }> = ({
  spaceEachItem,
  text
}) => {
  const [number] = useState<IGridSize[]>(GRID_SIZE);

  return (
    <Grid size="normal">
      <Grid.Rows spaceEachItem={spaceEachItem}>
        {number.map((item, index) => (
          <Grid.Item size={item} key={`${item}-${index}`}>
            <div
              className="text-center"
              style={{
                background: `white`,
                border: `1px dashed ${STYLE_GUIDE_COLOR.info500}`,
                borderRadius: `5px`,
                padding: `10px`,
                width: `100%`
              }}
            >
              <Text.H5
                fontSize={24}
                fontWeight={700}
                color={STYLE_GUIDE_COLOR.info500}
              >
                Col {item}
              </Text.H5>
              <br />
              <Text.H5
                fontSize={14}
                fontWeight={400}
                color={STYLE_GUIDE_COLOR.dark400}
              >
                {text}
              </Text.H5>
            </div>
          </Grid.Item>
        ))}
      </Grid.Rows>
    </Grid>
  );
};

export const SampleGrid = Template.bind({});

SampleGrid.args = {
  spaceEachItem: 10,
  text: `Sample`
};
