import React from 'react';

import { Global, css } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

const GlobalStyles: React.FC = () => (
	<Global
		styles={css`
      body {
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
    `}
	/>
);

export const decorators = [
	withThemeFromJSXProvider({
		GlobalStyles, // Adds your GlobalStyles component to all stories
	}),
];
