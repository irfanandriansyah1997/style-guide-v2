import { fireEvent, render } from '@testing-library/react';

import Breadcrumb from '..';

describe(`Testing Breadcrumb`, () => {
  it(`Testing With Full Implemented Props`, () => {
    const onSpy = jest.fn((response) => response);
    const { container } = render(
      <Breadcrumb
        separator="/"
        className={{
          item: `sample-item`,
          separator: `sample-separator`,
          wrapper: `sample-wrapper`
        }}
        style={{
          backgroundColor: `#236d9d`,
          fontSize: 12,
          fontWeight: 400,
          heightContainer: 30,
          paddingContainer: 10,
          spaceEachItem: 20,
          textColor: `#ccc`
        }}
        on={onSpy}
      >
        <Breadcrumb.Item link="https://www.rumah123.com/" label="Beranda" />
        <Breadcrumb.Item
          link="https://www.rumah123.com/jual/residensial/"
          label="Dijual"
        />
        <Breadcrumb.Item
          link="https://www.rumah123.com/jual/jakarta-selatan/residensial/"
          label="Jakarta Selatan"
        />
        <Breadcrumb.Item
          link="https://www.rumah123.com/jual/jakarta-selatan/kebagusan/residensial/"
          label="Kebagusan"
        />
        <Breadcrumb.Item
          link="https://www.rumah123.com/jual/jakarta-selatan/kebagusan/apartemen/"
          label="Apartemen"
        />
        <Breadcrumb.Item label="aps1621487" />
        <div>Sample Div</div>
      </Breadcrumb>
    );

    if (container.firstChild) {
      const {
        childElementCount,
        childNodes
      } = container.firstChild as HTMLElement;
      const BreadcrumbItem1 = childNodes[0] as HTMLElement;
      const Divider1 = childNodes[1] as HTMLElement;
      const BreadcrumbItem2 = childNodes[2] as HTMLElement;
      const Divider2 = childNodes[3] as HTMLElement;
      const BreadcrumbItemLast = childNodes[10] as HTMLElement;

      expect(childElementCount).toBe(11);

      expect(BreadcrumbItem1).toHaveAttribute(
        `href`,
        `https://www.rumah123.com/`
      );
      expect(BreadcrumbItem1).toHaveClass(`sample-item`);
      expect(BreadcrumbItem1).toHaveTextContent(`Beranda`);
      expect(BreadcrumbItem1).toHaveStyle({ color: `rgb(204, 204, 204)` });
      expect(BreadcrumbItem1).toHaveStyle({ fontSize: 12 });
      expect(BreadcrumbItem1).toHaveStyle({ fontWeight: 400 });
      expect(BreadcrumbItem1).toHaveStyle({ margin: `0px 10px` });

      expect(Divider1).toHaveClass(`sample-separator`);
      expect(Divider1).toHaveTextContent(`/`);

      expect(BreadcrumbItem2).toHaveAttribute(
        `href`,
        `https://www.rumah123.com/jual/residensial/`
      );
      expect(BreadcrumbItem2).toHaveClass(`sample-item`);
      expect(BreadcrumbItem2).toHaveTextContent(`Dijual`);
      expect(BreadcrumbItem2).toHaveStyle({ color: `rgb(204, 204, 204)` });
      expect(BreadcrumbItem2).toHaveStyle({ fontSize: 12 });
      expect(BreadcrumbItem2).toHaveStyle({ fontWeight: 400 });
      expect(BreadcrumbItem2).toHaveStyle({ margin: `0px 10px` });

      expect(Divider2).toHaveClass(`sample-separator`);
      expect(Divider2).toHaveTextContent(`/`);

      expect(BreadcrumbItemLast.tagName).toBe(`DIV`);
      expect(BreadcrumbItemLast).toHaveClass(`sample-item`);
      expect(BreadcrumbItemLast).toHaveTextContent(`aps1621487`);
      expect(BreadcrumbItemLast.childNodes[0]).toHaveStyle({ fontSize: 12 });
      expect(BreadcrumbItemLast.childNodes[0]).toHaveStyle({ fontWeight: 400 });
      expect(BreadcrumbItemLast).toHaveStyle({
        margin: `0px 10px`
      });
    }
  });

  it(`Testing Without ClassName & Style`, () => {
    const onSpy = jest.fn((response) => response);
    const { container } = render(
      <Breadcrumb separator="/">
        <Breadcrumb.Item link="https://www.rumah123.com/" label="Beranda" />
        <Breadcrumb.Item
          link="https://www.rumah123.com/jual/residensial/"
          label="Dijual"
        />
        <Breadcrumb.Item
          link="https://www.rumah123.com/jual/jakarta-selatan/residensial/"
          label="Jakarta Selatan"
        />
        <Breadcrumb.Item
          link="https://www.rumah123.com/jual/jakarta-selatan/kebagusan/residensial/"
          label="Kebagusan"
        />
        <Breadcrumb.Item
          link="https://www.rumah123.com/jual/jakarta-selatan/kebagusan/apartemen/"
          label="Apartemen"
        />
        <Breadcrumb.Item label="aps1621487" />
        <div>Sample Div</div>
      </Breadcrumb>
    );

    if (container.firstChild) {
      const {
        childElementCount,
        childNodes
      } = container.firstChild as HTMLElement;
      const BreadcrumbItem1 = childNodes[0] as HTMLElement;
      const Divider1 = childNodes[1] as HTMLElement;
      const BreadcrumbItem2 = childNodes[2] as HTMLElement;
      const Divider2 = childNodes[3] as HTMLElement;
      const BreadcrumbItemLast = childNodes[10] as HTMLElement;

      expect(childElementCount).toBe(11);

      expect(BreadcrumbItem1).toHaveAttribute(
        `href`,
        `https://www.rumah123.com/`
      );
      expect(BreadcrumbItem1).not.toHaveClass(`sample-item`);
      expect(BreadcrumbItem1).toHaveTextContent(`Beranda`);
      expect(BreadcrumbItem1).not.toHaveStyle({ color: `rgb(204, 204, 204)` });
      expect(BreadcrumbItem1).toHaveStyle({ fontSize: undefined });
      expect(BreadcrumbItem1).not.toHaveStyle({ fontWeight: 400 });
      expect(BreadcrumbItem1).not.toHaveStyle({ margin: `0px 5px` });

      /**
       * On Click Breadcrumb1
       */
      fireEvent(
        BreadcrumbItem1,
        new MouseEvent(`click`, {
          bubbles: true,
          cancelable: true
        })
      );

      expect(onSpy).toHaveBeenCalledTimes(0);

      expect(Divider1).not.toHaveClass(`sample-separator`);
      expect(Divider1).toHaveTextContent(`/`);

      expect(BreadcrumbItem2).toHaveAttribute(
        `href`,
        `https://www.rumah123.com/jual/residensial/`
      );
      expect(BreadcrumbItem2).not.toHaveClass(`sample-item`);
      expect(BreadcrumbItem2).toHaveTextContent(`Dijual`);
      expect(BreadcrumbItem2).not.toHaveStyle({ color: `rgb(204, 204, 204)` });
      expect(BreadcrumbItem2).toHaveStyle({ fontSize: undefined });
      expect(BreadcrumbItem2).not.toHaveStyle({ fontWeight: 400 });
      expect(BreadcrumbItem2).not.toHaveStyle({ margin: `0px 5px` });

      expect(Divider2).not.toHaveClass(`sample-separator`);
      expect(Divider2).toHaveTextContent(`/`);

      expect(BreadcrumbItemLast.tagName).toBe(`DIV`);
      expect(BreadcrumbItemLast).not.toHaveClass(`sample-item`);
      expect(BreadcrumbItemLast).toHaveTextContent(`aps1621487`);
      expect(BreadcrumbItemLast.childNodes[0]).toHaveStyle({
        fontSize: undefined
      });
      expect(BreadcrumbItemLast.childNodes[0]).not.toHaveStyle({
        fontWeight: 400
      });
      expect(BreadcrumbItemLast).not.toHaveStyle({
        margin: `0px 5px`
      });
    }
  });

  it(`Simulate On Click`, () => {
    const onSpy = jest.fn((response) => response);
    const { container } = render(
      <Breadcrumb
        separator="/"
        className={{
          item: `sample-item`,
          separator: `sample-separator`,
          wrapper: `sample-wrapper`
        }}
        style={{
          backgroundColor: `#236d9d`,
          fontSize: 12,
          fontWeight: 400,
          heightContainer: 30,
          paddingContainer: 10,
          spaceEachItem: 20,
          textColor: `#ccc`
        }}
        on={onSpy}
      >
        <Breadcrumb.Item link="https://www.rumah123.com/" label="Beranda" />
        <Breadcrumb.Item
          link="https://www.rumah123.com/jual/residensial/"
          label="Dijual"
        />
        <Breadcrumb.Item
          link="https://www.rumah123.com/jual/jakarta-selatan/residensial/"
          label="Jakarta Selatan"
        />
        <Breadcrumb.Item
          link="https://www.rumah123.com/jual/jakarta-selatan/kebagusan/residensial/"
          label="Kebagusan"
        />
        <Breadcrumb.Item
          link="https://www.rumah123.com/jual/jakarta-selatan/kebagusan/apartemen/"
          label="Apartemen"
        />
        <Breadcrumb.Item label="aps1621487" />
        <div>Sample Div</div>
      </Breadcrumb>
    );

    if (container.firstChild) {
      const {
        childElementCount,
        childNodes
      } = container.firstChild as HTMLElement;
      const BreadcrumbItem1 = childNodes[0] as HTMLElement;

      expect(childElementCount).toBe(11);

      expect(BreadcrumbItem1).toHaveAttribute(
        `href`,
        `https://www.rumah123.com/`
      );
      expect(BreadcrumbItem1).toHaveClass(`sample-item`);
      expect(BreadcrumbItem1).toHaveTextContent(`Beranda`);
      expect(BreadcrumbItem1).toHaveStyle({ color: `rgb(204, 204, 204)` });
      expect(BreadcrumbItem1).toHaveStyle({ fontSize: 12 });
      expect(BreadcrumbItem1).toHaveStyle({ fontWeight: 400 });
      expect(BreadcrumbItem1).toHaveStyle({ margin: `0px 10px` });

      /**
       * On Click Breadcrumb1
       */
      fireEvent(
        BreadcrumbItem1,
        new MouseEvent(`click`, {
          bubbles: true,
          cancelable: true
        })
      );

      expect(onSpy).toHaveBeenCalledTimes(1);
      expect(onSpy.mock.results[0].value.event).toBe(
        `on-click-breadcrumb-item`
      );
    }
  });
});
