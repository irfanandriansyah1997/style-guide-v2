import { mount, render } from 'enzyme';
import React from 'react';

import Expand from '@/atomic/expand';
import {
  SampleContent,
  SampleToggle
} from '@/atomic/expand/storybook/storybook-template';

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

describe(`Testing Expand Component`, () => {
  it(`Testing Render`, () => {
    const onSpy = jest.fn((x) => x);
    const container = render(
      <Expand
        on={onSpy}
        selectorPosition="top"
        className={{
          content: `sample-content`,
          toggle: `sample-toggle`,
          wrapper: `sample-wrapper`
        }}
      >
        <Expand.Selector>
          <SampleToggle />
        </Expand.Selector>
        <Expand.Content>
          <SampleContent />
        </Expand.Content>
      </Expand>
    );

    expect(container.hasClass(`a-expand`)).toBe(true);
    expect(container.hasClass(`sample-wrapper`)).toBe(true);
    expect(container.hasClass(`flex-column`)).toBe(true);

    expect(
      container.find(`div.a-expand__selector`).first().hasClass(`sample-toggle`)
    ).toBe(true);

    expect(
      container.find(`div.a-expand__content`).first().hasClass(`sample-content`)
    ).toBe(true);
  });

  it(`Simulate toggle selector`, () => {
    const onToggleSpy = jest.fn((x) => x);
    const onResizeSpy = jest.fn((x) => x);
    const container = mount(
      <Expand
        on={({ event, payload }) => {
          switch (event) {
            case `on-resize`:
              onResizeSpy(payload);
              break;

            case `on-toggle`:
              onToggleSpy(payload);
              break;

            default:
              break;
          }
        }}
        selectorPosition="top"
      >
        <Expand.Selector>
          <SampleToggle />
        </Expand.Selector>
        <Expand.Content>
          <SampleContent />
        </Expand.Content>
        <div>Sample</div>
      </Expand>
    );

    expect(container.find(`.a-expand__selector`).length).toBe(1);
    container.find(`.a-expand__selector`).at(0).simulate(`click`);

    expect(onToggleSpy.mock.results[0].value).toBe(true);
    expect(onResizeSpy.mock.results[0].value).toBe(200);

    container.find(`.a-expand__selector`).at(0).simulate(`click`);

    expect(onToggleSpy.mock.results[1].value).toBe(false);
    expect(onResizeSpy.mock.results[1].value).toBe(0);
  });

  it(`Simulate change className`, () => {
    const onToggleSpy = jest.fn((x) => x);
    const onResizeSpy = jest.fn((x) => x);

    const container = mount(
      <Expand
        on={({ event, payload }) => {
          switch (event) {
            case `on-resize`:
              onResizeSpy(payload);
              break;

            case `on-toggle`:
              onToggleSpy(payload);
              break;

            default:
              break;
          }
        }}
        selectorPosition="top"
      >
        <Expand.Selector>
          <SampleToggle />
        </Expand.Selector>
        <Expand.Content>
          <SampleContent />
        </Expand.Content>
        <div>Sample</div>
      </Expand>
    );

    container.setProps({
      className: {
        content: `sample-content`,
        toggle: `sample-toggle`,
        wrapper: `sample-wrapper`
      }
    });
    container.update();

    expect(
      container.find(`div.a-expand__selector`).first().hasClass(`sample-toggle`)
    ).toBe(true);

    expect(
      container.find(`div.a-expand__content`).first().hasClass(`sample-content`)
    ).toBe(true);
  });
});
