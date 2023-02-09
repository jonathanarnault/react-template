/**
 * Copyright (c) 2023 Jonathan ARNAULT
 *
 * For the full copyright and license information, please view the LICENSE file that was distributed with this source code.
 */

import React from 'react';
import { cleanup, render, queries } from '@testing-library/react';
import '@testing-library/jest-dom';

import { App } from './App';

afterEach(cleanup);

describe('App', () => {
    it('should contain "Hello World!"', async () => {
        const { container } = render(<App />);

        expect(container).toHaveTextContent('Hello World!');
    });
});
