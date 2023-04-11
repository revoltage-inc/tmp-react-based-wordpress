import React from 'react'
import type { Preview, StoryObj } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { ViewportProvider } from '../src/libs/provider/viewport'
import '../src/assets/css/common/font.css'
import '../src/assets/css/common/tailwind.css'
import '../src/assets/css/common/global.css'

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
    viewport: {
      defaultViewport: 'laptop',
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...{
          laptop: {
            name: 'Laptop',
            styles: {
              width: '1280px',
              height: '800px',
            },
          },
          desktop: {
            name: 'Desktop',
            styles: {
              width: '1536px',
              height: '960px',
            },
          },
        },
      },
    },
    backgrounds: {
      default: 'gray',
      values: [
        {
          name: 'white',
          value: '#fff',
        },
        {
          name: 'black',
          value: '#000',
        },
        {
          name: 'gray',
          value: '#f3f4f6',
        },
      ],
    },
  },
}

export const decorators: StoryObj['decorators'] = [
  (storyFn, context) => <ViewportProvider>{storyFn(context)}</ViewportProvider>,
]
