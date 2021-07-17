import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { TransitionStatus } from 'react-transition-group';

import Fab from '@/atomic/fab';
import { generateFABAnimation } from '@/atomic/fab/helper/fab.helper';

describe(`Testing fab component`, () => {
  describe(`Testing FAB Shape`, () => {
    it(`Testing Basic Shape With Light Theme`, () => {
      const onSpy = jest.fn();
      const { container } = render(
        <Fab
          icon={<div>★</div>}
          on={onSpy}
          shape="basic"
          show
          theme="light"
          position="absolute"
        />
      );

      expect(container.outerHTML).toMatchSnapshot();

      if (container.firstChild) {
        expect(container.firstChild).toHaveClass(`a-fab`);
        expect(container.firstChild).toHaveClass(`a-fab--shape-basic`);
        expect(container.firstChild).not.toHaveClass(`a-fab--shape-small`);
        expect(container.firstChild).not.toHaveClass(`a-fab--shape-extended`);
        expect(container.firstChild).toHaveClass(`a-fab--theme-light`);
        expect(container.firstChild).not.toHaveClass(`a-fab--theme-dark`);
        expect(container.firstChild).toHaveClass(`absolute`);
        expect(container.firstChild).not.toHaveClass(`fixed`);
        expect(container.firstChild).not.toHaveClass(`flex-row-reverse`);

        const { childNodes } = container.firstChild as HTMLElement;

        expect(childNodes.length).toBe(1);
        expect((childNodes[0] as HTMLElement).textContent).toBe(`★`);
      }
    });

    it(`Testing Small Shape With Dark Theme`, () => {
      const onSpy = jest.fn();
      const { container } = render(
        <Fab
          icon={<div>★</div>}
          on={onSpy}
          shape="small"
          show
          theme="dark"
          position="fixed"
        />
      );

      expect(container.outerHTML).toMatchSnapshot();

      if (container.firstChild) {
        expect(container.firstChild).toHaveClass(`a-fab`);
        expect(container.firstChild).not.toHaveClass(`a-fab--shape-basic`);
        expect(container.firstChild).toHaveClass(`a-fab--shape-small`);
        expect(container.firstChild).not.toHaveClass(`a-fab--shape-extended`);
        expect(container.firstChild).not.toHaveClass(`a-fab--theme-light`);
        expect(container.firstChild).toHaveClass(`a-fab--theme-dark`);
        expect(container.firstChild).not.toHaveClass(`absolute`);
        expect(container.firstChild).toHaveClass(`fixed`);
        expect(container.firstChild).not.toHaveClass(`flex-row-reverse`);

        const { childNodes } = container.firstChild as HTMLElement;

        expect(childNodes.length).toBe(1);
        expect((childNodes[0] as HTMLElement).textContent).toBe(`★`);
      }
    });

    it(`Testing Extended Shape With Dark Theme`, () => {
      const onSpy = jest.fn();
      const { container } = render(
        <Fab
          icon={<div>★</div>}
          on={onSpy}
          text="Sample Text"
          shape="extended"
          show
          theme="dark"
          rtl
          position="fixed"
        />
      );

      expect(container.outerHTML).toMatchSnapshot();

      if (container.firstChild) {
        expect(container.firstChild).toHaveClass(`a-fab`);
        expect(container.firstChild).not.toHaveClass(`a-fab--shape-basic`);
        expect(container.firstChild).not.toHaveClass(`a-fab--shape-small`);
        expect(container.firstChild).toHaveClass(`a-fab--shape-extended`);
        expect(container.firstChild).not.toHaveClass(`a-fab--theme-light`);
        expect(container.firstChild).toHaveClass(`a-fab--theme-dark`);
        expect(container.firstChild).not.toHaveClass(`absolute`);
        expect(container.firstChild).toHaveClass(`fixed`);
        expect(container.firstChild).toHaveClass(`flex-row-reverse`);

        const { childNodes } = container.firstChild as HTMLElement;

        expect(childNodes.length).toBe(2);
        expect((childNodes[0] as HTMLElement).textContent).toBe(`★`);
        expect((childNodes[1] as HTMLElement).textContent).toBe(`Sample Text`);
      }
    });
  });

  describe(`Testing FAB Shape`, () => {
    it(`Customize Position`, () => {
      const onSpy = jest.fn();
      const { container } = render(
        <Fab
          icon={<div>★</div>}
          on={onSpy}
          text="Sample Text"
          shape="extended"
          show
          theme="dark"
          rtl
          position="fixed"
          left={10}
          right={10}
          bottom={10}
          top={10}
          animation="fade-in"
        />
      );

      expect(container.outerHTML).toMatchSnapshot();

      if (container.firstChild) {
        expect(container.firstChild).toHaveStyle({ bottom: `10px` });
      }
    });
  });

  describe(`Testing FAB Animation`, () => {
    it(`Set Show`, () => {
      const onSpy = jest.fn();
      const component = mount(
        <Fab
          icon={<div>★</div>}
          on={onSpy}
          text="Sample Text"
          shape="extended"
          theme="dark"
          rtl
          show={false}
          position="fixed"
          left={10}
          right={10}
          bottom={10}
          top={10}
          animation="fade-in"
        />
      );

      component.setProps({
        show: true
      });
      component.update();

      expect(
        component.find(`button`).hasClass(`fade-in-entering`)
      ).toBeTruthy();
      expect(component.find(`button`).hasClass(`fade-in-exiting`)).toBeFalsy();
    });

    it(`Set Hidden`, () => {
      const onSpy = jest.fn();
      const component = mount(
        <Fab
          icon={<div>★</div>}
          on={onSpy}
          text="Sample Text"
          shape="extended"
          theme="dark"
          rtl
          show
          position="fixed"
          left={10}
          right={10}
          bottom={10}
          top={10}
          animation="fade-in"
        />
      );

      component.setProps({
        show: false
      });
      component.update();

      expect(component.find(`button`).hasClass(`fade-in-entering`)).toBeFalsy();
      expect(component.find(`button`).hasClass(`fade-in-exiting`)).toBeTruthy();
    });

    it(`Pass wrong parameter when generate className`, () => {
      try {
        generateFABAnimation(
          `fade-in`,
          (`unknown` as unknown) as TransitionStatus
        );
      } catch (e) {
        if (e instanceof Error) {
          expect(e.message).toBe(`Unknown state`);
        }
      }
    });
  });
});
