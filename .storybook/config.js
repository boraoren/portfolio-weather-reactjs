import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react'; // <- or your view layer
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

addDecorator(
    withTests({
        results,
    })
);

// automatically import all files ending in *.stories.js
configure(require.context('../src/', true, /\.stories\.js$/), module);
