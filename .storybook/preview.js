import '@/style/app.scss';
import '@/style/global.scss';
import '@/style/storybook.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fafafa',
      },
      {
        name: 'dark',
        value: '#313c45',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    removeEmptyComments: true,
    highlighter: {
      showLineNumbers: true,
    },
    prettier: {
      tabWidth: 2,
      useTabs: false,
    },
  }
}
