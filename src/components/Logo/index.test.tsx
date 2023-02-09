/**
 * Copyright (c) 2023 Jonathan ARNAULT
 *
 * For the full copyright and license information, please view the LICENSE file that was distributed with this source code.
 */

import React from 'react';
import { cleanup, render, queries } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Logo } from './index';

afterEach(cleanup);

describe('Logo', () => {
    it('should contain an image.', async () => {
        const { container } = render(<Logo />);

        expect(container).toContainHTML('<img src="/components/Logo/logo.png" />');
    });
});
