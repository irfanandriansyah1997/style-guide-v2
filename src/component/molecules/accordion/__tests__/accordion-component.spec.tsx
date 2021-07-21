import { mount } from 'enzyme';
import React from 'react';

import { STYLE_GUIDE_COLOR } from '@/constant/color';
import Accordion from '@/molecules/accordion';
import {
  SampleContent,
  SampleToggle
} from '@/molecules/accordion/storybook/storybook-template';

const temp = React.useLayoutEffect;

beforeAll(() => {
  React.useLayoutEffect = React.useEffect;
  Object.defineProperty(HTMLElement.prototype, `scrollHeight`, {
    configurable: true,
    value: 200
  });
});

afterAll(() => {
  React.useLayoutEffect = temp;
});

describe(`Testing Accordion Component`, () => {
  it(`Testing Render Accordion Mode`, () => {
    const container = mount(
      <Accordion
        expandIcon={({ expand }) => (
          <i
            style={{
              background: expand
                ? STYLE_GUIDE_COLOR.danger500
                : STYLE_GUIDE_COLOR.dark300,
              borderRadius: `50%`,
              height: 15,
              transition: `all 0.15s`,
              width: 15
            }}
          />
        )}
        defaultActiveKey={[1]}
        theme="borderred"
        accordion
        expandIconPosition="left"
      >
        <Accordion.Item
          header={({ expand }) => (
            <SampleToggle>
              Toggle 1 {expand ? `Openned` : `Hidden`}
            </SampleToggle>
          )}
          keys={1}
        >
          <SampleContent />
        </Accordion.Item>
        <Accordion.Item
          header={({ expand }) => (
            <SampleToggle>
              Toggle 2 {expand ? `Openned` : `Hidden`}
            </SampleToggle>
          )}
          keys={2}
        >
          <SampleContent />
        </Accordion.Item>
      </Accordion>
    );

    expect(container.find(`.a-expand`).length).toBe(2);
    let expand = container.find(`.a-expand`);
    let toggle1 = expand.at(0).find(`div.m-accordion__toggle`).at(0);
    let toggle2 = expand.at(1).find(`div.m-accordion__toggle`).at(0);
    let icon1 = toggle1.at(0).find(`.m-accordion__toggle-icon--left`);
    let icon2 = toggle2.at(0).find(`.m-accordion__toggle-icon--left`);

    expect(toggle1.at(0).text()).toBe(`Toggle 1 Openned`);
    expect(icon1.length).toBe(1);
    expect(icon1.at(0).find(`i`).at(0).prop(`style`)).toHaveProperty(
      `background`,
      `#ff4f38`
    );

    expect(toggle2.at(0).text()).toBe(`Toggle 2 Hidden`);
    expect(icon2.length).toBe(1);
    expect(icon2.at(0).find(`i`).at(0).prop(`style`)).toHaveProperty(
      `background`,
      `#8b9aa5`
    );

    toggle2.simulate(`click`);
    container.update();

    expect(container.find(`.a-expand`).length).toBe(2);
    expand = container.find(`.a-expand`);
    toggle1 = expand.at(0).find(`div.m-accordion__toggle`).at(0);
    toggle2 = expand.at(1).find(`div.m-accordion__toggle`).at(0);
    icon1 = toggle1.at(0).find(`.m-accordion__toggle-icon--left`);
    icon2 = toggle2.at(0).find(`.m-accordion__toggle-icon--left`);

    expect(toggle1.at(0).text()).toBe(`Toggle 1 Hidden`);
    expect(icon1.length).toBe(1);
    expect(icon1.at(0).find(`i`).at(0).prop(`style`)).toHaveProperty(
      `background`,
      `#8b9aa5`
    );

    expect(toggle2.at(0).text()).toBe(`Toggle 2 Openned`);
    expect(icon2.length).toBe(1);
    expect(icon2.at(0).find(`i`).at(0).prop(`style`)).toHaveProperty(
      `background`,
      `#ff4f38`
    );
  });

  it(`Testing Render Multiple Mode`, () => {
    const container = mount(
      <Accordion
        defaultActiveKey={[1]}
        theme="ghost"
        expandIconPosition="right"
      >
        <Accordion.Item
          header={({ expand }) => (
            <SampleToggle>
              Toggle 1 {expand ? `Openned` : `Hidden`}
            </SampleToggle>
          )}
          keys={1}
        >
          <SampleContent />
        </Accordion.Item>
        <Accordion.Item
          header={({ expand }) => (
            <SampleToggle>
              Toggle 2 {expand ? `Openned` : `Hidden`}
            </SampleToggle>
          )}
          keys={2}
        >
          <SampleContent />
        </Accordion.Item>
        <div>hello world</div>
        sample element
      </Accordion>
    );

    expect(container.find(`.a-expand`).length).toBe(2);
    let expand = container.find(`.a-expand`);
    let toggle1 = expand.at(0).find(`div.m-accordion__toggle`).at(0);
    let toggle2 = expand.at(1).find(`div.m-accordion__toggle`).at(0);

    expect(toggle1.at(0).text()).toBe(`Toggle 1 Openned`);
    expect(toggle2.at(0).text()).toBe(`Toggle 2 Hidden`);

    toggle2.simulate(`click`);
    container.update();

    expect(container.find(`.a-expand`).length).toBe(2);
    expand = container.find(`.a-expand`);
    toggle1 = expand.at(0).find(`div.m-accordion__toggle`).at(0);
    toggle2 = expand.at(1).find(`div.m-accordion__toggle`).at(0);

    expect(toggle1.at(0).text()).toBe(`Toggle 1 Openned`);
    expect(toggle2.at(0).text()).toBe(`Toggle 2 Openned`);
  });
});
