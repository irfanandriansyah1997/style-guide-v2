import '@/style/app.scss';
import '@/style/global.scss';
import '@/style/storybook.scss';

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*'
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fafafa'
      },
      {
        name: 'dark',
        value: '#313c45'
      }
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  html: {
    highlighter: {
      showLineNumbers: true
    },
    prettier: {
      tabWidth: 2,
      useTabs: false
    },
    removeEmptyComments: true
  },
  viewport: {
    viewports: {
      BBPlaybook: {
        name: 'BlackBerry Playbook',
        styles: {
          height: '1024px',
          width: '600px'
        }
      },
      BBZ30: {
        name: 'BlackBerry Z30',
        styles: {
          height: '640px',
          width: '360px'
        }
      },
      IPad: {
        name: 'iPad',
        styles: {
          height: '1024px',
          width: '768px'
        }
      },
      IPadPro: {
        name: 'iPad Pro',
        styles: {
          height: '1366px',
          width: '1024px'
        }
      },
      IPhone5: {
        name: 'iPhone 5',
        styles: {
          height: '568px',
          width: '320px'
        }
      },
      IPhone6: {
        name: 'iPhone 6',
        styles: {
          height: '667px',
          width: '375px'
        }
      },
      IPhone6Plus: {
        name: 'iPhone 6+',
        styles: {
          height: '736px',
          width: '414px'
        }
      },
      IPhoneX: {
        name: 'iPhone X',
        styles: {
          height: '812px',
          width: '375px'
        }
      },
      LGOptimus: {
        name: 'LG Optimus L70',
        styles: {
          height: '640px',
          width: '384px'
        }
      },
      'Maximum Width': {
        name: 'Maximum Width Responsive',
        styles: {
          height: '1024px',
          width: '1023px'
        }
      },
      Pixel2: {
        name: 'Google Pixel 2',
        styles: {
          height: '731px',
          width: '411px'
        }
      }
    }
  }
};
